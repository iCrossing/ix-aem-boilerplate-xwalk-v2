/**
 * Kumiko UI Integration for AEM EDS
 * Adapts your existing NPM module pattern to work with EDS
 */

// Configuration - adjust based on how you want to host kumikoUI
const KUMIKO_BASE_URL = 'https://unpkg.com/kumiko-ui@1.0.1-24';
// Or for local development: const KUMIKO_BASE_URL = '/scripts/kumiko-ui';

const loadedComponents = new Set();
const loadedStyles = new Set();

/**
 * Loads CSS files using EDS loadCSS function
 * @param {string} href - CSS file URL
 */
async function loadKumikoCSS(href) {
  if (loadedStyles.has(href)) return;
  
  const { loadCSS } = await import('./aem.js');
  await loadCSS(href);
  loadedStyles.add(href);
}

/**
 * Loads a Kumiko component (replicating your webpack pattern)
 * @param {string} componentName - Component name (e.g., 'kmk-button')
 * @param {string} theme - Theme name (e.g., 'bridgestone')
 */
export async function loadKumikoComponent(componentName, theme = 'bridgestone') {
  const componentKey = `${componentName}-${theme}`;
  
  if (loadedComponents.has(componentKey)) {
    return;
  }

  try {
    // Load theme CSS first (replicating your CSS import pattern)
    await loadKumikoCSS(`${KUMIKO_BASE_URL}/js/${theme}/css/${theme}.theme.css`);
    
    // Load component-specific CSS  
    await loadKumikoCSS(`${KUMIKO_BASE_URL}/js/${theme}/css/components/${componentName.replace('kmk-', '')}.css`);
    
    // Load Lit if not already loaded
    if (!window.LitElement) {
      await import('https://unpkg.com/lit@3.1.2/index.js');
    }
    
    // Load the component JS (replicating your TS import pattern)
    await import(`${KUMIKO_BASE_URL}/js/${componentName}.js`);
    
    loadedComponents.add(componentKey);
    console.log(`✅ Loaded Kumiko component: ${componentName} with ${theme} theme`);
    
  } catch (error) {
    console.error(`❌ Failed to load Kumiko component ${componentName}:`, error);
    throw error;
  }
}

/**
 * Extract component properties from EDS block structure
 * @param {Element} block - The EDS block element
 * @returns {Object} Properties object
 */
export function extractKumikoProps(block) {
  const props = {};
  const rows = [...block.children];
  
  // First row often contains the main content (button text, etc.)
  const firstRow = rows[0];
  if (firstRow && firstRow.children.length === 1) {
    props.content = firstRow.textContent.trim();
  }
  
  // Remaining rows contain key-value pairs
  rows.slice(1).forEach(row => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim().toLowerCase();
      const value = cells[1].textContent.trim();
      
      // Convert to component attribute format
      switch (key) {
        case 'variant':
        case 'size':
        case 'url':
        case 'target':
        case 'icon':
          props[key] = value;
          break;
        case 'icon position':
          props['icon-position'] = value;
          break;
        case 'full width':
          props['full-width'] = value === 'true';
          break;
        case 'disabled':
        case 'loading':
          props[key] = value === 'true';
          break;
        default:
          // Store other properties as data attributes
          props[`data-${key.replace(/\s+/g, '-')}`] = value;
      }
    }
  });
  
  return props;
}

/**
 * Create and configure a Kumiko web component
 * @param {string} tagName - Component tag name
 * @param {Object} props - Properties to set  
 * @param {string} content - Inner content
 * @returns {HTMLElement} Configured component
 */
export function createKumikoComponent(tagName, props = {}, content = '') {
  const element = document.createElement(tagName);
  
  // Set attributes and properties
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'content') return; // Handle separately
    
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(key, '');
    } else {
      element.setAttribute(key, value);
    }
  });
  
  // Set content
  if (content) {
    element.innerHTML = content;
  }
  
  return element;
}
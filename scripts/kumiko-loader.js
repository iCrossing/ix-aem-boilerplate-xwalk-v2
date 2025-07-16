/**
 * Kumiko UI Integration for AEM EDS
 * Now uses NPM package instead of remote URLs
 */

const loadedComponents = new Set();
const loadedStyles = new Set();

/**
 * Loads CSS files using EDS loadCSS function
 * @param {string} href - CSS file URL or import
 */
async function loadKumikoCSS(cssPath) {
  if (loadedStyles.has(cssPath)) return;
  
  try {
    const { loadCSS } = await import('./aem.js');
    await loadCSS(cssPath);
    loadedStyles.add(cssPath);
  } catch (error) {
    console.warn(`Could not load CSS: ${cssPath}`, error);
  }
}

/**
 * Loads a Kumiko component from NPM package
 * @param {string} componentName - Component name (e.g., 'kmk-button')
 * @param {string} theme - Theme name (e.g., 'bridgestone')
 */
export async function loadKumikoComponent(componentName, theme = 'bridgestone') {
  const componentKey = `${componentName}-${theme}`;
  
  if (loadedComponents.has(componentKey)) {
    return;
  }

  try {
    // Load Lit if not already loaded (now from NPM package)
    if (!window.LitElement) {
      await import('lit');
    }
    
    // Import the component directly from NPM package
    // The exact path will depend on how your kumiko-ui package is structured
    await import(`kumiko-ui/js/${componentName}.js`);
    
    // Load theme CSS if available (optional, may need adjustment based on package structure)
    try {
      await loadKumikoCSS(`/node_modules/kumiko-ui/js/${theme}/css/${theme}.theme.css`);
      await loadKumikoCSS(`/node_modules/kumiko-ui/js/${theme}/css/components/${componentName.replace('kmk-', '')}.css`);
    } catch (cssError) {
      console.warn(`CSS loading skipped for ${componentName}:`, cssError);
    }
    
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
  
  // Handle Universal Editor structure (key-value pairs from authoring)
  rows.forEach(row => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim().toLowerCase();
      const value = cells[1].textContent.trim();
      
      // Convert to component attribute format
      switch (key) {
        case 'text':
        case 'variant':
        case 'size':
        case 'url':
        case 'target':
        case 'icon':
          props[key] = value;
          break;
        case 'icon position':
        case 'iconposition':
          props['iconPosition'] = value;
          break;
        case 'full width':
        case 'fullwidth':
          props['fullWidth'] = value === 'true';
          break;
        case 'disabled':
        case 'loading':
          props[key] = value === 'true';
          break;
        default:
          // Store other properties as data attributes
          props[`data-${key.replace(/\s+/g, '-')}`] = value;
      }
    } else if (cells.length === 1) {
      // Single cell might contain button text
      const content = cells[0].textContent.trim();
      if (content && !props.text) {
        props.text = content;
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
    if (key === 'text' || key === 'content') return; // Handle separately
    
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(key, '');
    } else if (value !== undefined && value !== null && value !== '') {
      element.setAttribute(key, value);
    }
  });
  
  // Set content - prioritize content param, then props.text
  const finalContent = content || props.text || '';
  if (finalContent) {
    element.textContent = finalContent;
  }
  
  return element;
}

/**
 * Alternative method for when package structure requires different imports
 * This provides fallback loading mechanisms
 */
export async function loadKumikoComponentFallback(componentName, theme = 'bridgestone') {
  const componentKey = `${componentName}-${theme}`;
  
  if (loadedComponents.has(componentKey)) return;

  try {
    // Try different import patterns based on how the package might be structured
    const possiblePaths = [
      `kumiko-ui/${componentName}`,
      `kumiko-ui/components/${componentName}`,
      `kumiko-ui/js/${componentName}`,
      `kumiko-ui/dist/${componentName}`,
    ];

    let loaded = false;
    for (const path of possiblePaths) {
      try {
        await import(path);
        loaded = true;
        console.log(`✅ Loaded ${componentName} from ${path}`);
        break;
      } catch (err) {
        continue;
      }
    }

    if (!loaded) {
      throw new Error(`Could not find ${componentName} in any expected paths`);
    }

    loadedComponents.add(componentKey);

  } catch (error) {
    console.error(`❌ Fallback loading failed for ${componentName}:`, error);
    throw error;
  }
}
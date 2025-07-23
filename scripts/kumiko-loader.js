/**
 * Kumiko UI Integration for AEM EDS
 * Loads Kumiko components from the installed NPM package.
 */

const loadedComponents = new Set();
const loadedStyles = new Set();

/**
 * Loads CSS files using the aem.js helper.
 * @param {string} href - Path to the CSS file.
 */
async function loadKumikoCSS(href) {
  if (loadedStyles.has(href)) {
    return;
  }

  try {
    const { loadCSS } = await import('./aem.js');
    await loadCSS(href);
    loadedStyles.add(href);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Could not load Kumiko CSS: ${href}`, error);
  }
}

/**
 * Loads a Kumiko component and its associated styles from the NPM package.
 * @param {string} componentName - The name of the component (e.g., 'kmk-button').
 * @param {string} theme - The theme to use (e.g., 'bridgestone').
 */
export async function loadKumikoComponent(componentName, theme = 'bridgestone') {
  const componentKey = `${componentName}-${theme}`;

  if (loadedComponents.has(componentKey)) {
    return;
  }

  try {
    // Dynamically import the component's JavaScript module.
    // This relies on the kumiko-ui package structure.
    await import(`kumiko-ui/js/${componentName}.js`);

    // Load theme and component-specific CSS.
    // Note: The path depends on how your project serves node_modules.
    // This path might need adjustment if you use a different setup.
    await loadKumikoCSS(`/node_modules/kumiko-ui/js/${theme}/css/${theme}.theme.css`);
    const componentCssName = componentName.replace('kmk-', '');
    await loadKumikoCSS(`/node_modules/kumiko-ui/js/${theme}/css/components/${componentCssName}.css`);

    loadedComponents.add(componentKey);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Failed to load Kumiko component ${componentName}:`, error);
    throw error;
  }
}

/**
 * Extracts properties from the EDS block structure for the web component.
 * This function is designed to read the Universal Editor's DOM structure.
 * @param {Element} block - The block element from the DOM.
 * @returns {object} A key-value map of properties for the component.
 */
export function extractKumikoProps(block) {
  const props = {};

  // Find all elements that are marked as properties by the Universal Editor.
  const propElements = block.querySelectorAll('[data-aue-prop]');
  propElements.forEach((element) => {
    const propName = element.getAttribute('data-aue-prop');
    const valueElement = element.querySelector('a') || element;
    const propValue = (valueElement.href || valueElement.textContent).trim();

    props[propName] = propValue;
  });

  return props;
}

/**
 * Creates a new web component element and sets its properties.
 * @param {string} tagName - The HTML tag for the web component (e.g., 'kmk-button').
 * @param {object} props - The properties to set as attributes on the element.
 * @param {string} content - The inner text or HTML for the component.
 * @returns {HTMLElement} The configured web component.
 */
export function createKumikoComponent(tagName, props = {}, content = '') {
  const element = document.createElement(tagName);

  Object.entries(props).forEach(([key, value]) => {
    if (key === 'content' || key === 'text') {
      return; // Handled separately by the content parameter.
    }
    if (typeof value === 'boolean') {
      if (value) {
        element.setAttribute(key, '');
      }
    } else if (value) {
      element.setAttribute(key, value);
    }
  });

  if (content) {
    element.textContent = content;
  }

  return element;
}

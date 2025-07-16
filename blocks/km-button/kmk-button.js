import { loadKumikoComponent, extractKumikoProps, createKumikoComponent } from '../../scripts/kumiko-loader.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default async function decorate(block) {
  try {
    // Load the kmk-button component with bridgestone theme
    await loadKumikoComponent('kmk-button', 'bridgestone');
    
    // Extract configuration from EDS block content
    // For Universal Editor, the properties come from the authoring interface
    const props = extractKumikoProps(block);
    
    // Create the Kumiko button component
    const kumikoButton = createKumikoComponent('kmk-button', {
      variant: props.variant || 'primary',
      size: props.size || 'md',
      url: props.url || '',
      target: props.target || '_self',
      icon: props.icon || '',
      'icon-position': props.iconPosition || 'right',
      disabled: props.disabled || false,
      'full-width': props.fullWidth || false,
      loading: props.loading || false
    }, props.text || 'Button');
    
    // Preserve AEM authoring instrumentation
    moveInstrumentation(block, kumikoButton);
    
    // Replace block content with web component
    block.textContent = '';
    block.appendChild(kumikoButton);
    
    // Add wrapper class for any additional styling
    block.classList.add('kumiko-button-wrapper');
    
  } catch (error) {
    console.error('Failed to load kmk-button:', error);
    // Fallback: create regular button
    const fallbackButton = document.createElement('button');
    fallbackButton.textContent = block.textContent || 'Button';
    fallbackButton.className = 'button primary';
    block.textContent = '';
    block.appendChild(fallbackButton);
  }
}
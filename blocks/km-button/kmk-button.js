import { loadKumikoComponent, extractKumikoProps, createKumikoComponent } from '../../scripts/kumiko-loader.js';

export default async function decorate(block) {
  try {
    // eslint-disable-next-line no-console
    console.log('🔧 Decorating kmk-button block:', block);

    // Load the kmk-button component with bridgestone theme
    await loadKumikoComponent('kmk-button', 'bridgestone');

    // Extract configuration from EDS block content
    const props = extractKumikoProps(block);

    // Get URL from the anchor tag if present
    const anchorElement = block.querySelector('a');
    if (anchorElement) {
      props.url = anchorElement.href;
    }

    // eslint-disable-next-line no-console
    console.log('📋 Extracted props:', props);

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
      loading: props.loading || false,
    }, props.text || 'Button');

    // eslint-disable-next-line no-console
    console.log('🎯 Created kumiko button:', kumikoButton);

    // Save the original data attributes from the block
    const dataAttributes = {};
    Array.from(block.attributes).forEach((attr) => {
      if (attr.name.startsWith('data-')) {
        dataAttributes[attr.name] = attr.value;
      }
    });

    // Clear the block but preserve the class
    const blockClass = block.className;
    block.innerHTML = '';
    block.className = blockClass;

    // Restore data attributes
    Object.entries(dataAttributes).forEach(([name, value]) => {
      block.setAttribute(name, value);
    });

    // Add the web component
    block.appendChild(kumikoButton);

    // eslint-disable-next-line no-console
    console.log('✅ kmk-button decoration complete');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Failed to load kmk-button:', error);
    // Fallback: create regular button
    const fallbackButton = document.createElement('button');
    fallbackButton.textContent = block.textContent || 'Button';
    fallbackButton.className = 'button primary';
    block.textContent = '';
    block.appendChild(fallbackButton);
  }
}

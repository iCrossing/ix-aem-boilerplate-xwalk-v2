import { loadKumikoComponent, extractKumikoProps, createKumikoComponent } from '../../scripts/kumiko-loader.js';

export default async function decorate(block) {
  try {
    // The component from the npm package is 'kmk-button'
    await loadKumikoComponent('kmk-button', 'bridgestone');
    const props = extractKumikoProps(block);

    // Create the 'kmk-button' web component
    const kumikoButton = createKumikoComponent('kmk-button', {
      variant: props.variant || 'primary',
      size: props.size || 'md',
      url: props.url || '#', // Use extracted url or a fallback
    }, props.text || 'Button');

    // Clear the original EDS block content and append the new web component
    block.innerHTML = '';
    block.appendChild(kumikoButton);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to load kmk-button-v1:', error);
  }
}

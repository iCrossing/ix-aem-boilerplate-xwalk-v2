/**
 * Simple test to verify kumiko-ui NPM package integration
 */

import { loadKumikoComponent } from './kumiko-loader.js';

export async function testKumikoIntegration() {
  try {
    console.log('Testing Kumiko UI NPM package integration...');

    // Test loading a component
    await loadKumikoComponent('kmk-button', 'bridgestone');

    // Test creating a component
    const testButton = document.createElement('kmk-button');
    testButton.setAttribute('variant', 'primary');
    testButton.textContent = 'Test Button';

    console.log('✅ Kumiko integration test passed');
    return true;
  } catch (error) {
    console.error('❌ Kumiko integration test failed:', error);
    return false;
  }
}

// Uncomment to run test
// testKumikoIntegration();

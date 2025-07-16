import { css as t } from "lit";
const o = t`
button, a {
  outline: none;
  display: inline-flex;
  align-items: center;
  &:not(:disabled) {
    cursor: pointer;
  }
}

.full-width {
  display: flex;
  justify-content: center;
}

:host([full-width]){
  width: 100%;
}

button.full-width {
  width: 100%;
}

.variant-primary {
  background-color: var(--button-color-container-fill-primary-default);
  color: var(--button-color-text-fill-primary-default);
  --svg-icon-color: var(--button-color-text-fill-primary-default);
  border: var(--button-border-style-primary-default);
  border-radius: var(--button-border-radius-primary-default);

  &:hover:not(:disabled) {
    background-color: var(--button-color-container-fill-primary-hover);
    color: var(--button-color-text-fill-primary-hover);
    --svg-icon-color: var(--button-color-text-fill-primary-hover);
    border: var(--button-border-style-primary-hover);
    border-radius: var(--button-border-radius-primary-hover);
  }
  &:active:not(:disabled) {
    background-color: var(--button-color-container-fill-primary-pressed);
    color: var(--button-color-text-fill-primary-pressed);
    --svg-icon-color: var(--button-color-text-fill-primary-pressed);
    border: var(--button-border-style-primary-pressed);
    border-radius: var(--button-border-radius-primary-pressed);
  }
  &:focus-visible:not(:disabled):not(:active) {
    background-color: var(--button-color-container-fill-primary-focus);
    color: var(--button-color-text-fill-primary-focus);
    --svg-icon-color: var(--button-color-text-fill-primary-focus);
    border: var(--button-border-style-primary-focus);
    border-radius: var(--button-border-radius-primary-focus);
  }
  &.loading {
    background-color: var(--button-color-container-fill-primary-loading);
    --kmk-loader-color: var(--button-color-icon-fill-loading-primary);
    border: var(--button-border-style-primary-loading);
    border-radius: var(--button-border-radius-primary-loading);
  }
  &:disabled:not(.loading) {
    background-color: var(--button-color-container-fill-primary-disabled);
    color: var(--button-color-text-fill-primary-disabled);
    --svg-icon-color: var(--button-color-text-fill-primary-disabled);
    border: var(--button-border-style-primary-disabled);
    border-radius: var(--button-border-radius-primary-disabled);
  }

  &.size-sm {
    padding-top: var(--button-spacing-ver-padding-top-primary-sm);
    padding-bottom: var(--button-spacing-ver-padding-bottom-primary-sm);
    padding-left: var(--button-spacing-hor-padding-left-primary-sm);
    padding-right: var(--button-spacing-hor-padding-right-primary-sm);
    font-weight: var(--button-fonts-label-primary-sm-font-weight);
    font-size: var(--button-fonts-label-primary-sm-font-size);
    line-height: var(--button-fonts-label-primary-sm-line-height);
    font-family: var(--button-fonts-label-primary-sm-font-family);
    letter-spacing: var(--button-fonts-label-primary-sm-letter-spacing);
    margin: var(--button-fonts-label-primary-sm-margin-spacing) 0;
    text-indent: var(--button-fonts-label-primary-sm-text-indent);
    text-transform: var(--button-fonts-label-primary-sm-text-transform);
    text-decoration: var(--button-fonts-label-primary-sm-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-primary-sm);
    --kmk-loader-size: calc(var(--button-sizing-icon-primary-sm) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-primary-sm);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-primary-sm);
    }    
  }

  &.size-md {
    padding-top: var(--button-spacing-ver-padding-top-primary-md);
    padding-bottom: var(--button-spacing-ver-padding-bottom-primary-md);
    padding-left: var(--button-spacing-hor-padding-left-primary-md);
    padding-right: var(--button-spacing-hor-padding-right-primary-md);
    font-weight: var(--button-fonts-label-primary-md-font-weight);
    font-size: var(--button-fonts-label-primary-md-font-size);
    line-height: var(--button-fonts-label-primary-md-line-height);
    font-family: var(--button-fonts-label-primary-md-font-family);
    letter-spacing: var(--button-fonts-label-primary-md-letter-spacing);
    margin: var(--button-fonts-label-primary-md-margin-spacing) 0;
    text-indent: var(--button-fonts-label-primary-md-text-indent);
    text-transform: var(--button-fonts-label-primary-md-text-transform);
    text-decoration: var(--button-fonts-label-primary-md-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-primary-md);
    --kmk-loader-size: calc(var(--button-sizing-icon-primary-md) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-primary-md);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-primary-md);
    } 
  }

  &.size-lg {
    padding-top: var(--button-spacing-ver-padding-top-primary-lg);
    padding-bottom: var(--button-spacing-ver-padding-bottom-primary-lg);
    padding-left: var(--button-spacing-hor-padding-left-primary-lg);
    padding-right: var(--button-spacing-hor-padding-right-primary-lg);
    font-weight: var(--button-fonts-label-primary-lg-font-weight);
    font-size: var(--button-fonts-label-primary-lg-font-size);
    line-height: var(--button-fonts-label-primary-lg-line-height);
    font-family: var(--button-fonts-label-primary-lg-font-family);
    letter-spacing: var(--button-fonts-label-primary-lg-letter-spacing);
    margin: var(--button-fonts-label-primary-lg-margin-spacing) 0;
    text-indent: var(--button-fonts-label-primary-lg-text-indent);
    text-transform: var(--button-fonts-label-primary-lg-text-transform);
    text-decoration: var(--button-fonts-label-primary-lg-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-primary-lg);
    --kmk-loader-size: calc(var(--button-sizing-icon-primary-lg) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-primary-lg);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-primary-lg);
    } 
  }
}

.variant-secondary {
  background-color: var(--button-color-container-fill-secondary-default);
  color: var(--button-color-text-fill-secondary-default);
  --svg-icon-color: var(--button-color-text-fill-secondary-default);
  border: var(--button-border-style-secondary-default);
  border-radius: var(--button-border-radius-secondary-default);

  &:hover:not(:disabled) {
    background-color: var(--button-color-container-fill-secondary-hover);
    color: var(--button-color-text-fill-secondary-hover);
    --svg-icon-color: var(--button-color-text-fill-secondary-hover);
    border: var(--button-border-style-secondary-hover);
    border-radius: var(--button-border-radius-secondary-hover);
  }
  &:active:not(:disabled) {
    background-color: var(--button-color-container-fill-secondary-pressed);
    color: var(--button-color-text-fill-secondary-pressed);
    --svg-icon-color: var(--button-color-text-fill-secondary-pressed);
    border: var(--button-border-style-secondary-pressed);
    border-radius: var(--button-border-radius-secondary-pressed);
  }
  &:focus-visible:not(:disabled):not(:active) {
    background-color: var(--button-color-container-fill-secondary-focus);
    color: var(--button-color-text-fill-secondary-focus);
    --svg-icon-color: var(--button-color-text-fill-secondary-focus);
    border: var(--button-border-style-secondary-focus);
    border-radius: var(--button-border-radius-secondary-focus);
  }
  &.loading {
    background-color: var(--button-color-container-fill-secondary-loading);
    --kmk-loader-color: var(--button-color-icon-fill-loading-secondary);
    border: var(--button-border-style-secondary-loading);
  }
  &:disabled:not(.loading) {
    background-color: var(--button-color-container-fill-secondary-disabled);
    color: var(--button-color-text-fill-secondary-disabled);
    --svg-icon-color: var(--button-color-text-fill-secondary-disabled);
    border: var(--button-border-style-secondary-disabled);
    border-radius: var(--button-border-radius-secondary-disabled);
  }

  &.size-sm {
    padding-top: var(--button-spacing-ver-padding-top-secondary-sm);
    padding-bottom: var(--button-spacing-ver-padding-bottom-secondary-sm);
    padding-left: var(--button-spacing-hor-padding-left-secondary-sm);
    padding-right: var(--button-spacing-hor-padding-right-secondary-sm);
    font-weight: var(--button-fonts-label-secondary-sm-font-weight);
    font-size: var(--button-fonts-label-secondary-sm-font-size);
    line-height: var(--button-fonts-label-secondary-sm-line-height);
    font-family: var(--button-fonts-label-secondary-sm-font-family);
    letter-spacing: var(--button-fonts-label-secondary-sm-letter-spacing);
    margin: var(--button-fonts-label-secondary-sm-margin-spacing) 0;
    text-indent: var(--button-fonts-label-secondary-sm-text-indent);
    text-transform: var(--button-fonts-label-secondary-sm-text-transform);
    text-decoration: var(--button-fonts-label-secondary-sm-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-secondary-sm);
    --kmk-loader-size: calc(var(--button-sizing-icon-secondary-sm) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-secondary-sm);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-secondary-sm);
    } 
  }

  &.size-md {
    padding-top: var(--button-spacing-ver-padding-top-secondary-md);
    padding-bottom: var(--button-spacing-ver-padding-bottom-secondary-md);
    padding-left: var(--button-spacing-hor-padding-left-secondary-md);
    padding-right: var(--button-spacing-hor-padding-right-secondary-md);
    font-weight: var(--button-fonts-label-secondary-md-font-weight);
    font-size: var(--button-fonts-label-secondary-md-font-size);
    line-height: var(--button-fonts-label-secondary-md-line-height);
    font-family: var(--button-fonts-label-secondary-md-font-family);
    letter-spacing: var(--button-fonts-label-secondary-md-letter-spacing);
    margin: var(--button-fonts-label-secondary-md-margin-spacing) 0;
    text-indent: var(--button-fonts-label-secondary-md-text-indent);
    text-transform: var(--button-fonts-label-secondary-md-text-transform);
    text-decoration: var(--button-fonts-label-secondary-md-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-secondary-md);
    --kmk-loader-size: calc(var(--button-sizing-icon-secondary-md) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-secondary-md);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-secondary-md);
    } 
  }

  &.size-lg {
    padding-top: var(--button-spacing-ver-padding-top-secondary-lg);
    padding-bottom: var(--button-spacing-ver-padding-bottom-secondary-lg);
    padding-left: var(--button-spacing-hor-padding-left-secondary-lg);
    padding-right: var(--button-spacing-hor-padding-right-secondary-lg);
    font-weight: var(--button-fonts-label-secondary-lg-font-weight);
    font-size: var(--button-fonts-label-secondary-lg-font-size);
    line-height: var(--button-fonts-label-secondary-lg-line-height);
    font-family: var(--button-fonts-label-secondary-lg-font-family);
    letter-spacing: var(--button-fonts-label-secondary-lg-letter-spacing);
    margin: var(--button-fonts-label-secondary-lg-margin-spacing) 0;
    text-indent: var(--button-fonts-label-secondary-lg-text-indent);
    text-transform: var(--button-fonts-label-secondary-lg-text-transform);
    text-decoration: var(--button-fonts-label-secondary-lg-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-secondary-lg);
    --kmk-loader-size: calc(var(--button-sizing-icon-secondary-lg) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-secondary-lg);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-secondary-lg);
    } 
  }
}

.variant-tertiary {
  background-color: var(--button-color-container-fill-tertiary-default);
  color: var(--button-color-text-fill-tertiary-default);
  border: var(--button-border-style-tertiary-default);

  &:hover:not(:disabled) {
    background-color: var(--button-color-container-fill-tertiary-hover);
    color: var(--button-color-text-fill-tertiary-hover);
    border: var(--button-border-style-tertiary-hover);
  }
  &:active:not(:disabled) {
    background-color: var(--button-color-container-fill-tertiary-pressed);
    color: var(--button-color-text-fill-tertiary-pressed);
    border: var(--button-border-style-tertiary-pressed);
  }
  &:focus-visible:not(:disabled):not(:active) {
    background-color: var(--button-color-container-fill-tertiary-focus);
    color: var(--button-color-text-fill-tertiary-focus);
    border: var(--button-border-style-tertiary-focus);
    border-radius: var(--button-border-radius-tertiary-focus);
  }
  &.loading {
    background-color: var(--button-color-container-fill-tertiary-loading);
    --kmk-loader-color: var(--button-color-icon-fill-loading-tertiary);
    border: var(--button-border-style-tertiary-loading);
  }
  &:disabled:not(.loading) {
    background-color: var(--button-color-container-fill-tertiary-disabled);
    color: var(--button-color-text-fill-tertiary-disabled);
    border: var(--button-border-style-tertiary-disabled);
  }

  &.size-sm {
    padding-top: var(--button-spacing-ver-padding-top-tertiary-sm);
    padding-bottom: var(--button-spacing-ver-padding-bottom-tertiary-sm);
    padding-left: var(--button-spacing-hor-padding-left-tertiary-sm);
    padding-right: var(--button-spacing-hor-padding-right-tertiary-sm);
    font-weight: var(--button-fonts-label-tertiary-sm-font-weight);
    font-size: var(--button-fonts-label-tertiary-sm-font-size);
    line-height: var(--button-fonts-label-tertiary-sm-line-height);
    font-family: var(--button-fonts-label-tertiary-sm-font-family);
    letter-spacing: var(--button-fonts-label-tertiary-sm-letter-spacing);
    margin: var(--button-fonts-label-tertiary-sm-margin-spacing) 0;
    text-indent: var(--button-fonts-label-tertiary-sm-text-indent);
    text-transform: var(--button-fonts-label-tertiary-sm-text-transform);
    text-decoration: var(--button-fonts-label-tertiary-sm-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-tertiary-sm);
    --kmk-loader-size: calc(var(--button-sizing-icon-tertiary-sm) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-tertiary-sm);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-tertiary-sm);
    }
  }

  &.size-md {
    padding-top: var(--button-spacing-ver-padding-top-tertiary-md);
    padding-bottom: var(--button-spacing-ver-padding-bottom-tertiary-md);
    padding-left: var(--button-spacing-hor-padding-left-tertiary-md);
    padding-right: var(--button-spacing-hor-padding-right-tertiary-md);
    font-weight: var(--button-fonts-label-tertiary-md-font-weight);
    font-size: var(--button-fonts-label-tertiary-md-font-size);
    line-height: var(--button-fonts-label-tertiary-md-line-height);
    font-family: var(--button-fonts-label-tertiary-md-font-family);
    letter-spacing: var(--button-fonts-label-tertiary-md-letter-spacing);
    margin: var(--button-fonts-label-tertiary-md-margin-spacing) 0;
    text-indent: var(--button-fonts-label-tertiary-md-text-indent);
    text-transform: var(--button-fonts-label-tertiary-md-text-transform);
    text-decoration: var(--button-fonts-label-tertiary-md-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-tertiary-md);
    --kmk-loader-size: calc(var(--button-sizing-icon-tertiary-md) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-tertiary-md);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-tertiary-md);
    }
  }

  &.size-lg {
    padding-top: var(--button-spacing-ver-padding-top-tertiary-lg);
    padding-bottom: var(--button-spacing-ver-padding-bottom-tertiary-lg);
    padding-left: var(--button-spacing-hor-padding-left-tertiary-lg);
    padding-right: var(--button-spacing-hor-padding-right-tertiary-lg);
    font-weight: var(--button-fonts-label-tertiary-lg-font-weight);
    font-size: var(--button-fonts-label-tertiary-lg-font-size);
    line-height: var(--button-fonts-label-tertiary-lg-line-height);
    font-family: var(--button-fonts-label-tertiary-lg-font-family);
    letter-spacing: var(--button-fonts-label-tertiary-lg-letter-spacing);
    margin: var(--button-fonts-label-tertiary-lg-margin-spacing) 0;
    text-indent: var(--button-fonts-label-tertiary-lg-text-indent);
    text-transform: var(--button-fonts-label-tertiary-lg-text-transform);
    text-decoration: var(--button-fonts-label-tertiary-lg-text-decoration);
    --svg-icon-size: var(--button-sizing-icon-tertiary-lg);
    --kmk-loader-size: calc(var(--button-sizing-icon-tertiary-lg) - 8px);
    &.icon-position-right span {
      padding-right: var(--button-spacing-hor-item-tertiary-lg);
    }
    &.icon-position-left span {
      padding-left: var(--button-spacing-hor-item-tertiary-lg);
    }
  }
}

`;
export {
  o as default
};

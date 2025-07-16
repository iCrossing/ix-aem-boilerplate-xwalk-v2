import { css as r } from "lit";
const i = r`
.kmk-link {
  outline: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  span {
    /* fix to avoid misalignment in link groups */
    border-bottom: 1px solid transparent;
  }
  &.variant-primary {
    color: var(--link-color-text-fill-primary-default);
    background-color: var(--link-color-container-fill-primary-default);
    --svg-icon-color: var(--link-color-icon-fill-primary-default);
    border-radius: var(--link-border-radius-primary-default);
    border: var(--link-border-style-container-primary-default);
    &.underline:not(.disabled) {
      span {
        border-bottom: var(--link-border-style-underline-primary-default);
      }
    }
    &:hover:not(.disabled) {
      color: var(--link-color-text-fill-primary-hover);
      background-color: var(--link-color-container-fill-primary-hover);
      --svg-icon-color: var(--link-color-icon-fill-primary-hover);
      border-radius: var(--link-border-radius-primary-hover);
      border: var(--link-border-style-container-primary-hover);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-primary-hover);
        }
      }
    }
    &:active:not(.disabled) {
      color: var(--link-color-text-fill-primary-pressed);
      background-color: var(--link-color-container-fill-primary-pressed);
      --svg-icon-color: var(--link-color-icon-fill-primary-pressed);
      border-radius: var(--link-border-radius-primary-pressed);
      border: var(--link-border-style-container-primary-pressed);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-primary-pressed);
        }
      }
    }
    &:focus-visible:not(.disabled) {
      color: var(--link-color-text-fill-primary-focus);
      background-color: var(--link-color-container-fill-primary-focus);
      --svg-icon-color: var(--link-color-icon-fill-primary-focus);
      border-radius: var(--link-border-radius-primary-focus);
      border: var(--link-border-style-container-primary-focus);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-primary-focus);
        }
      }
    }
    &.disabled {
      color: var(--link-color-text-fill-primary-disabled);
      background-color: var(--link-color-container-fill-primary-disabled);
      --svg-icon-color: var(--link-color-icon-fill-primary-disabled);
      border-radius: var(--link-border-radius-primary-disabled);
      border: var(--link-border-style-container-primary-disabled);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-primary-disabled);
        }
      }
    }
  }
  &.variant-secondary:not(.disabled) {
    color: var(--link-color-text-fill-secondary-default);
    background-color: var(--link-color-container-fill-secondary-default);
    --svg-icon-color: var(--link-color-icon-fill-secondary-default);
    border-radius: var(--link-border-radius-secondary-default);
    border: var(--link-border-style-container-secondary-default);
    &.underline:not(.disabled) {
      span {
        border-bottom: var(--link-border-style-underline-secondary-default);
      }
    }
    &:hover {
      color: var(--link-color-text-fill-secondary-hover);
      background-color: var(--link-color-container-fill-secondary-hover);
      --svg-icon-color: var(--link-color-icon-fill-secondary-hover);
      border-radius: var(--link-border-radius-secondary-hover);
      border: var(--link-border-style-container-secondary-hover);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-secondary-hover);
        }
      }
    }
    &:active {
      color: var(--link-color-text-fill-secondary-pressed);
      background-color: var(--link-color-container-fill-secondary-pressed);
      --svg-icon-color: var(--link-color-icon-fill-secondary-pressed);
      border-radius: var(--link-border-radius-secondary-pressed);
      border: var(--link-border-style-container-secondary-pressed);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-secondary-pressed);
        }
      }
    }
    &:focus-visible {
      color: var(--link-color-text-fill-secondary-focus);
      background-color: var(--link-color-container-fill-secondary-focus);
      --svg-icon-color: var(--link-color-icon-fill-secondary-focus);
      border-radius: var(--link-border-radius-secondary-focus);
      border: var(--link-border-style-container-secondary-focus);
      + &.underline {
        span {
          border-bottom: var(--link-border-style-underline-secondary-focus);
        }
      }
    }

  }
  &.size-xs {
    font-weight: var(--link-fonts-xs-font-weight);
    font-size: var(--link-fonts-xs-font-size);
    line-height: var(--link-fonts-xs-line-height);
    font-family: var(--link-fonts-xs-font-family);
    letter-spacing: var(--link-fonts-xs-letter-spacing);
    margin: var(--link-fonts-xs-margin-spacing) 0;
    text-indent: var(--link-fonts-xs-text-indent);
    text-transform: var(--link-fonts-xs-text-transform);
    text-decoration: var(--link-fonts-xs-text-decoration);
    padding-top: var(--link-spacing-ver-padding-top-xs);
    padding-bottom: var(--link-spacing-ver-padding-bottom-xs);
    padding-left: var(--link-spacing-hor-padding-left-xs);
    padding-right: var(--link-spacing-hor-padding-right-xs);
    &.icon-position-left span {
      margin-left: var(--link-spacing-hor-item-xs);
    };
    &.icon-position-right span {
      margin-right: var(--link-spacing-hor-item-xs);
    };
    --svg-icon-size: var(--link-sizing-icon-xs);
  }
  &.size-sm {
    font-weight: var(--link-fonts-sm-font-weight);
    font-size: var(--link-fonts-sm-font-size);
    line-height: var(--link-fonts-sm-line-height);
    font-family: var(--link-fonts-sm-font-family);
    letter-spacing: var(--link-fonts-sm-letter-spacing);
    margin: var(--link-fonts-sm-margin-spacing) 0;
    text-indent: var(--link-fonts-sm-text-indent);
    text-transform: var(--link-fonts-sm-text-transform);
    text-decoration: var(--link-fonts-sm-text-decoration);
    padding-top: var(--link-spacing-ver-padding-top-sm);
    padding-bottom: var(--link-spacing-ver-padding-bottom-sm);
    padding-left: var(--link-spacing-hor-padding-left-sm);
    padding-right: var(--link-spacing-hor-padding-right-sm);
    &.icon-position-left span {
      margin-left: var(--link-spacing-hor-item-sm);
    };
    &.icon-position-right span {
      margin-right: var(--link-spacing-hor-item-sm);
    };
    --svg-icon-size: var(--link-sizing-icon-sm);
  }
  &.size-md {
    font-weight: var(--link-fonts-md-font-weight);
    font-size: var(--link-fonts-md-font-size);
    line-height: var(--link-fonts-md-line-height);
    font-family: var(--link-fonts-md-font-family);
    letter-spacing: var(--link-fonts-md-letter-spacing);
    margin: var(--link-fonts-md-margin-spacing) 0;
    text-indent: var(--link-fonts-md-text-indent);
    text-transform: var(--link-fonts-md-text-transform);
    text-decoration: var(--link-fonts-md-text-decoration);
    padding-top: var(--link-spacing-ver-padding-top-md);
    padding-bottom: var(--link-spacing-ver-padding-bottom-md);
    padding-left: var(--link-spacing-hor-padding-left-md);
    padding-right: var(--link-spacing-hor-padding-right-md);
    &.icon-position-left span {
      margin-left: var(--link-spacing-hor-item-md);
    };
    &.icon-position-right span {
      margin-right: var(--link-spacing-hor-item-md);
    };
    --svg-icon-size: var(--link-sizing-icon-md);
  }
  &.size-lg {
    font-weight: var(--link-fonts-lg-font-weight);
    font-size: var(--link-fonts-lg-font-size);
    line-height: var(--link-fonts-lg-line-height);
    font-family: var(--link-fonts-lg-font-family);
    letter-spacing: var(--link-fonts-lg-letter-spacing);
    margin: var(--link-fonts-lg-margin-spacing) 0;
    text-indent: var(--link-fonts-lg-text-indent);
    text-transform: var(--link-fonts-lg-text-transform);
    text-decoration: var(--link-fonts-lg-text-decoration);
    padding-top: var(--link-spacing-ver-padding-top-lg);
    padding-bottom: var(--link-spacing-ver-padding-bottom-lg);
    padding-left: var(--link-spacing-hor-padding-left-lg);
    padding-right: var(--link-spacing-hor-padding-right-lg);
    &.icon-position-left span {
      margin-left: var(--link-spacing-hor-item-lg);
    };
    &.icon-position-right span {
      margin-right: var(--link-spacing-hor-item-lg);
    };
    --svg-icon-size: var(--link-sizing-icon-lg);
  }
  &.size-xl {
    font-weight: var(--link-fonts-xl-font-weight);
    font-size: var(--link-fonts-xl-font-size);
    line-height: var(--link-fonts-xl-line-height);
    font-family: var(--link-fonts-xl-font-family);
    letter-spacing: var(--link-fonts-xl-letter-spacing);
    margin: var(--link-fonts-xl-margin-spacing) 0;
    text-indent: var(--link-fonts-xl-text-indent);
    text-transform: var(--link-fonts-xl-text-transform);
    text-decoration: var(--link-fonts-xl-text-decoration);
    padding-top: var(--link-spacing-ver-padding-top-xl);
    padding-bottom: var(--link-spacing-ver-padding-bottom-xl);
    padding-left: var(--link-spacing-hor-padding-left-xl);
    padding-right: var(--link-spacing-hor-padding-right-xl);
    &.icon-position-left span {
      margin-left: var(--link-spacing-hor-item-xl);
    };
    &.icon-position-right span {
      margin-right: var(--link-spacing-hor-item-xl);
    };
    --svg-icon-size: var(--link-sizing-icon-xl);
  }
}

`;
export {
  i as default
};

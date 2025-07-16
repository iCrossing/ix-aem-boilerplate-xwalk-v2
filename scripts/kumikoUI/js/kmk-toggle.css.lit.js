import { css as o } from "lit";
const t = o`
.kmk-toggle {
  display: inline-flex;
  align-items: center;

  .container {
    cursor: pointer;
    position: relative;
    display: flex;
  }

  .label {
    cursor: pointer;
    color: var(--toggle-label-color-text-fill-label-default);
  }

  .slide {
    position: relative;
    display: inline-flex;
  }

  .slide-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 40px;
  }
  
  .slide input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .knob-state,
  .knob-container { 
    position: absolute;
    left: -25%;
    bottom: -50%;
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .knob {
    position: relative;
    display: block;
    border-radius: 50%;
  }
  
  &.on:not(.disabled) {
    .knob-state {
      box-shadow: var(--toggle-elevation-state-container-on-default);
    }
    .knob {
      box-shadow: var(--toggle-elevation-knob-on-default);
    }
    .slide-mask {
      box-shadow: var(--toggle-elevation-slide-on-default);
      border: var(--toggle-border-style-slide-on-default);
    }
    &:has(input:hover) {
      .knob-state {
        box-shadow: var(--toggle-elevation-state-container-on-hover);
      }
      .knob {
        box-shadow: var(--toggle-elevation-knob-on-hover);
      }
      .slide-mask {
        box-shadow: var(--toggle-elevation-slide-on-hover);
        border: var(--toggle-border-style-slide-on-hover);
      }
    }
    &:has(input:focus-visible) {
      .knob-state {
        box-shadow: var(--toggle-elevation-state-container-on-focus);
      }
      .knob {
        box-shadow: var(--toggle-elevation-knob-on-focus);
      }
      .slide-mask {
        box-shadow: var(--toggle-elevation-slide-on-focus);
        border: var(--toggle-border-style-slide-on-focus);
      }
    }
  }

  &.off:not(.disabled) {
    .knob-state {
      box-shadow: var(--toggle-elevation-state-container-off-default);
      background-color: var(--toggle-color-container-fill-state-container-off-default);
    }
    .knob {
      box-shadow: var(--toggle-elevation-knob-off-default);
      background-color: var(--toggle-color-container-fill-knob-off-default);
    }
    .slide-mask {
      box-shadow: var(--toggle-elevation-slide-off-default);
      background-color: var(--toggle-color-container-fill-slide-off-default);
      border: var(--toggle-border-style-slide-off-default);
    }
    &:has(input:hover) {
      .knob-state {
        box-shadow: var(--toggle-elevation-state-container-off-hover);
        background-color: var(--toggle-color-container-fill-state-container-off-hover);
      }
      .knob {
        box-shadow: var(--toggle-elevation-knob-off-hover);
        background-color: var(--toggle-color-container-fill-knob-off-hover);
      }
      .slide-mask {
        box-shadow: var(--toggle-elevation-slide-off-hover);
        background-color: var(--toggle-color-container-fill-slide-off-hover);
        border: var(--toggle-border-style-slide-off-hover);
      }
    }
    &:has(input:focus-visible) {
      .knob-state {
        box-shadow: var(--toggle-elevation-state-container-off-focus);
        background-color: var(--toggle-color-container-fill-state-container-off-focus);
      }
      .knob {
        box-shadow: var(--toggle-elevation-knob-off-focus);
        background-color: var(--toggle-color-container-fill-knob-off-focus);
      }
      .slide-mask {
        box-shadow: var(--toggle-elevation-slide-off-focus);
        background-color: var(--toggle-color-container-fill-slide-off-focus);
        border: var(--toggle-border-style-slide-off-focus);
      }
    }
  }

  &.disabled {
    .label {
      color: var(--toggle-label-color-text-fill-label-disabled);
    }
    .knob-state {
      box-shadow: var(--toggle-elevation-state-container-disabled);
      background-color: var(--toggle-color-container-fill-state-container-disabled);
    }
    .knob {
      box-shadow: var(--toggle-elevation-knob-disabled);
      background-color: var(--toggle-color-container-fill-knob-disabled);
    }
    .slide-mask {
      box-shadow: var(--toggle-elevation-slide-disabled);
      background-color: var(--toggle-color-container-fill-slide-disabled);
      border: var(--toggle-border-style-slide-disabled);
      
    }
  }

  &.size-sm {
    font-weight: var(--toggle-fonts-label-sm-font-weight);
    font-size: var(--toggle-fonts-label-sm-font-size);
    line-height: var(--toggle-fonts-label-sm-line-height);
    font-family: var(--toggle-fonts-label-sm-font-family);
    letter-spacing: var(--toggle-fonts-label-sm-letter-spacing);
    margin: var(--toggle-fonts-label-sm-margin-spacing) 0;
    text-indent: var(--toggle-fonts-label-sm-text-indent);
    text-transform: var(--toggle-fonts-label-sm-text-transform);
    text-decoration: var(--toggle-fonts-label-sm-text-decoration);

    .container {
      padding-top: var(--toggle-spacing-ver-padding-top-sm);
      padding-bottom: var(--toggle-spacing-ver-padding-bottom-sm);
      padding-left: var(--toggle-spacing-hor-padding-left-sm);
      padding-right: var(--toggle-spacing-hor-padding-right-sm);
    }
    .slide {
      width: var(--toggle-sizing-slide-width-sm);
      height: var(--toggle-sizing-slide-height-sm);
    }
    .knob-state {
      width: var(--toggle-sizing-state-container-sm);
      height: var(--toggle-sizing-state-container-sm);
    }
    .knob-container {
      width: var(--toggle-sizing-state-container-sm);
      height: var(--toggle-sizing-state-container-sm);
    }
    .knob {
      width: var(--toggle-sizing-knob-sm);
      height: var(--toggle-sizing-knob-sm);
    }
    &.on {
      .knob-state,
      .knob-container {
        transform: translateX(calc(var(--toggle-sizing-slide-width-sm) - 50%));
      }
    }
  }

  &.size-md {
    font-weight: var(--toggle-fonts-label-md-font-weight);
    font-size: var(--toggle-fonts-label-md-font-size);
    line-height: var(--toggle-fonts-label-md-line-height);
    font-family: var(--toggle-fonts-label-md-font-family);
    letter-spacing: var(--toggle-fonts-label-md-letter-spacing);
    margin: var(--toggle-fonts-label-md-margin-spacing) 0;
    text-indent: var(--toggle-fonts-label-md-text-indent);
    text-transform: var(--toggle-fonts-label-md-text-transform);
    text-decoration: var(--toggle-fonts-label-md-text-decoration);

    .container {
      padding-top: var(--toggle-spacing-ver-padding-top-md);
      padding-bottom: var(--toggle-spacing-ver-padding-bottom-md);
      padding-left: var(--toggle-spacing-hor-padding-left-md);
      padding-right: var(--toggle-spacing-hor-padding-right-md);
    }
    .slide {
      width: var(--toggle-sizing-slide-width-md);
      height: var(--toggle-sizing-slide-height-md);
    }
    .knob-state {
      width: var(--toggle-sizing-state-container-md);
      height: var(--toggle-sizing-state-container-md);
    }
    .knob-container {
      width: var(--toggle-sizing-state-container-md);
      height: var(--toggle-sizing-state-container-md);
    }
    .knob {
      width: var(--toggle-sizing-knob-md);
      height: var(--toggle-sizing-knob-md);
    }
    &.on {
      .knob-state,
      .knob-container {
        transform: translateX(calc(var(--toggle-sizing-slide-width-md) - 50%));
      }
    }
  }

  &.size-lg {
    font-weight: var(--toggle-fonts-label-lg-font-weight);
    font-size: var(--toggle-fonts-label-lg-font-size);
    line-height: var(--toggle-fonts-label-lg-line-height);
    font-family: var(--toggle-fonts-label-lg-font-family);
    letter-spacing: var(--toggle-fonts-label-lg-letter-spacing);
    margin: var(--toggle-fonts-label-lg-margin-spacing) 0;
    text-indent: var(--toggle-fonts-label-lg-text-indent);
    text-transform: var(--toggle-fonts-label-lg-text-transform);
    text-decoration: var(--toggle-fonts-label-lg-text-decoration);

    .container {
      padding-top: var(--toggle-spacing-ver-padding-top-lg);
      padding-bottom: var(--toggle-spacing-ver-padding-bottom-lg);
      padding-left: var(--toggle-spacing-hor-padding-left-lg);
      padding-right: var(--toggle-spacing-hor-padding-right-lg);
    }
    .slide {
      width: var(--toggle-sizing-slide-width-lg);
      height: var(--toggle-sizing-slide-height-lg);
    }
    .knob-state {
      width: var(--toggle-sizing-state-container-lg);
      height: var(--toggle-sizing-state-container-lg);
    }
    .knob-container {
      width: var(--toggle-sizing-state-container-lg);
      height: var(--toggle-sizing-state-container-lg);
    }
    .knob {
      width: var(--toggle-sizing-knob-lg);
      height: var(--toggle-sizing-knob-lg);
    }
    &.on {
      .knob-state,
      .knob-container {
        transform: translateX(calc(var(--toggle-sizing-slide-width-lg) - 50%));
      }
    }
  }

  &.variant-primary {
    &.on:not(.disabled) {
      .knob-state {
        background-color: var(--toggle-color-container-fill-state-container-on-primary-default);
      }
      .knob {
        background-color: var(--toggle-color-container-fill-knob-on-primary-default);
      }
      .slide-mask {
        background-color: var(--toggle-color-container-fill-slide-on-primary-default);
      }
      &:has(input:hover) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-primary-hover);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-primary-hover);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-primary-hover);
        }
      }
      &:has(input:focus-visible) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-primary-focus);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-primary-focus);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-primary-focus);
        }
      }
    }
  }
  &.variant-accent1 {
    &.on:not(.disabled) {
      .knob-state {
        background-color: var(--toggle-color-container-fill-state-container-on-accent1-default);
      }
      .knob {
        background-color: var(--toggle-color-container-fill-knob-on-accent1-default);
      }
      .slide-mask {
        background-color: var(--toggle-color-container-fill-slide-on-accent1-default);
      }
      &:has(input:hover) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent1-hover);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent1-hover);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent1-hover);
        }
      }
      &:has(input:focus-visible) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent1-focus);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent1-focus);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent1-focus);
        }
      }
    }
  }
  &.variant-accent2 {
    &.on:not(.disabled) {
      .knob-state {
        background-color: var(--toggle-color-container-fill-state-container-on-accent2-default);
      }
      .knob {
        background-color: var(--toggle-color-container-fill-knob-on-accent2-default);
      }
      .slide-mask {
        background-color: var(--toggle-color-container-fill-slide-on-accent2-default);
      }
      &:has(input:hover) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent2-hover);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent2-hover);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent2-hover);
        }
      }
      &:has(input:focus-visible) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent2-focus);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent2-focus);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent2-focus);
        }
      }
    }
  }
  &.variant-accent3 {
    &.on:not(.disabled) {
      .knob-state {
        background-color: var(--toggle-color-container-fill-state-container-on-accent3-default);
      }
      .knob {
        background-color: var(--toggle-color-container-fill-knob-on-accent3-default);
      }
      .slide-mask {
        background-color: var(--toggle-color-container-fill-slide-on-accent3-default);
      }
      &:has(input:hover) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent3-hover);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent3-hover);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent3-hover);
        }
      }
      &:has(input:focus-visible) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent3-focus);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent3-focus);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent3-focus);
        }
      }
    }
  }
  &.variant-accent4 {
    &.on:not(.disabled) {
      .knob-state {
        background-color: var(--toggle-color-container-fill-state-container-on-accent4-default);
      }
      .knob {
        background-color: var(--toggle-color-container-fill-knob-on-accent4-default);
      }
      .slide-mask {
        background-color: var(--toggle-color-container-fill-slide-on-accent4-default);
      }
      &:has(input:hover) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent4-hover);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent4-hover);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent4-hover);
        }
      }
      &:has(input:focus-visible) {
        .knob-state {
          background-color: var(--toggle-color-container-fill-state-container-on-accent4-focus);
        }
        .knob {
          background-color: var(--toggle-color-container-fill-knob-on-accent4-focus);
        }
        .slide-mask {
          background-color: var(--toggle-color-container-fill-slide-on-accent4-focus);
        }
      }
    }
  }

}

`;
export {
  t as default
};

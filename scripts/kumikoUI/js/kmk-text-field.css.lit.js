import { css as t } from "lit";
const l = t`
:host {
  --text-field-icon-size: 0px;
  --text-field-close-icon-size: 24px;
  --text-field-max-width: 350px;
}
:host([icon]) {
  --text-field-icon-size: 24px;
}
.kmk-text-field {
  display: inline-block;
  .input-wrapper {
    position: relative;
    display: inline-flex;
    width: 100%;
    max-width: var(--text-field-max-width);
    box-sizing: border-box;
  }
  input {
    padding: 0;
    border: none;
    outline: none;
    width: 100%;
  }
  input[disabled] {
    background: none;
  }
  label {
    position: absolute;
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 0.2s ease-in-out, all 0.2s ease-in-out, padding 0.2s ease-in-out;
  }
  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  button:disabled {
    visibility: hidden;
  }

  .helper-text {
    max-width: var(--text-field-max-width);
  }
  
  &.standard {
    .input-wrapper {
      border-bottom: var(--text-field-border-style-standard-default);
    }
    label {
      color: var(--text-field-color-text-fill-label-standard-no-placeholder-default);
      font-weight: var(--text-field-fonts-label-standard-no-placeholder-sm-font-weight);
      font-size: var(--text-field-fonts-label-standard-no-placeholder-sm-font-size);
      line-height: var(--text-field-fonts-label-standard-no-placeholder-sm-line-height);
      font-family: var(--text-field-fonts-label-standard-no-placeholder-sm-font-family);
      letter-spacing: var(--text-field-fonts-label-standard-no-placeholder-sm-letter-spacing);
      text-indent: var(--text-field-fonts-label-standard-no-placeholder-sm-text-indent);
      text-transform: var(--text-field-fonts-label-standard-no-placeholder-sm-text-transform);
    }
    input {
      font-weight: var(--text-field-fonts-entered-text-standard-sm-font-weight);
      font-size: var(--text-field-fonts-entered-text-standard-sm-font-size);
      line-height: var(--text-field-fonts-entered-text-standard-sm-line-height);
      font-family: var(--text-field-fonts-entered-text-standard-sm-font-family);
      letter-spacing: var(--text-field-fonts-entered-text-standard-sm-letter-spacing);
      text-indent: var(--text-field-fonts-entered-text-standard-sm-text-indent);
      text-transform: var(--text-field-fonts-entered-text-standard-sm-text-transform);
      text-decoration: var(--text-field-fonts-entered-text-standard-sm-text-decoration);
      color: var(--text-field-color-text-fill-entered-text-standard-default);
    }
    kmk-icon {
      --svg-icon-color: var(--text-field-color-icon-fill-left-standard-default);
    }
    .helper-text {
      color: var(--text-field-color-text-fill-helper-text-standard-default);
      font-weight: var(--text-field-fonts-helper-text-standard-sm-font-weight);
      font-size: var(--text-field-fonts-helper-text-standard-sm-font-size);
      line-height: var(--text-field-fonts-helper-text-standard-sm-line-height);
      font-family: var(--text-field-fonts-helper-text-standard-sm-font-family);
      letter-spacing: var(--text-field-fonts-helper-text-standard-sm-letter-spacing);
      text-indent: var(--text-field-fonts-helper-text-standard-sm-text-indent);
      text-transform: var(--text-field-fonts-helper-text-standard-sm-text-transform);
      text-decoration: var(--text-field-fonts-helper-text-standard-sm-text-decoration);
    }
    &.size-sm {
      .input-wrapper {
        padding-top: var(--text-field-spacing-ver-padding-top-standard-sm);
        padding-right: var(--text-field-spacing-hor-padding-right-standard-sm);
        padding-bottom: var(--text-field-spacing-ver-padding-bottom-standard-sm);
        padding-left: var(--text-field-spacing-hor-padding-left-standard-sm);
      }
      .helper-text {
        margin-top: var(--text-field-spacing-ver-item-standard-sm);
      }
      input {
        padding: var(--text-field-spacing-ver-item-standard-sm) var(--text-field-spacing-hor-item-standard-input-sm);
      }
      kmk-icon {
        --svg-icon-size: var(--text-field-icon-size);
      }
      button kmk-icon {
        --svg-icon-size: var(--text-field-close-icon-size);
      }
      --label-top-animated-position: -26px;
      --label-left-position: calc(var(--text-field-spacing-hor-item-standard-input-sm) + var(--text-field-icon-size));
    }
    &.size-md {
      .input-wrapper {
        padding-top: var(--text-field-spacing-ver-padding-top-standard-md);
        padding-right: var(--text-field-spacing-hor-padding-right-standard-md);
        padding-bottom: var(--text-field-spacing-ver-padding-bottom-standard-md);
        padding-left: var(--text-field-spacing-hor-padding-left-standard-md);
      }
      .helper-text {
        margin-top: var(--text-field-spacing-ver-item-standard-md);
      }
      input {
        padding: var(--text-field-spacing-ver-item-standard-md) var(--text-field-spacing-hor-item-standard-input-md);
      }
      kmk-icon {
        --svg-icon-size: var(--text-field-icon-size);
      }
      button kmk-icon {
        --svg-icon-size: var(--text-field-close-icon-size);
      }
      --label-top-animated-position: -30px;
      --label-left-position: calc(var(--text-field-spacing-hor-item-standard-input-md) + var(--text-field-icon-size));
    }
    &.size-lg {
      .input-wrapper {
        padding-top: var(--text-field-spacing-ver-padding-top-standard-lg);
        padding-right: var(--text-field-spacing-hor-padding-right-standard-lg);
        padding-bottom: var(--text-field-spacing-ver-padding-bottom-standard-lg);
        padding-left: var(--text-field-spacing-hor-padding-left-standard-lg);
      }
      .helper-text {
        margin-top: var(--text-field-spacing-ver-item-standard-lg);
      }
      input {
        padding: var(--text-field-spacing-ver-item-standard-lg) var(--text-field-spacing-hor-item-standard-input-lg);
      }
      kmk-icon {
        --svg-icon-size: var(--text-field-icon-size);
      }
      button kmk-icon {
        --svg-icon-size: var(--text-field-close-icon-size);
      }
      --label-top-animated-position: -34px;
      --label-left-position: calc(var(--text-field-spacing-hor-item-standard-input-lg) + var(--text-field-icon-size));
    }
    &.error {
      .input-wrapper {
        border-bottom: var(--text-field-border-style-standard-error);
      }
      label {
        color: var(--text-field-color-text-fill-label-standard-no-placeholder-error);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-standard-error);
      }
      &.focused,
      &.entered-text {
        label {
          color: var(--text-field-color-text-fill-label-standard-with-entered-text-error);
        }
      }
    }
    &.disabled {
      .input-wrapper {
        border-bottom: var(--text-field-border-style-standard-disabled);
      }
      kmk-icon {
        --svg-icon-color: var(--text-field-color-icon-fill-left-standard-disabled);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-standard-disabled);
      }
      button {
        cursor: unset;
      }
    }
    &:hover:not(.disabled):not(.error) {
      .input-wrapper {
        border-bottom: var(--text-field-border-style-standard-hover);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-standard-hover);
      }
    }
    &.focused:not(.disabled):not(.error) {
      .input-wrapper {
        border-bottom: var(--text-field-border-style-standard-focus);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-standard-focus);
      }
      label {
        color: var(--text-field-color-text-fill-label-standard-with-entered-text-focus);
      }
    }
    input[disabled] {
      color: var(--text-field-color-text-fill-entered-text-standard-disabled);
    }
    input[disabled] + label {
      color: var(--text-field-color-text-fill-label-standard-no-placeholder-disabled);
    }
    &.entered-text:not(.disabled):not(.error) {
      &.error {
        label {
          color: var(--text-field-color-text-fill-label-standard-with-entered-text-error);
        }
      }
      input[disabled] {
        + label {
          color: var(--text-field-color-text-fill-label-standard-with-entered-text-disabled);
        }
      }
      input:hover + label {
        color: var(--text-field-color-text-fill-label-standard-with-entered-text-hover);
      }
      input:focus + label {
        color: var(--text-field-color-text-fill-label-standard-with-entered-text-focus);
      }
    }
    &.placeholder {
      label {
        font-weight: var(--text-field-fonts-label-standard-with-entered-text-sm-font-weight);
        font-size: var(--text-field-fonts-label-standard-with-entered-text-sm-font-size);
        line-height: var(--text-field-fonts-label-standard-with-entered-text-sm-line-height);
        font-family: var(--text-field-fonts-label-standard-with-entered-text-sm-font-family);
        letter-spacing: var(--text-field-fonts-label-standard-with-entered-text-sm-letter-spacing);
        text-indent: var(--text-field-fonts-label-standard-with-entered-text-sm-text-indent);
        text-transform: var(--text-field-fonts-label-standard-with-entered-text-sm-text-transform);
        text-decoration: var(--text-field-fonts-label-standard-with-entered-text-sm-text-decoration);
      }
      input::placeholder {
        color: var(--text-field-color-text-fill-placeholder-text-standard-default);
      }
      input:disabled::placeholder {
        color: var(--text-field-color-text-fill-placeholder-text-standard-disabled);
      }
      &.error {
        label {
          color: var(--text-field-color-text-fill-label-standard-with-placeholder-error);
        }
      }
      input[disabled] + label {
        color: var(--text-field-color-text-fill-label-standard-with-placeholder-disabled);
      }
      input:hover + label {
        color: var(--text-field-color-text-fill-label-standard-with-placeholder-hover);
      }
      input:focus + label {
        color: var(--text-field-color-text-fill-label-standard-with-placeholder-focus);
      }
    }
    &:not(.placeholder) {
      input:focus + label,
      input:not(:placeholder-shown) + label {
        font-weight: var(--text-field-fonts-label-standard-with-entered-text-sm-font-weight);
        font-size: var(--text-field-fonts-label-standard-with-entered-text-sm-font-size);
        line-height: var(--text-field-fonts-label-standard-with-entered-text-sm-line-height);
        font-family: var(--text-field-fonts-label-standard-with-entered-text-sm-font-family);
        letter-spacing: var(--text-field-fonts-label-standard-with-entered-text-sm-letter-spacing);
        text-indent: var(--text-field-fonts-label-standard-with-entered-text-sm-text-indent);
        text-transform: var(--text-field-fonts-label-standard-with-entered-text-sm-text-transform);
        text-decoration: var(--text-field-fonts-label-standard-with-entered-text-sm-text-decoration);
      }
    }

    /*
    * Label position calculations
    * --label-top-position is defined in the size classes above
    */

    /* label in default position */
    &:not(.placeholder):not(.entered-text) {
      label {
        left: var(--label-left-position);
        top: 50%;
        transform: translateY(-50%);
      }
      /* label animated to the top */
      input:focus + label,
      input:not(:placeholder-shown) + label {
        transform: translateY(var(--label-top-animated-position)) translateX(calc(-1 * var(--label-left-position)));
      }
    }
    /* label static on top */
    &.entered-text,
	  &.placeholder {
      label {
        top: -1rem;
        left: 0;
      }
    }
  }
  
  &.outlined {
    .input-wrapper {
      border: var(--text-field-border-style-outlined-default);
      border-radius: var(--text-field-border-radius-outlined-top-left) 
        var(--text-field-border-radius-outlined-top-right) 
        var(--text-field-border-radius-outlined-bottom-right) 
        var(--text-field-border-radius-outlined-bottom-left);
      padding-left: var(--text-field-spacing-hor-padding-left-outlined-label-with-entered-text-sm);
      padding-right: var(--text-field-spacing-hor-padding-right-outlined-label-with-entered-text-sm);
    }
    label {
      color: var(--text-field-color-text-fill-label-outlined-no-placeholder-default);
      font-weight: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-weight);
      font-size: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-size);
      line-height: var(--text-field-fonts-label-outlined-with-entered-text-sm-line-height);
      font-family: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-family);
      letter-spacing: var(--text-field-fonts-label-outlined-with-entered-text-sm-letter-spacing);
      text-indent: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-indent);
      text-transform: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-transform);
      text-decoration: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-decoration);
    }
    input {
      font-weight: var(--text-field-fonts-entered-text-outlined-sm-font-weight);
      font-size: var(--text-field-fonts-entered-text-outlined-sm-font-size);
      line-height: var(--text-field-fonts-entered-text-outlined-sm-line-height);
      font-family: var(--text-field-fonts-entered-text-outlined-sm-font-family);
      letter-spacing: var(--text-field-fonts-entered-text-outlined-sm-letter-spacing);
      text-indent: var(--text-field-fonts-entered-text-outlined-sm-text-indent);
      text-transform: var(--text-field-fonts-entered-text-outlined-sm-text-transform);
      text-decoration: var(--text-field-fonts-entered-text-outlined-sm-text-decoration);
      color: var(--text-field-color-text-fill-entered-text-outlined-default);
    }
    kmk-icon {
      --svg-icon-color: var(--text-field-color-icon-fill-left-outlined-default);
    }
    .helper-text {
      color: var(--text-field-color-text-fill-helper-text-outline-default);
      font-weight: var(--text-field-fonts-helper-text-outlined-sm-font-weight);
      font-size: var(--text-field-fonts-helper-text-outlined-sm-font-size);
      line-height: var(--text-field-fonts-helper-text-outlined-sm-line-height);
      font-family: var(--text-field-fonts-helper-text-outlined-sm-font-family);
      letter-spacing: var(--text-field-fonts-helper-text-outlined-sm-letter-spacing);
      text-indent: var(--text-field-fonts-helper-text-outlined-sm-text-indent);
      text-transform: var(--text-field-fonts-helper-text-outlined-sm-text-transform);
      text-decoration: var(--text-field-fonts-helper-text-outlined-sm-text-decoration);
    }
    &.size-sm {
      .input-wrapper {
        padding-top: var(--text-field-spacing-ver-padding-top-outlined-input-sm);
        padding-right: var(--text-field-spacing-hor-padding-right-outlined-input-sm);
        padding-bottom: var(--text-field-spacing-ver-padding-bottom-outlined-input-sm);
        padding-left: var(--text-field-spacing-hor-padding-left-outlined-input-sm);
      }
      .helper-text {
        margin-top: var(--text-field-spacing-ver-item-outlined-sm);
      }
      input {
        margin: 0 var(--text-field-spacing-hor-item-outlined-input-sm);
      }
      kmk-icon {
        --svg-icon-size: var(--text-field-icon-size);
      }
      button kmk-icon {
        --svg-icon-size: var(--text-field-close-icon-size);
      }
      --label-default-position: calc(var(--text-field-spacing-ver-padding-bottom-outlined-input-sm) + var(--text-field-spacing-hor-item-outlined-input-sm) + var(--text-field-icon-size));
      --label-top-animated-position: -28px;
      --label-left-position: calc(-1 * (4px + var(--text-field-icon-size)));
      --label-top-position: -8px;
    }
    &.size-md {
      .input-wrapper {
        padding-top: var(--text-field-spacing-ver-padding-top-outlined-input-md);
        padding-right: var(--text-field-spacing-hor-padding-right-outlined-input-md);
        padding-bottom: var(--text-field-spacing-ver-padding-bottom-outlined-input-md);
        padding-left: var(--text-field-spacing-hor-padding-left-outlined-input-md);;
      }
      .helper-text {
        margin-top: var(--text-field-spacing-ver-item-outlined-md);
      }
      input {
        margin: 0 var(--text-field-spacing-hor-item-outlined-input-md);
      }
      kmk-icon {
        --svg-icon-size: var(--text-field-icon-size);
      }
      button kmk-icon {
        --svg-icon-size: var(--text-field-close-icon-size);
      }
      --label-default-position: calc(var(--text-field-spacing-ver-padding-bottom-outlined-input-md) + var(--text-field-spacing-hor-item-outlined-input-md) + var(--text-field-icon-size));
      --label-top-animated-position: -32px;
      --label-left-position: calc(-1 * (8px + var(--text-field-icon-size)));
      --label-top-position: -8px;
    }
    &.size-lg {
      .input-wrapper {
        padding-top: var(--text-field-spacing-ver-padding-top-outlined-input-lg);
        padding-right: var(--text-field-spacing-hor-padding-right-outlined-input-lg);
        padding-bottom: var(--text-field-spacing-ver-padding-bottom-outlined-input-lg);
        padding-left: var(--text-field-spacing-hor-padding-left-outlined-input-lg);
      }
      .helper-text {
        margin-top: var(--text-field-spacing-ver-item-outlined-lg);
      }
      input {
        margin: 0 var(--text-field-spacing-hor-item-outlined-input-lg);
      }
      kmk-icon {
        --svg-icon-size: var(--text-field-icon-size);
      }
      button kmk-icon {
        --svg-icon-size: var(--text-field-close-icon-size);
      }
      --label-default-position: calc(var(--text-field-spacing-ver-padding-bottom-outlined-input-lg) + var(--text-field-spacing-hor-item-outlined-input-lg) + var(--text-field-icon-size));
      --label-top-animated-position: -36px;
      --label-left-position: calc(-1 * (12px + var(--text-field-icon-size)));
      --label-top-position: -8px;
    }
    &.error {
      .input-wrapper {
        border: var(--text-field-border-style-outlined-error);
      }
      label {
        color: var(--text-field-color-text-fill-label-outlined-no-placeholder-error);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-outline-error);
      }
      &.focused,
      &.entered-text {
        label {
          color: var(--text-field-color-text-fill-label-outlined-with-entered-text-error);
        }
      }
    }
    &.disabled {
      .input-wrapper {
        border: var(--text-field-border-style-outlined-disabled);
      }
      kmk-icon {
        --svg-icon-color: var(--text-field-color-icon-fill-left-outlined-disabled);
      }
      button {
        cursor: unset;
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-outline-disabled);
      }
    }
    &:hover:not(.disabled):not(.error) {
      .input-wrapper {
        border: var(--text-field-border-style-outlined-hover);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-outline-hover);
      }
    }
    &.focused:not(.disabled):not(.error) {
      .input-wrapper {
        border: var(--text-field-border-style-outlined-focus);
      }
      .helper-text {
        color: var(--text-field-color-text-fill-helper-text-outline-focus);
      }
      label {
        color: var(--text-field-color-text-fill-label-outlined-with-placeholder-focus);
      }
    }
    input[disabled] {
      color: var(--text-field-color-text-fill-entered-text-outlined-disabled);
    }
    input[disabled] + label {
      color: var(--text-field-color-text-fill-label-outlined-no-placeholder-disabled);
    }
    &.entered-text:not(.disabled):not(.error) {
      label {
        color: var(--text-field-color-text-fill-label-outlined-with-entered-text-default);
      }
      &.error {
        label {
          color: var(--text-field-color-text-fill-label-outlined-with-entered-text-error);
        }
      }
      input[disabled] + label {
        color: var(--text-field-color-text-fill-label-outlined-with-entered-text-disabled);
      }
      input:hover + label {
        color: var(--text-field-color-text-fill-label-outlined-with-entered-text-hover);
      }
      input:focus + label {
        color: var(--text-field-color-text-fill-label-outlined-with-entered-text-focus);
      }
    }
    &.placeholder {
      label {
        background-color: #fff;
        padding: 0 5px;
        font-weight: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-weight);
        font-size: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-size);
        line-height: var(--text-field-fonts-label-outlined-with-entered-text-sm-line-height);
        font-family: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-family);
        letter-spacing: var(--text-field-fonts-label-outlined-with-entered-text-sm-letter-spacing);
        text-indent: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-indent);
        text-transform: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-transform);
        text-decoration: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-decoration);
      }
      input::placeholder {
        color: var(--text-field-color-text-fill-placeholder-text-outlined-default);
      }
      input:disabled::placeholder {
        color: var(--text-field-color-text-fill-placeholder-text-outlined-disabled);
      }
      &.error {
        label {
          color: var(--text-field-color-text-fill-label-outlined-with-placeholder-error);
        }
      }
      input[disabled] + label {
        color: var(--text-field-color-text-fill-label-outlined-with-placeholder-disabled);
      }
      input:hover + label {
        color: var(--text-field-color-text-fill-label-outlined-with-placeholder-hover);
      }
      input:focus + label {
        color: var(--text-field-color-text-fill-label-outlined-with-placeholder-focus);
      }
    }
    &:not(.placeholder) {
      label {
        font-weight: var(--text-field-fonts-label-outlined-no-placeholder-sm-font-weight);
        font-size: var(--text-field-fonts-label-outlined-no-placeholder-sm-font-size);
        line-height: var(--text-field-fonts-label-outlined-no-placeholder-sm-line-height);
        font-family: var(--text-field-fonts-label-outlined-no-placeholder-sm-font-family);
        letter-spacing: var(--text-field-fonts-label-outlined-no-placeholder-sm-letter-spacing);
        text-indent: var(--text-field-fonts-label-outlined-no-placeholder-sm-text-indent);
        text-transform: var(--text-field-fonts-label-outlined-no-placeholder-sm-text-transform);
        text-decoration: var(--text-field-fonts-label-outlined-no-placeholder-sm-text-decoration);
      }
      input:focus + label,
      input:not(:placeholder-shown) + label {
        background-color: #fff;
        padding: 0 5px;
        font-weight: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-weight);
        font-size: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-size);
        line-height: var(--text-field-fonts-label-outlined-with-entered-text-sm-line-height);
        font-family: var(--text-field-fonts-label-outlined-with-entered-text-sm-font-family);
        letter-spacing: var(--text-field-fonts-label-outlined-with-entered-text-sm-letter-spacing);
        text-indent: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-indent);
        text-transform: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-transform);
        text-decoration: var(--text-field-fonts-label-outlined-with-entered-text-sm-text-decoration);
      }
    }
    /*
    * Label position calculations
    * --label-top-position is defined in the size classes above
    */

    /* label in default position */
    &:not(.placeholder):not(.entered-text) {
      label {
        left: var(--label-default-position);
        top: 50%;
        transform: translateY(-50%);
      }
      /* label animated to the top */
      input:focus + label,
      input:not(:placeholder-shown) + label {
        transform: translateY(var(--label-top-animated-position)) translateX(var(--label-left-position));
      }
    }
    /* label static on top */
    &.entered-text,
	  &.placeholder {
      label {
        left: 8px;
        top: var(--label-top-position);
      }
    }
  }
}

`;
export {
  l as default
};

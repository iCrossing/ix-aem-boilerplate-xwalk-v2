import { css as t } from "lit";
const a = t`
:host([aria-hidden="true"]),
[aria-hidden="true"] {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}

.kmk-details {
  display: flex;
  flex-direction: column;

  button {
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;

    background-color: var(--details-button-color-container-fill-default);
    color: var(--details-button-color-text-fill-default);
    --svg-icon-color: var(--details-button-color-icon-fill-default);
    border-radius: var(--details-button-border-radius-default);
    border: var(--details-button-border-style-default);
    box-shadow: var(--details-button-elevation-default);

    &:hover {
      background-color: var(--details-button-color-container-fill-hover);
      color: var(--details-button-color-text-fill-hover);
      --svg-icon-color: var(--details-button-color-icon-fill-hover);
      border-radius: var(--details-button-border-radius-hover);
      border: var(--details-button-border-style-hover);
      box-shadow: var(--details-button-elevation-hover);
    }
    &:focus-visible {
      background-color: var(--details-button-color-container-fill-focus);
      color: var(--details-button-color-text-fill-focus);
      --svg-icon-color: var(--details-button-color-icon-fill-focus);
      border-radius: var(--details-button-border-radius-focus);
      border: var(--details-button-border-style-focus);
      box-shadow: var(--details-button-elevation-focus);
    }
    &:active {
      background-color: var(--details-button-color-container-fill-pressed);
      color: var(--details-button-color-text-fill-pressed);
      --svg-icon-color: var(--details-button-color-icon-fill-pressed);
      border-radius: var(--details-button-border-radius-pressed);
      border: var(--details-button-border-style-pressed);
      box-shadow: var(--details-button-elevation-pressed);
    }
    &:disabled {
      background-color: var(--details-button-color-container-fill-disabled);
      color: var(--details-button-color-text-fill-disabled);
      --svg-icon-color: var(--details-button-color-icon-fill-disabled);
      border-radius: var(--details-button-border-radius-disabled);
      border: var(--details-button-border-style-disabled);
      box-shadow: var(--details-button-elevation-disabled);
    }
    &.loading {
      background-color: var(--details-button-color-container-fill-loading);
      color: var(--details-button-color-text-fill-default);
      --svg-icon-color: var(--details-button-color-icon-fill-loading);
      border-radius: var(--details-button-border-radius-loading);
      border: var(--details-button-border-style-loading);
      box-shadow: var(--details-button-elevation-loading);
    }
  }

  &.size-sm {
    gap: var(--details-spacing-ver-item-sm);
    --svg-icon-size: var(--details-button-sizing-icon-sm);

    button {
      gap: var(--details-button-spacing-hor-item-sm);
      padding-top: var(--details-button-spacing-ver-padding-top-sm);
      padding-bottom: var(--details-button-spacing-ver-padding-bottom-sm);
      padding-left: var(--details-button-spacing-hor-padding-left-sm);
      padding-right: var(--details-button-spacing-hor-padding-right-sm);
      font-weight: var(--details-button-fonts-label-sm-font-weight);
      font-size: var(--details-button-fonts-label-sm-font-size);
      line-height: var(--details-button-fonts-label-sm-line-height);
      font-family: var(--details-button-fonts-label-sm-font-family);
      letter-spacing: var(--details-button-fonts-label-sm-letter-spacing);
      margin: var(--details-button-fonts-label-sm-margin-spacing) 0;
      text-indent: var(--details-button-fonts-label-sm-text-indent);
      text-transform: var(--details-button-fonts-label-sm-text-transform);
      text-decoration: var(--details-button-fonts-label-sm-text-decoration);
    }
  }
  &.size-md {
    gap: var(--details-spacing-ver-item-md);
    --svg-icon-size: var(--details-button-sizing-icon-md);

    button {
      gap: var(--details-button-spacing-hor-item-md);
      padding-top: var(--details-button-spacing-ver-padding-top-md);
      padding-bottom: var(--details-button-spacing-ver-padding-bottom-md);
      padding-left: var(--details-button-spacing-hor-padding-left-md);
      padding-right: var(--details-button-spacing-hor-padding-right-md);
      font-weight: var(--details-button-fonts-label-md-font-weight);
      font-size: var(--details-button-fonts-label-md-font-size);
      line-height: var(--details-button-fonts-label-md-line-height);
      font-family: var(--details-button-fonts-label-md-font-family);
      letter-spacing: var(--details-button-fonts-label-md-letter-spacing);
      margin: var(--details-button-fonts-label-md-margin-spacing) 0;
      text-indent: var(--details-button-fonts-label-md-text-indent);
      text-transform: var(--details-button-fonts-label-md-text-transform);
      text-decoration: var(--details-button-fonts-label-md-text-decoration);
    }
  }
  &.size-lg {
    gap: var(--details-spacing-ver-item-lg);
    --svg-icon-size: var(--details-button-sizing-icon-lg);

    button {
      gap: var(--details-button-spacing-hor-item-lg);
      padding-top: var(--details-button-spacing-ver-padding-top-lg);
      padding-bottom: var(--details-button-spacing-ver-padding-bottom-lg);
      padding-left: var(--details-button-spacing-hor-padding-left-lg);
      padding-right: var(--details-button-spacing-hor-padding-right-lg);
      font-weight: var(--details-button-fonts-label-lg-font-weight);
      font-size: var(--details-button-fonts-label-lg-font-size);
      line-height: var(--details-button-fonts-label-lg-line-height);
      font-family: var(--details-button-fonts-label-lg-font-family);
      letter-spacing: var(--details-button-fonts-label-lg-letter-spacing);
      margin: var(--details-button-fonts-label-lg-margin-spacing) 0;
      text-indent: var(--details-button-fonts-label-lg-text-indent);
      text-transform: var(--details-button-fonts-label-lg-text-transform);
      text-decoration: var(--details-button-fonts-label-lg-text-decoration);
    }
  }
}

`;
export {
  a as default
};

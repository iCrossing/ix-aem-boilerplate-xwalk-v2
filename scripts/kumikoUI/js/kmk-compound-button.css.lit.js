import { css as o } from "lit";
const n = o`
button {
  outline: none;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
}
.kmk-compound-button {
  --kmk-text-color: var(--compound-button-color-text-fill-copy-not-selected-default);
  background-color: var(--compound-button-color-container-fill-not-selected-default);
  --svg-icon-color: var(--compound-button-color-icon-fill-not-selected-default);
  border: var(--compound-button-border-style-not-selected-default);
  box-shadow: var(--compound-button-elevation-not-selected-default);

  &:hover {
    --kmk-text-color: var(--compound-button-color-text-fill-copy-not-selected-hover);
    background-color: var(--compound-button-color-container-fill-not-selected-hover);
    --svg-icon-color: var(--compound-button-color-icon-fill-not-selected-hover);
    border: var(--compound-button-border-style-not-selected-hover);
    box-shadow: var(--compound-button-elevation-not-selected-hover);
  }
  &:focus-visible {
    --kmk-text-color: var(--compound-button-color-text-fill-copy-not-selected-focus);
    background-color: var(--compound-button-color-container-fill-not-selected-focus);
    --svg-icon-color: var(--compound-button-color-icon-fill-not-selected-focus);
    border: var(--compound-button-border-style-not-selected-focus);
    box-shadow: var(--compound-button-elevation-not-selected-focus);
  }
  &.selected {
    --kmk-text-color: var(--compound-button-color-text-fill-copy-selected-default);
    background-color: var(--compound-button-color-container-fill-selected-default);
    --svg-icon-color: var(--compound-button-color-icon-fill-selected-default);
    border: var(--compound-button-border-style-selected-default);
    box-shadow: var(--compound-button-elevation-selected-default);
    &:focus-visible {
      --kmk-text-color: var(--compound-button-color-text-fill-copy-selected-focus);
      background-color: var(--compound-button-color-container-fill-selected-focus);
      --svg-icon-color: var(--compound-button-color-icon-fill-selected-focus);
      border: var(--compound-button-border-style-selected-focus);
      box-shadow: var(--compound-button-elevation-selected-focus);
    }
  }
  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo,
  .heading,
  .icon,
  .copy {
    display: block;
  }
  &.size-sm {
    border-radius: var(--compound-button-border-radius-sm);
    padding-top: var(--compound-button-spacing-ver-padding-top-sm);
    padding-bottom: var(--compound-button-spacing-ver-padding-bottom-sm);
    padding-left: var(--compound-button-spacing-hor-padding-left-sm);
    padding-right: var(--compound-button-spacing-hor-padding-right-sm);

    .heading {
      margin-bottom: var(--compound-button-spacing-ver-item-with-text-sm);
    }

    .icon {
      margin-bottom: var(--compound-button-spacing-ver-item-with-icon-sm);
      --svg-icon-size: var(--compound-button-sizing-icon-sm);
    }

    &.logo-type-badge {
      .logo {
        margin-bottom: var(--compound-button-spacing-ver-item-with-logo-icon-sm);
        width: var(--compound-button-sizing-logo-icon-width-sm);
      }
    }

    &.logo-type-logo {
      .logo {
        margin-bottom: var(--compound-button-spacing-ver-item-with-logo-sm);
        /* height: var(--compound-button-sizing-logo-height-sm); */
        width: 330px;
      }
    }
  }

  &.size-lg {
    border-radius: var(--compound-button-border-radius-lg);
    padding-top: var(--compound-button-spacing-ver-padding-top-lg);
    padding-bottom: var(--compound-button-spacing-ver-padding-bottom-lg);
    padding-left: var(--compound-button-spacing-hor-padding-left-lg);
    padding-right: var(--compound-button-spacing-hor-padding-right-lg);

    .heading {
      margin-bottom: var(--compound-button-spacing-ver-item-with-text-lg);
    }

    .icon {
      margin-bottom: var(--compound-button-spacing-ver-item-with-icon-lg);
      --svg-icon-size: var(--compound-button-sizing-icon-lg);
    }

    &.logo-type-badge {
      .logo {
        margin-bottom: var(--compound-button-spacing-ver-item-with-logo-icon-lg);
        width: var(--compound-button-sizing-logo-icon-width-sm);
      }
    }

    &.logo-type-logo {
      .logo {
        margin-bottom: var(--compound-button-spacing-ver-item-with-logo-lg);
        /* height: var(--compound-button-sizing-logo-height-lg); */
        width: 330px;
      }
    }
  }
}

`;
export {
  n as default
};

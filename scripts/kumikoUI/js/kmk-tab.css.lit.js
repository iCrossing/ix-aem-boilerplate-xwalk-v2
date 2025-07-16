import { css as e } from "lit";
const r = e`
button {
  border: none;
  outline: none;
  &:not([disabled]) {
    cursor: pointer;
  }
}

.tab {
  font-weight: var(--tab-fonts-label-font-weight);
  font-size: var(--tab-fonts-label-font-size);
  line-height: var(--tab-fonts-label-line-height);
  font-family: var(--tab-fonts-label-font-family);
  letter-spacing: var(--tab-fonts-label-letter-spacing);
  margin: var(--tab-fonts-label-margin-spacing) 0;
  text-indent: var(--tab-fonts-label-text-indent);
  text-transform: var(--tab-fonts-label-text-transform);
  text-decoration: var(--tab-fonts-label-text-decoration);

  color: var(--tab-color-text-fill-not-selected-default);
  background-color: var(--tab-color-container-fill-not-selected-default);
  --svg-icon-color: var(--tab-color-icon-fill-not-selected-default);
  --svg-icon-size: var(--tab-sizing-icon);
  border-radius: var(--tab-border-radius-container-not-selected-default);
  &.position-top {
    border-bottom: var(--tab-border-style-container-not-selected-default);
  }
  &.position-left {
    border-right: var(--tab-border-style-container-not-selected-default);
  }
  &.position-right {
    border-left: var(--tab-border-style-container-not-selected-default);
  }

  .label {
    display: inline-flex;
    align-items: center;
    padding-left: var(--tab-spacing-label-hor-padding-left);
    padding-right: var(--tab-spacing-label-hor-padding-right);
    padding-top: var(--tab-spacing-label-ver-padding-top);
    padding-bottom: var(--tab-spacing-label-ver-padding-bottom);
    border-radius: var(--tab-border-radius-label-not-selected-default);
    border: var(--tab-border-style-label-not-selected-default)
  }
  .label-container {
    margin: 0 var(--tab-spacing-label-hor-item);
  }

  &:focus-visible {
    color: var(--tab-color-text-fill-not-selected-focus);
    background-color: var(--tab-color-container-fill-not-selected-focus);
    --svg-icon-color: var(--tab-color-icon-fill-not-selected-focus);
    border-radius: var(--tab-border-radius-container-not-selected-focus);
    &.position-top {
      border-bottom: var(--tab-border-style-container-not-selected-focus);
    }
    &.position-left {
      border-right: var(--tab-border-style-container-not-selected-focus);
    }
    &.position-right {
      border-left: var(--tab-border-style-container-not-selected-focus);
    }
    .label {
      border-radius: var(--tab-border-radius-label-not-selected-focus);
      border: var(--tab-border-style-label-not-selected-focus);
    }
  }

  &:hover {
    color: var(--tab-color-text-fill-not-selected-hover-with-stroke);
    background-color: var(--tab-color-container-fill-not-selected-hover);
    --svg-icon-color: var(--tab-color-icon-fill-not-selected-hover-with-stroke);
    border-radius: var(--tab-border-radius-container-not-selected-hover);
    &.position-top {
      border-bottom: var(--tab-border-style-container-not-selected-hover);
    }
    &.position-left {
      border-right: var(--tab-border-style-container-not-selected-hover);
    }
    &.position-right {
      border-left: var(--tab-border-style-container-not-selected-hover);
    }
    &.no-stroke {
      color: var(--tab-color-text-fill-not-selected-hover-no-stroke);
      --svg-icon-color: var(--tab-color-icon-fill-not-selected-hover-no-stroke);  
    }
    .label {
      border-radius: var(--tab-border-radius-label-not-selected-hover);
      border: var(--tab-border-style-label-not-selected-hover);
    }
  }

  &.disabled {
    color: var(--tab-color-text-fill-disabled);
    background-color: var(--tab-color-container-fill-disabled);
    --svg-icon-color: var(--tab-color-icon-fill-disabled);
    border-radius: var(--tab-border-radius-container-disabled);
    &.position-top {
      border-bottom: var(--tab-border-style-container-disabled);
    }
    &.position-left {
      border-right: var(--tab-border-style-container-disabled);
    }
    &.position-right {
      border-left: var(--tab-border-style-container-disabled);
    }
    .label {
      border-radius: var(--tab-border-radius-label-disabled);
      border: var(--tab-border-style-label-disabled);
    }
  }

  &.active {
    color: var(--tab-color-text-fill-selected-default);
    background-color: var(--tab-color-container-fill-selected-default);
    --svg-icon-color: var(--tab-color-icon-fill-selected-default);
    border-radius: var(--tab-border-radius-container-selected-default);
    &.position-top {
      border-bottom: var(--tab-border-style-container-selected-default);
    }
    &.position-left {
      border-right: var(--tab-border-style-container-selected-default);
    }
    &.position-right {
      border-left: var(--tab-border-style-container-selected-default);
    }
    .label {
      border-radius: var(--tab-border-radius-label-selected-default);
      border: var(--tab-border-style-label-selected-default);
    }
    &:focus-visible {
      color: var(--tab-color-text-fill-selected-focus);
      background-color: var(--tab-color-container-fill-selected-focus);
      --svg-icon-color: var(--tab-color-icon-fill-selected-focus);
      border-radius: var(--tab-border-radius-container-selected-focus);
      &.position-top {
        border-bottom: var(--tab-border-style-container-selected-focus);
      }
      &.position-left {
        border-right: var(--tab-border-style-container-selected-focus);
      }
      &.position-right {
        border-left: var(--tab-border-style-container-selected-focus);
      }
      .label {
        border-radius: var(--tab-border-radius-label-selected-focus);
        border: var(--tab-border-style-label-selected-focus);
      }
    }
  }

  &.size-sm {
    padding-left: var(--tab-spacing-container-hor-padding-left-sm);
    padding-right: var(--tab-spacing-container-hor-padding-right-sm);
    padding-top: var(--tab-spacing-container-ver-padding-top-sm);
    padding-bottom: var(--tab-spacing-container-ver-padding-bottom-sm);
  }

  &.size-md {
    padding-left: var(--tab-spacing-container-hor-padding-left-md);
    padding-right: var(--tab-spacing-container-hor-padding-right-md);
    padding-top: var(--tab-spacing-container-ver-padding-top-md);
    padding-bottom: var(--tab-spacing-container-ver-padding-bottom-md);
  }

  &.size-lg {
    padding-left: var(--tab-spacing-container-hor-padding-left-lg);
    padding-right: var(--tab-spacing-container-hor-padding-right-lg);
    padding-top: var(--tab-spacing-container-ver-padding-top-lg);
    padding-bottom: var(--tab-spacing-container-ver-padding-bottom-lg);
  }

  &.no-stroke {
    border: none;
    &.active,
    &.active:focus-visible,
    &:hover,
    &:focus-visible,
    &.disabled{
      border: none;
    }
  }
}
`;
export {
  r as default
};

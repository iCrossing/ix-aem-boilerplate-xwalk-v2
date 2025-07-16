import { css as o } from "lit";
const e = o`
.accordion-panel {
  display: flex;
  flex-direction: column;
  gap: var(--accordion-spacing-ver-item-expanded-container);
}

:host([aria-hidden="true"]),
[aria-hidden="true"] {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}

button {
  background: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  gap: var(--accordion-spacing-hor-item-collapsed);
  padding-top: var(--accordion-spacing-ver-padding-collapsed-top);
  padding-bottom: var(--accordion-spacing-ver-padding-collapsed-bottom);
  padding-left: var(--accordion-spacing-hor-padding-collapsed-left);
  padding-right: var(--accordion-spacing-hor-padding-collapsed-right);

  span {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: var(--accordion-spacing-ver-item-collapsed);
  }
  ::slotted([slot="heading"]) {
    color: var(--accordion-color-text-fill-collapsed-title-default);
  }
  ::slotted([slot="description"]) {
    color: var(--accordion-color-text-fill-collapsed-description-default);
  }
  --svg-icon-color: var(--accordion-color-icon-fill-collapsed-default);
  --svg-icon-size: var(--accordion-sizing-icon);
  background-color: var(--accordion-color-container-fill-collapsed-default);
  border-radius: var(--accordion-border-radius-collapsed-default);
  border: var(--accordion-border-style-collapsed-default);
  box-shadow: var(--accordion-elevation-collapsed-default);

  &:hover {
    ::slotted([slot="heading"]) {
      color: var(--accordion-color-text-fill-collapsed-title-hover);
    }
    ::slotted([slot="description"]) {
      color: var(--accordion-color-text-fill-collapsed-description-hover);
    }
    --svg-icon-color: var(--accordion-color-icon-fill-collapsed-hover);
    background-color: var(--accordion-color-container-fill-collapsed-hover);
    border-radius: var(--accordion-border-radius-collapsed-hover);
    border: var(--accordion-border-style-collapsed-hover);
    box-shadow: var(--accordion-elevation-collapsed-hover);
  }
  &:focus-visible {
    ::slotted([slot="heading"]) {
      color: var(--accordion-color-text-fill-collapsed-title-focus);
    }
    ::slotted([slot="description"]) {
      color: var(--accordion-color-text-fill-collapsed-description-focus);
    }
    --svg-icon-color: var(--accordion-color-icon-fill-collapsed-focus);
    background-color: var(--accordion-color-container-fill-collapsed-focus);
    border-radius: var(--accordion-border-radius-collapsed-focus);
    border: var(--accordion-border-style-collapsed-focus);
    box-shadow: var(--accordion-elevation-collapsed-focus);
  }

  &.active {
    ::slotted([slot="heading"]) {
      color: var(--accordion-color-text-fill-expanded-title-default);
    }
    ::slotted([slot="description"]) {
      color: var(--accordion-color-text-fill-expanded-description-default);
    }
    --svg-icon-color: var(--accordion-color-icon-fill-expanded-default);
    background-color: var(--accordion-color-container-fill-expanded-header-default);
    border-radius: var(--accordion-border-radius-expanded-header-default);
    border: var(--accordion-border-style-expanded-header-default);
    box-shadow: var(--accordion-elevation-expanded-header-default);
    &:hover {
      ::slotted([slot="heading"]) {
        color: var(--accordion-color-text-fill-expanded-title-hover);
      }
      ::slotted([slot="description"]) {
        color: var(--accordion-color-text-fill-expanded-description-hover);
      }
      --svg-icon-color: var(--accordion-color-icon-fill-expanded-hover);
      background-color: var(--accordion-color-container-fill-expanded-header-hover);
      border-radius: var(--accordion-border-radius-expanded-header-hover);
      border: var(--accordion-border-style-expanded-header-hover);
      box-shadow: var(--accordion-elevation-expanded-header-hover);
    }
    &:focus-visible {
      ::slotted([slot="heading"]) {
        color: var(--accordion-color-text-fill-expanded-title-focus);
      }
      ::slotted([slot="description"]) {
        color: var(--accordion-color-text-fill-expanded-description-focus);
      }
      --svg-icon-color: var(--accordion-color-icon-fill-expanded-focus); 
      background-color: var(--accordion-color-container-fill-expanded-header-focus);
      border-radius: var(--accordion-border-radius-expanded-header-focus);
      border: var(--accordion-border-style-expanded-header-focus);
      box-shadow: var(--accordion-elevation-expanded-header-focus);
    }
  }
}

`;
export {
  e as default
};

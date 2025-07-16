import { css as i } from "lit";
const r = i`
:host {
  width: 100%;
}
.dividerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.divider {
  border: none;
}

.vertical {
  width: 0;
  height: 100%;
  min-height: 200px;
}

.horizontal {
  width: 100%;
  height: 0;
}

/* Horizontal Padding */
.padding-left-none {
  margin-left: var(--divider-spacing-hor-padding-left-none);
}

.padding-left-xs {
  margin-left: var(--divider-spacing-hor-padding-left-xs);
}

.padding-left-sm {
  margin-left: var(--divider-spacing-hor-padding-left-sm);
}

.padding-left-md {
  margin-left: var(--divider-spacing-hor-padding-left-md);
}

.padding-left-lg {
  margin-left: var(--divider-spacing-hor-padding-left-lg);
}

.padding-right-none {
  margin-right: var(--divider-spacing-hor-padding-right-none);
}

.padding-right-xs {
  margin-right: var(--divider-spacing-hor-padding-right-xs);
}

.padding-right-sm {
  margin-right: var(--divider-spacing-hor-padding-right-sm);
}

.padding-right-md {
  margin-right: var(--divider-spacing-hor-padding-right-md);
}

.padding-right-lg {
  margin-right: var(--divider-spacing-hor-padding-right-lg);
}

/* Vertical Padding */
.padding-top-none {
  margin-top: var(--divider-spacing-ver-padding-top-none);
}

.padding-top-xs {
  margin-top: var(--divider-spacing-ver-padding-top-xs);
}

.padding-top-sm {
  margin-top: var(--divider-spacing-ver-padding-top-sm);
}

.padding-top-md {
  margin-top: var(--divider-spacing-ver-padding-top-md);
}

.padding-top-lg {
  margin-top: var(--divider-spacing-ver-padding-top-lg);
}

.padding-bottom-none {
  margin-bottom: var(--divider-spacing-ver-padding-bottom-none);
}

.padding-bottom-xs {
  margin-bottom: var(--divider-spacing-ver-padding-bottom-xs);
}

.padding-bottom-sm {
  margin-bottom: var(--divider-spacing-ver-padding-bottom-sm);
}

.padding-bottom-md {
  margin-bottom: var(--divider-spacing-ver-padding-bottom-md);
}

.padding-bottom-lg {
  margin-bottom: var(--divider-spacing-ver-padding-bottom-lg);
}

.solid {
  border: var(--divider-border-style-solid-xs2);
}

.dashed {
  border: var(--divider-border-style-dashed-2);
}

`;
export {
  r as default
};

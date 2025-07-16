import { css as a } from "lit";
const d = a`
:host {
  display: block;
}
.kmk-surface-container {
  display: inline-flex;
  flex-direction: column;
  padding-top: var(--surface-x-padding);
  padding-bottom: var(--surface-x-padding);
  padding-right: var(--surface-y-padding);
  padding-left: var(--surface-y-padding);
  box-shadow: var(--surface-elevation);
  border-radius: var(--surface-border-radius);
  border: var(--surface-border);
  background-color: var(--surface-background-color, transparent);
  box-sizing: border-box;
}
.full-width {
  display: flex;
}
.content-alignment-center {
  align-items: center;
}
.content-alignment-right {
  align-items: flex-end;
}

.padding-top-none {
  padding-top: var(--surface-container-spacing-ver-padding-top-none);
}
.padding-top-sm {
  padding-top: var(--surface-container-spacing-ver-padding-top-sm);
}
.padding-top-md {
  padding-top: var(--surface-container-spacing-ver-padding-top-md);
}
.padding-top-lg {
  padding-top: var(--surface-container-spacing-ver-padding-top-lg);
}
.padding-bottom-none {
  padding-bottom: var(--surface-container-spacing-ver-padding-bottom-none);
}
.padding-bottom-sm {
  padding-bottom: var(--surface-container-spacing-ver-padding-bottom-sm);
}
.padding-bottom-md {
  padding-bottom: var(--surface-container-spacing-ver-padding-bottom-md);
}
.padding-bottom-lg {
  padding-bottom: var(--surface-container-spacing-ver-padding-bottom-lg);
}
.padding-left-none {
  padding-left: var(--surface-container-spacing-hor-padding-left-none);
}
.padding-left-sm {
  padding-left: var(--surface-container-spacing-hor-padding-left-sm);
}
.padding-left-md {
  padding-left: var(--surface-container-spacing-hor-padding-left-md);
}
.padding-left-lg {
  padding-left: var(--surface-container-spacing-hor-padding-left-lg);
}
.padding-right-none {
  padding-right: var(--surface-container-spacing-hor-padding-right-none);
}
.padding-right-sm {
  padding-right: var(--surface-container-spacing-hor-padding-right-sm);
}
.padding-right-md {
  padding-right: var(--surface-container-spacing-hor-padding-right-md);
}
.padding-right-lg {
  padding-right: var(--surface-container-spacing-hor-padding-right-lg);
}


`;
export {
  d as default
};

import { css as t } from "lit";
const n = t`
.kmk-button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.layout-horizontal {
  flex-direction: row;
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-left {
    justify-content: flex-start;
  }
}

.layout-vertical {
  flex-direction: column;
  &.align-center {
    align-items: center;
  }
  &.align-right {
    align-items: flex-end;
  }
  &.align-left {
    align-items: flex-start;
  }
}

.gap-xs {
  gap: var(--button-group-spacing-ver-item-xs) var(--button-group-spacing-hor-item-xs);
}

.gap-sm {
  gap: var(--button-group-spacing-ver-item-sm) var(--button-group-spacing-hor-item-sm);
}

.gap-md {
  gap: var(--button-group-spacing-ver-item-md) var(--button-group-spacing-hor-item-md);
}

.gap-lg {
  gap: var(--button-group-spacing-ver-item-lg) var(--button-group-spacing-hor-item-lg);
}

`;
export {
  n as default
};

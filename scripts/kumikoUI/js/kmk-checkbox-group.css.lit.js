import { css as o } from "lit";
const r = o`
.checkbox-group {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  &.col-gap-sm {
    column-gap: var(--checkbox-group-spacing-hor-item-sm);
  }
  &.col-gap-md {
    column-gap: var(--checkbox-group-spacing-hor-item-md);
  }
  &.col-gap-lg {
    column-gap: var(--checkbox-group-spacing-hor-item-lg);
  }
  &.row-gap-sm {
    row-gap: var(--checkbox-group-spacing-ver-item-sm);
  }
  &.row-gap-md {
    row-gap: var(--checkbox-group-spacing-ver-item-md);
  }
  &.row-gap-lg {
    row-gap: var(--checkbox-group-spacing-ver-item-lg);
  }
}

.checkbox-group.row {
  flex-direction: row;
}

.checkbox-group.column {
  flex-direction: column;
}

`;
export {
  r as default
};

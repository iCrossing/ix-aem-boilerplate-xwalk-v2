import { css as o } from "lit";
const a = o`
.radio-button-group {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  &.col-gap-sm {
    column-gap: var(--radio-button-group-spacing-hor-item-sm);
  }
  &.col-gap-md {
    column-gap: var(--radio-button-group-spacing-hor-item-md);
  }
  &.col-gap-lg {
    column-gap: var(--radio-button-group-spacing-hor-item-lg);
  }
  &.row-gap-sm {
    row-gap: var(--radio-button-group-spacing-ver-item-sm);
  }
  &.row-gap-md {
    row-gap: var(--radio-button-group-spacing-ver-item-md);
  }
  &.row-gap-lg {
    row-gap: var(--radio-button-group-spacing-ver-item-lg);
  }
}

.radio-button-group.row {
  flex-direction: row;
}

.radio-button-group.column {
  flex-direction: column;
}

`;
export {
  a as default
};

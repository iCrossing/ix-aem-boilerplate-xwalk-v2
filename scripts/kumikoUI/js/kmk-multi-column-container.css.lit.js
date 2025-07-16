import { css as o } from "lit";
const n = o`
:host {
  width: 100%;
}
.kmk-multi-column {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: var(--multi-column-container-spacing-hor-item-none);
  column-gap: var(--multi-column-container-spacing-ver-item-none);
  box-sizing: border-box;
  ::slotted(*) {
    box-sizing: border-box;
  }

  &.col-gap-sm,
  &.col-gap-md,
  &.col-gap-lg {
    column-gap: var(--multi-column-container-spacing-ver-item-sm);
  }
  &.row-gap-sm,
  &.row-gap-md,
  &.row-gap-lg {
    row-gap: var(--multi-column-container-spacing-hor-item-sm);
  }
  @media (min-width: 768px) {
    &.col-gap-sm {
      column-gap: var(--multi-column-container-spacing-ver-item-sm);
    }
    &.col-gap-md {
      column-gap: var(--multi-column-container-spacing-ver-item-md);
    }
    &.col-gap-lg {
      column-gap: var(--multi-column-container-spacing-ver-item-lg);
    }
    &.row-gap-sm {
      row-gap: var(--multi-column-container-spacing-hor-item-sm);
    }
    &.row-gap-md {
      row-gap: var(--multi-column-container-spacing-hor-item-md);
    }
    &.row-gap-lg {
      row-gap: var(--multi-column-container-spacing-hor-item-lg);
    }
  }
}

.cols-default-1 {
  ::slotted(*) {
    grid-column: span 12 / span 12;
  }
}

.cols-default-2 {
  ::slotted(*) {
    grid-column: span 6 / span 6;
  }
}

.cols-default-3 {
  ::slotted(*) {
    grid-column: span 4 / span 4;
  }
}

.cols-default-4 {
  ::slotted(*) {
    grid-column: span 3 / span 3;
  }
}

.cols-default-5 {
  &.kmk-multi-column {
    grid-template-columns: repeat(5, 1fr);
  }
  ::slotted(*) {
    grid-column: span 1 / span 1;
  }
}

@media (min-width: 768px) {
  /* .multi-column {
    column-gap: var(--multi-column-column-gap);
  } */
  .cols-md-1 {
    ::slotted(*) {
      grid-column: span 12 / span 12;
    }
  }
  .cols-md-2 {
    ::slotted(*) {
      grid-column: span 6 / span 6;
    }
  }
  .cols-md-3 {
    ::slotted(*) {
      grid-column: span 4 / span 4;
    }
  }
  .cols-md-4 {
    ::slotted(*) {
      grid-column: span 3 / span 3;
    }
  }
  .cols-md-5 {
    &.kmk-multi-column {
      grid-template-columns: repeat(5, 1fr);
    }
    ::slotted(*) {
      grid-column: span 1 / span 1;
    }
  }
}

@media (min-width: 1440px) {
  .cols-lg-1 {
    ::slotted(*) {
      grid-column: span 12 / span 12;
    }
  }
  .cols-lg-2 {
    ::slotted(*) {
      grid-column: span 6 / span 6;
    }
  }
  .cols-lg-3 {
    ::slotted(*) {
      grid-column: span 4 / span 4;
    }
  }
  .cols-lg-4 {
    ::slotted(*) {
      grid-column: span 3 / span 3;
    }
  }
  .cols-lg-5 {
    &.kmk-multi-column {
      grid-template-columns: repeat(5, 1fr);
    }
    ::slotted(*) {
      grid-column: span 1 / span 1;
    }
  }
}

`;
export {
  n as default
};

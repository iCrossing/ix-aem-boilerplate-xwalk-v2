import { css as r } from "lit";
const i = r`
.kmk-breadcrumbs {
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  --svg-icon-color: var(--breadcrumbs-color-icon-fill-separator);

  .home {
    display: flex;
    align-items: center;
  }

  .ellipsis {
    display: flex;
    align-items: center;
  }

  &.spacing-sm {
    margin-top: var(--breadcrumbs-spacing-ver-padding-top-sm);
    margin-bottom: var(--breadcrumbs-spacing-ver-padding-bottom-sm);
    padding-left: var(--breadcrumbs-spacing-hor-padding-left-sm);
    padding-right: var(--breadcrumbs-spacing-hor-padding-right-sm);
    gap: var(--breadcrumbs-spacing-hor-item-sm);
    --svg-icon-size: var(--breadcrumbs-sizing-icon-separator-sm);
    .ellipsis {
      gap: var(--breadcrumbs-spacing-hor-item-sm);
    }
  }
  
  &.spacing-md {
    margin-top: var(--breadcrumbs-spacing-ver-padding-top-md);
    margin-bottom: var(--breadcrumbs-spacing-ver-padding-bottom-md);
    padding-left: var(--breadcrumbs-spacing-hor-padding-left-md);
    padding-right: var(--breadcrumbs-spacing-hor-padding-right-md);
    gap: var(--breadcrumbs-spacing-hor-item-md);
    --svg-icon-size: var(--breadcrumbs-sizing-icon-separator-md);
    .ellipsis {
      gap: var(--breadcrumbs-spacing-hor-item-sm);
    }
  }
  
  &.spacing-lg {
    margin-top: var(--breadcrumbs-spacing-ver-padding-top-lg);
    margin-bottom: var(--breadcrumbs-spacing-ver-padding-bottom-lg);
    padding-left: var(--breadcrumbs-spacing-hor-padding-left-lg);
    padding-right: var(--breadcrumbs-spacing-hor-padding-right-lg);
    gap: var(--breadcrumbs-spacing-hor-item-lg);
    --svg-icon-size: var(--breadcrumbs-sizing-icon-separator-lg);
    .ellipsis {
      gap: var(--breadcrumbs-spacing-hor-item-sm);
    }
  }
}


`;
export {
  i as default
};

import { css as a } from "lit";
const t = a`
.kmk-card-product {
  .header {
    display: flex;
    flex-direction: column;
  }
  .header-image {
    position: relative;
    height: 210px;
    display: flex;
    justify-content: center;
  }
  .product-image {
    margin: 20px 0;
    position: relative;
  }
  .image {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &.overlayBackgroundFill {
    border: none !important;
  }

  .header-info {
    display: flex;
    flex-direction: column;
    .logo-container {
      display: flex;
      justify-content: space-between;
      .logo {
        max-width: 115px;
      }
    }
  }
  .price {
    --kmk-text-color: var(--card-product-color-text-fill-sub-title);
  }
  .content {
    display: flex;
    flex-direction: column;
  }

  .specs {
    --kmk-text-color: var(--card-product-color-text-fill-specs);
  }

  &.variant-overlay {
    .product-image {
      margin: 0;
    }
  }

  &.size-sm {
    max-width: 327px;
    .header-info {
      gap: var(--card-product-spacing-ver-item-header-sm);
    }
    .content {
      gap: var(--card-product-spacing-ver-item-content-sm);
    }
    &.variant-standard {
      .header-info {
        padding-top: var(
          --card-product-spacing-ver-padding-standard-header-top-sm
        );
        padding-bottom: var(
          --card-product-spacing-ver-padding-standard-header-bottom-sm
        );
        padding-left: var(
          --card-product-spacing-hor-padding-standard-header-left-sm
        );
        padding-right: var(
          --card-product-spacing-hor-padding-standard-header-right-sm
        );
      }
      .content {
        padding-top: var(
          --card-product-spacing-ver-padding-standard-content-top-sm
        );
        padding-bottom: var(
          --card-product-spacing-ver-padding-standard-content-bottom-sm
        );
        padding-left: var(
          --card-product-spacing-hor-padding-standard-content-left-sm
        );
        padding-right: var(
          --card-product-spacing-hor-padding-standard-content-right-sm
        );
        gap: var(--card-product-spacing-ver-item-content-sm);
      }
    }
    &.variant-overlay {
      .content {
        padding-top: var(
          --card-product-spacing-ver-padding-with-overlay-image-content-top-sm
        );
        padding-bottom: var(
          --card-product-spacing-ver-padding-with-overlay-image-content-bottom-sm
        );
        padding-left: var(
          --card-product-spacing-hor-padding-with-overlay-image-content-left-sm
        );
        padding-right: var(
          --card-product-spacing-hor-padding-with-overlay-image-content-right-sm
        );
      }
    }
  }
  &.size-lg {
    max-width: 416px;
    .header-info {
      gap: var(--card-product-spacing-ver-item-header-lg);
    }
    .content {
      gap: var(--card-product-spacing-ver-item-content-lg);
    }
    &.variant-standard {
      .header-info {
        padding-top: var(
          --card-product-spacing-ver-padding-standard-header-top-lg
        );
        padding-bottom: var(
          --card-product-spacing-ver-padding-standard-header-bottom-lg
        );
        padding-left: var(
          --card-product-spacing-hor-padding-standard-header-left-lg
        );
        padding-right: var(
          --card-product-spacing-hor-padding-standard-header-right-lg
        );
      }
      .content {
        padding-top: var(
          --card-product-spacing-ver-padding-standard-content-top-lg
        );
        padding-bottom: var(
          --card-product-spacing-ver-padding-standard-content-bottom-lg
        );
        padding-left: var(
          --card-product-spacing-hor-padding-standard-content-left-lg
        );
        padding-right: var(
          --card-product-spacing-hor-padding-standard-content-right-lg
        );
        gap: var(--card-product-spacing-ver-item-content-lg);
      }
    }
    &.variant-overlay {
      .header-image {
        justify-content: flex-end;
        padding-right: 20px;
      }
      .content {
        padding-top: var(
          --card-product-spacing-ver-padding-with-overlay-image-content-top-lg
        );
        padding-bottom: var(
          --card-product-spacing-ver-padding-with-overlay-image-content-bottom-lg
        );
        padding-left: var(
          --card-product-spacing-hor-padding-with-overlay-image-content-left-lg
        );
        padding-right: var(
          --card-product-spacing-hor-padding-with-overlay-image-content-right-lg
        );
      }
    }
  }
}

`;
export {
  t as default
};

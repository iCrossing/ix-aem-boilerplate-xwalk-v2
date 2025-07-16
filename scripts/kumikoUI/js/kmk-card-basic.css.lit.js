import { css as a } from "lit";
const i = a`
.kmk-card-basic {
  .content {
    display: flex;
    flex-direction: column;
  }
  &.orientation-horizontal {
    display: flex;
    flex-direction: column;
    max-width: 794px;

    .content {
      padding-top: var(--card-basic-spacing-ver-padding-horizontal-content-top);
      padding-bottom: var(
        --card-basic-spacing-ver-padding-horizontal-content-bottom
      );
      padding-left: var(
        --card-basic-spacing-hor-padding-horizontal-content-left
      );
      padding-right: var(
        --card-basic-spacing-hor-padding-horizontal-content-right
      );
      gap: var(--card-basic-spacing-ver-item-horizontal-content);
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 360px;
      .image,
      .content {
        width: 50%;
      }
      .button-group {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
      }
    }
  }
  &.orientation-vertical {
    display: flex;
    flex-direction: column;
  }
  &.size-sm {
    &.orientation-vertical {
      max-width: 327px;
      .content {
        padding-top: var(
          --card-basic-spacing-ver-padding-vertical-content-top-sm
        );
        padding-bottom: var(
          --card-basic-spacing-ver-padding-vertical-content-bottom-sm
        );
        padding-left: var(
          --card-basic-spacing-hor-padding-vertical-content-left-sm
        );
        padding-right: var(
          --card-basic-spacing-hor-padding-vertical-content-right-sm
        );
        gap: var(--card-basic-spacing-ver-item-vertical-content-sm);
      }
    }
  }
  &.size-lg {
    &.orientation-vertical {
      max-width: 416px;
      .content {
        padding-top: var(
          --card-basic-spacing-ver-padding-vertical-content-top-lg
        );
        padding-bottom: var(
          --card-basic-spacing-ver-padding-vertical-content-bottom-lg
        );
        padding-left: var(
          --card-basic-spacing-hor-padding-vertical-content-left-lg
        );
        padding-right: var(
          --card-basic-spacing-hor-padding-vertical-content-right-lg
        );
        gap: var(--card-basic-spacing-ver-item-vertical-content-lg);
      }
    }
  }
}

`;
export {
  i as default
};

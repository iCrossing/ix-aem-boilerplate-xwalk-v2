import { css as a } from "lit";
const e = a`
a {
  text-decoration: none;
  color: inherit;
  outline: none;
  display: inline-block;
  overflow: hidden;
}
.kmk-card-testimonial {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* missing token */
  gap: 24px;

  .header {
    display: flex;
    align-items: center;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .image {
    max-width: 95px;
  }

  &.size-sm {
    max-width: 327px;
    padding-top: var(--card-testimonial-spacing-ver-padding-top-sm);
    padding-bottom: var(--card-testimonial-spacing-ver-padding-bottom-sm);
    padding-left: var(--card-testimonial-spacing-hor-padding-left-sm);
    padding-right: var(--card-testimonial-spacing-hor-padding-right-sm);
  }

  &.size-lg {
    max-width: 416px;
    padding-top: var(--card-testimonial-spacing-ver-padding-top-lg);
    padding-bottom: var(--card-testimonial-spacing-ver-padding-bottom-lg);
    padding-left: var(--card-testimonial-spacing-hor-padding-left-lg);
    padding-right: var(--card-testimonial-spacing-hor-padding-right-lg);
  }

  &.quote-top {
    &.size-sm {
      .header {
        gap: var(--card-testimonial-spacing-ver-item-footer-sm);
      }
      .info {
        gap: var(--card-testimonial-spacing-ver-item-footer-sm);
        margin-left: var(--card-testimonial-spacing-hor-footer-sm);
      }
    }
    &.size-lg {
      .header {
        gap: var(--card-testimonial-spacing-ver-item-footer-lg);
      }
      .info {
        gap: var(--card-testimonial-spacing-ver-item-footer-lg);
        margin-left: var(--card-testimonial-spacing-hor-item-footer-lg);
      }
    }
  }
  &.quote-bottom {
    &.size-sm {
      .header {
        gap: var(--card-testimonial-spacing-ver-item-header-sm);
      }
      .info {
        gap: var(--card-testimonial-spacing-ver-item-header-sm);
        margin-left: var(--card-testimonial-spacing-hor-item-header-sm);
      }
    }
    &.size-lg {
      .header {
        gap: var(--card-testimonial-spacing-ver-item-header-lg);
      }
      .info {
        gap: var(--card-testimonial-spacing-ver-item-header-lg);
        margin-left: var(--card-testimonial-spacing-hor-item-header-lg);
      }
    }
  }
}

`;
export {
  e as default
};

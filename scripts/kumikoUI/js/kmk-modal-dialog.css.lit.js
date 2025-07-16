import { css as a } from "lit";
const d = a`
.kmk-modal-dialog {
  /* This backgrounds should be fixed in the token file */
  --backgdrop-light: rgba(0, 0, 0, 0.2);
  --backgdrop-medium: rgba(0, 0, 0, 0.4);
  --backgdrop-dark: rgba(0, 0, 0, 0.6);

  .dialog-wrapper {
    background-color: var(--modal-dialog-color-container-fill-modal);
    border-radius: var(--modal-dialog-border-radius-top-left)
      var(--modal-dialog-border-radius-top-right)
      var(--modal-dialog-border-radius-bottom-right)
      var(--modal-dialog-border-radius-bottom-left);
    padding: 0;
    border: var(--modal-dialog-border-style);
    box-shadow: var(--modal-dialog-elevation);
    button {
      background-color: transparent;
      border: none;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--modal-dialog-color-container-fill-header);
    color: var(--modal-dialog-color-text-fill-title);
  }
  .content {
    background-color: var(--modal-dialog-color-container-fill-content);
  }
  .footer {
    background-color: var(--modal-dialog-color-container-fill-footer);
  }
  &.backdrop-light {
    dialog::backdrop {
      background: var(--backgdrop-light);
    }
  }
  &.backdrop-medium {
    dialog::backdrop {
      background: var(--backgdrop-medium);
    }
  }
  &.backdrop-dark {
    dialog::backdrop {
      background: var(--backgdrop-dark);
    }
  }
  &.size-sm {
    .dialog-wrapper {
      max-width: 375px;
      width: 100%;
    }
    .header {
      padding-left: var(--modal-dialog-spacing-hor-padding-header-left-sm);
      padding-right: var(--modal-dialog-spacing-hor-padding-header-right-sm);
      padding-top: var(--modal-dialog-spacing-ver-padding-header-top-sm);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-header-bottom-sm);
      gap: var(--modal-dialog-spacing-hor-item-header-sm);
    }
    .heading {
      font-weight: var(--modal-dialog-fonts-title-sm-font-weight);
      font-size: var(--modal-dialog-fonts-title-sm-font-size);
      line-height: var(--modal-dialog-fonts-title-sm-line-height);
      font-family: var(--modal-dialog-fonts-title-sm-font-family);
      letter-spacing: var(--modal-dialog-fonts-title-sm-letter-spacing);
      margin: var(--modal-dialog-fonts-title-sm-margin-spacing) 0;
      text-indent: var(--modal-dialog-fonts-title-sm-text-indent);
      text-transform: var(--modal-dialog-fonts-title-sm-text-transform);
      text-decoration: var(--modal-dialog-fonts-title-sm-text-decoration);
    }
    .content {
      padding-left: var(--modal-dialog-spacing-hor-padding-content-left-sm);
      padding-right: var(--modal-dialog-spacing-hor-padding-content-right-sm);
      padding-top: var(--modal-dialog-spacing-ver-padding-content-top-sm);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-content-bottom-sm);
      margin: var(--modal-dialog-spacing-ver-item-sm) 0;
    }
    .footer {
      padding-left: var(--modal-dialog-spacing-hor-padding-footer-left-sm);
      padding-right: var(--modal-dialog-spacing-hor-padding-footer-right-sm);
      padding-top: var(--modal-dialog-spacing-ver-padding-footer-top-sm);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-footer-bottom-sm);
    }
  }

  &.size-md {
    .dialog-wrapper {
      max-width: 600px;
      width: 100%;
    }
    .header {
      padding-left: var(--modal-dialog-spacing-hor-padding-header-left-md);
      padding-right: var(--modal-dialog-spacing-hor-padding-header-right-md);
      padding-top: var(--modal-dialog-spacing-ver-padding-header-top-md);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-header-bottom-md);
      gap: var(--modal-dialog-spacing-hor-item-header-md);
    }
    .heading {
      font-weight: var(--modal-dialog-fonts-title-md-font-weight);
      font-size: var(--modal-dialog-fonts-title-md-font-size);
      line-height: var(--modal-dialog-fonts-title-md-line-height);
      font-family: var(--modal-dialog-fonts-title-md-font-family);
      letter-spacing: var(--modal-dialog-fonts-title-md-letter-spacing);
      margin: var(--modal-dialog-fonts-title-md-margin-spacing) 0;
      text-indent: var(--modal-dialog-fonts-title-md-text-indent);
      text-transform: var(--modal-dialog-fonts-title-md-text-transform);
      text-decoration: var(--modal-dialog-fonts-title-md-text-decoration);
    }
    .content {
      padding-left: var(--modal-dialog-spacing-hor-padding-content-left-md);
      padding-right: var(--modal-dialog-spacing-hor-padding-content-right-md);
      padding-top: var(--modal-dialog-spacing-ver-padding-content-top-md);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-content-bottom-md);
      margin: var(--modal-dialog-spacing-ver-item-md) 0;
    }
    .footer {
      padding-left: var(--modal-dialog-spacing-hor-padding-footer-left-md);
      padding-right: var(--modal-dialog-spacing-hor-padding-footer-right-md);
      padding-top: var(--modal-dialog-spacing-ver-padding-footer-top-md);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-footer-bottom-md);
    }
  }

  &.size-lg {
    .dialog-wrapper {
      max-width: 800px;
      width: 100%;
    }
    .header {
      padding-left: var(--modal-dialog-spacing-hor-padding-header-left-lg);
      padding-right: var(--modal-dialog-spacing-hor-padding-header-right-lg);
      padding-top: var(--modal-dialog-spacing-ver-padding-header-top-lg);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-header-bottom-lg);
      gap: var(--modal-dialog-spacing-hor-item-header-lg);
    }
    .heading {
      font-weight: var(--modal-dialog-fonts-title-lg-font-weight);
      font-size: var(--modal-dialog-fonts-title-lg-font-size);
      line-height: var(--modal-dialog-fonts-title-lg-line-height);
      font-family: var(--modal-dialog-fonts-title-lg-font-family);
      letter-spacing: var(--modal-dialog-fonts-title-lg-letter-spacing);
      margin: var(--modal-dialog-fonts-title-lg-margin-spacing) 0;
      text-indent: var(--modal-dialog-fonts-title-lg-text-indent);
      text-transform: var(--modal-dialog-fonts-title-lg-text-transform);
      text-decoration: var(--modal-dialog-fonts-title-lg-text-decoration);
    }
    .content {
      padding-left: var(--modal-dialog-spacing-hor-padding-content-left-lg);
      padding-right: var(--modal-dialog-spacing-hor-padding-content-right-lg);
      padding-top: var(--modal-dialog-spacing-ver-padding-content-top-lg);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-content-bottom-lg);
      margin: var(--modal-dialog-spacing-ver-item-lg) 0;
    }
    .footer {
      padding-left: var(--modal-dialog-spacing-hor-padding-footer-left-lg);
      padding-right: var(--modal-dialog-spacing-hor-padding-footer-right-lg);
      padding-top: var(--modal-dialog-spacing-ver-padding-footer-top-lg);
      padding-bottom: var(--modal-dialog-spacing-ver-padding-footer-bottom-lg);
    }
  }
}

`;
export {
  d as default
};

import { css as n } from "lit";
const i = n`
.banner-notification {
  display: flex;
  justify-content: space-between;
  border-radius: var(--banner-notification-border-radius);
  box-shadow: var(--banner-notification-elevation);
  --svg-icon-size: var(--banner-notification-sizing-icon-left);
  padding-top: var(--banner-notification-spacing-ver-padding-top);
  padding-bottom: var(--banner-notification-spacing-ver-padding-bottom);
  padding-left: var(--banner-notification-spacing-hor-padding-left);
  padding-right: var(--banner-notification-spacing-hor-padding-right);
  transition: opacity 0.5s ease-out;
}

.banner-notification.hide {
  opacity: 0;
  pointer-events: none;
}

.variant-neutral {
  background-color: var(--banner-notification-color-container-fill-neutral);
  border: var(--banner-notification-border-style-neutral);
  --kmk-text-color: var(--banner-notification-color-text-fill-neutral);
  --svg-icon-color: var(--banner-notification-color-icon-fill-left-neutral);
}

.variant-accent-01 {
  background-color: var(--banner-notification-color-container-fill-accent1);
  border: var(--banner-notification-border-style-accent1);
  --kmk-text-color: var(--banner-notification-color-text-fill-accent1);
  --svg-icon-color: var(--banner-notification-color-icon-fill-left-accent1);
}

.variant-accent-02 {
  background-color: var(--banner-notification-color-container-fill-accent2);
  border: var(--banner-notification-border-style-accent2);
  --kmk-text-color: var(--banner-notification-color-text-fill-accent2);
  --svg-icon-color: var(--banner-notification-color-icon-fill-left-accent2);
}

.variant-accent-03 {
  background-color: var(--banner-notification-color-container-fill-accent3);
  border: var(--banner-notification-border-style-accent3);
  --kmk-text-color: var(--banner-notification-color-text-fill-accent3);
  --svg-icon-color: var(--banner-notification-color-icon-fill-left-accent3);
}

.variant-accent-04 {
  background-color: var(--banner-notification-color-container-fill-accent4);
  border: var(--banner-notification-border-style-accent4);
  --kmk-text-color: var(--banner-notification-color-text-fill-accent4);
  --svg-icon-color: var(--banner-notification-color-icon-fill-left-accent4);
}

.notification-content {
  display: flex;
}

.notification-text {
  padding: 0 var(--banner-notification-spacing-hor-item);
  display: flex;
  flex-direction: column;
  gap: var(--banner-notification-spacing-ver-item);
}

`;
export {
  i as default
};

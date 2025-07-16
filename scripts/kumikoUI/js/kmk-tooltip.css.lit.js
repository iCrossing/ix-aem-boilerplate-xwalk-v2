import { css as t } from "lit";
const a = t`
:host {
  position: relative;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.variant-bg-light {
  background-color: var(--tooltip-color-container-fill-on-light);
  color: var(--tooltip-color-text-fill-label-on-light);
}

.variant-bg-dark {
  background-color: var(--tooltip-color-container-fill-on-dark);
  color: var(--tooltip-color-text-fill-label-on-dark);
}

.kmk-tooltip {
  position: absolute;
  box-sizing: border-box;
  width: max-content;
  max-width: 300px;
  padding-top: var(--tooltip-spacing-ver-padding-top);
  padding-bottom: var(--tooltip-spacing-ver-padding-bottom);
  padding-left: var(--tooltip-spacing-hor-padding-left);
  padding-right: var(--tooltip-spacing-hor-padding-right);
  border-radius: var(--tooltip-border-radius);
  margin: 4px; /* same svg arrow height */
}

.kmk-tooltip[aria-hidden="false"] {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
  transition-delay: 0s;
}

.kmk-tooltip[aria-hidden="true"] {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 2.3s;
}

.tooltip-content {
  font-weight: var(--tooltip-fonts-label-font-weight);
  font-size: var(--tooltip-fonts-label-font-size);
  line-height: var(--tooltip-fonts-label-line-height);
  font-family: var(--tooltip-fonts-label-font-family);
  letter-spacing: var(--tooltip-fonts-label-letter-spacing);
  text-indent: var(--tooltip-fonts-label-text-indent);
  text-transform: var(--tooltip-fonts-label-text-transform);
  text-decoration: var(--tooltip-fonts-label-text-decoration);
}

.tooltip-arrow {
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
}

.kmk-tooltip[data-placement="top"] .tooltip-arrow,
.kmk-tooltip[data-placement="bottom"] .tooltip-arrow {
  width: 13px;
  height: 4px;
}

.kmk-tooltip[data-placement="left"] .tooltip-arrow,
.kmk-tooltip[data-placement="right"] .tooltip-arrow {
  width: 4px;
  height: 12px;
}

.kmk-tooltip[data-placement="top"] .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 4L0.5 -1.04907e-06L12.5 0L6.5 4Z" fill="%23757575"/></svg>');
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
}
.kmk-tooltip[data-placement="top"].variant-bg-dark .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 4L0.5 -1.04907e-06L12.5 0L6.5 4Z" fill="%23F5F5F5"/></svg>');
}

.kmk-tooltip[data-placement="bottom"] .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0L12.5 4H0.5L6.5 0Z" fill="%23757575"/></svg>');
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.kmk-tooltip[data-placement="bottom"].variant-bg-dark .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0L12.5 4H0.5L6.5 0Z" fill="%23F5F5F5"/></svg>');
}

.kmk-tooltip[data-placement="left"] .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L-5.24537e-07 12L0 -1.74846e-07L4 6Z" fill="%23757575"/></svg>');
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
}

.kmk-tooltip[data-placement="left"].variant-bg-dark .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L-5.24537e-07 12L0 -1.74846e-07L4 6Z" fill="%23F5F5F5"/></svg>');
}

.kmk-tooltip[data-placement="right"] .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6L4.5 4.76995e-08L4.5 12L0.5 6Z" fill="%23757575"/></svg>');
  left: -4px;
  top: 50%;
  transform: translateY(-50%);
}

.kmk-tooltip[data-placement="right"].variant-bg-dark .tooltip-arrow {
  background-image: url('data:image/svg+xml,<svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6L4.5 4.76995e-08L4.5 12L0.5 6Z" fill="%23F5F5F5"/></svg>');
}

`;
export {
  a as default
};

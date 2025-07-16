import { css as e } from "lit";
const n = e`
.kmk-in-page-nav {
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  --svg-icon-color: var(--in-page-nav-item-color-icon-fill-not-selected-default);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--in-page-nav-spacing-hor-item);
}

.nav-container.sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
}

.heading-container {
  flex: 0 0 auto; /* Ensures the heading doesn't stretch */
}

.links-container {
  display: flex;
  gap: var(--in-page-nav-item-spacing-hor-item-label);
  flex: 1;
  justify-content: var(--kmk-in-page-nav-alignment, flex-start); /* Dynamic alignment */
}

.cta-container {
  flex: 0 0 auto; /* Ensures the CTA button doesn't stretch */
}

.align-left {
  justify-content: flex-start;
}

.align-center {
  justify-content: center;
}

.align-right {
  justify-content: flex-end;
}

/* Default state for links */
::slotted(a.nav-link) {
  display: inline-flex;
  color: var(--in-page-nav-item-color-text-fill-not-selected-default);
  font-weight: var(--in-page-nav-item-fonts-label-font-weight);
  font-size: var(--in-page-nav-item-fonts-label-font-size);
  line-height: var(--in-page-nav-item-fonts-label-line-height);
  font-family: var(--in-page-nav-item-fonts-label-font-family);
  letter-spacing: var(--in-page-nav-item-fonts-label-letter-spacing);
  margin: var(--in-page-nav-item-fonts-label-margin-spacing) var(--spacing-xs2);
  padding: var(--in-page-nav-item-spacing-ver-padding-label-top)
    var(--in-page-nav-item-spacing-hor-padding-label-right)
    var(--in-page-nav-item-spacing-ver-padding-label-bottom)
    var(--in-page-nav-item-spacing-hor-padding-label-left);
  text-decoration: var(--in-page-nav-item-fonts-label-text-decoration);
  text-indent: var(--in-page-nav-item-fonts-label-text-indent);
  text-transform: var(--in-page-nav-item-fonts-label-text-transform);
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: var(--in-page-nav-item-border-radius-label-not-selected-default);
  border: var(--in-page-nav-item-border-style-label-not-selected-default);
  --svg-icon-size: var(--in-page-nav-item-sizing-icon);
  position: relative;
}

::slotted(a.nav-link:hover) {
  color: var(--in-page-nav-item-color-text-fill-not-selected-hover);
}

::slotted(a.nav-link:focus-visible) {
  border: var(--in-page-nav-item-border-style-label-not-selected-focus);
  border-radius: var(--in-page-nav-item-border-radius-label-not-selected-focus);
}

::slotted(a.nav-link.selected) {
  color: var(--in-page-nav-item-color-text-fill-selected-default);
}

::slotted(a.nav-link.selected)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; 
  height: 0;
  top: 25px;
  border-bottom: var(--in-page-nav-item-border-style-container-selected-with-stroke-default);
}
`;
export {
  n as default
};

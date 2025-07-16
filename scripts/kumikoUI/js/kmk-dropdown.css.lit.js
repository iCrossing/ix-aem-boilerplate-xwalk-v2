import { css as o } from "lit";
const e = o`
:host {
  display: block;
  height: 250px;
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-radius: var(--dropdown-border-radius-standard-top-right);
  background-color: var(--dropdown-color-container-fill-standard-default);
}

.dropdown .label {
  font-weight: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-font-weight
  );
  font-size: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-font-size
  );
  line-height: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-line-height
  );
  font-family: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-font-family
  );
  letter-spacing: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-letter-spacing
  );

  text-indent: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-text-indent
  );
  text-transform: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-text-transform
  );
  text-decoration: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-text-decoration
  );
  color: var(
    --dropdown-color-text-fill-label-standard-with-placeholder-default
  );
}

.icon-right {
  margin-left: auto;
}

.sm .label {
  margin-bottom: var(--dropdown-spacing-ver-item-standard-sm);
}

.md .label {
  margin-bottom: var(--dropdown-spacing-ver-item-standard-md);
}

.lg .label {
  margin-bottom: var(--dropdown-spacing-ver-item-standard-lg);
}

.dropdown .label.outlined {
  position: relative;
  left: 8px;
  background: white;
  width: 35px;
  text-align: center;
}

.sm .label.outlined {
  top: 12px;
}

.md .label.outlined {
  top: 16px;
}

.lg .label.outlined {
  top: 20px;
}

.hidden-label {
  visibility: hidden;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  padding: var(--dropdown-spacing-ver-padding-top-standard-input-sm)
    var(--dropdown-spacing-hor-padding-right-standard-input-sm);
  cursor: pointer;
  background-color: var(--dropdown-color-container-fill-standard-default);
  border-bottom: var(--dropdown-border-style-standard-default);
}
.outlined .dropdown-toggle {
  border: var(--dropdown-border-style-outlined-default);
  border-radius: var(--dropdown-border-radius-outlined-top-right);
}

.no-placeholder {
  font-weight: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-font-weight
  );
  font-size: var(--dropdown-fonts-label-standard-no-placeholder-sm-font-size);
  line-height: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-line-height
  );
  font-family: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-font-family
  );
  letter-spacing: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-letter-spacing
  );
  margin: var(--dropdown-fonts-label-standard-no-placeholder-sm-margin-spacing);
  text-indent: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-text-indent
  );
  text-transform: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-text-transform
  );
  text-decoration: var(
    --dropdown-fonts-label-standard-no-placeholder-sm-text-decoration
  );
  color: var(
    --dropdown-color-text-fill-label-standard-with-placeholder-default
  );
}

.place-holder {
  font-weight: var(--dropdown-fonts-placeholder-text-standard-sm-font-weight);
  font-size: var(--dropdown-fonts-placeholder-text-standard-sm-font-size);
  line-height: var(--dropdown-fonts-placeholder-text-standard-sm-line-height);
  font-family: var(--dropdown-fonts-placeholder-text-standard-sm-font-family);
  letter-spacing: var(
    --dropdown-fonts-placeholder-text-standard-sm-letter-spacing
  );
  margin: var(--dropdown-fonts-placeholder-text-standard-sm-margin-spacing);
  text-indent: var(--dropdown-fonts-placeholder-text-standard-sm-text-indent);
  text-transform: var(
    --dropdown-fonts-placeholder-text-standard-sm-text-transform
  );
  text-decoration: var(
    --dropdown-fonts-placeholder-text-standard-sm-text-decoration
  );
  color: var(
    --dropdown-color-text-fill-label-standard-with-placeholder-default
  );
}

.helper-text {
  color: var(--dropdown-color-text-fill-helper-text-standard-default);
  font-weight: var(--dropdown-fonts-helper-text-standard-sm-font-weight);
  font-size: var(--dropdown-fonts-helper-text-standard-sm-font-size);
  line-height: var(--dropdown-fonts-helper-text-standard-sm-line-height);
  font-family: var(--dropdown-fonts-helper-text-standard-sm-font-family);
  letter-spacing: var(--dropdown-fonts-helper-text-standard-sm-letter-spacing);
  text-indent: var(--dropdown-fonts-helper-text-standard-sm-text-indent);
  text-transform: var(--dropdown-fonts-helper-text-standard-sm-text-transform);
  text-decoration: var(
    --dropdown-fonts-helper-text-standard-sm-text-decoration
  );
}

.sm .helper-text {
  margin-top: var(--dropdown-spacing-ver-item-standard-sm);
}

.md .helper-text {
  margin-top: var(--dropdown-spacing-ver-item-standard-md);
}

.lg .helper-text {
  margin-top: var(--dropdown-spacing-ver-item-standard-lg);
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;

  left: 0;
  right: 0;
  background-color: var(--dropdown-menu-color-container-fill);
  border-radius: var(--dropdown-menu-border-radius);
  padding-top: var(--dropdown-menu-spacing-ver-padding-top);
  padding-bottom: var(--dropdown-menu-spacing-ver-padding-bottom);
  padding-left: var(--dropdown-menu-spacing-hor-padding-left);
  padding-right: var(--dropdown-menu-spacing-hor-padding-right);
  box-shadow: var(--dropdown-menu-elevation);
  border: var(--dropdown-menu-border-style);
}

.sm .dropdown-menu {
  top: 45px;
}

.md .dropdown-menu {
  top: 49px;
}

.lg .dropdown-menu {
  top: 53px;
}

.sm.outlined .dropdown-menu {
  top: 66px;
}

.md.outlined .dropdown-menu {
  top: 74px;
}

.lg.outlined .dropdown-menu {
  top: 82px;
}

::slotted(.dropdown-menu-item) {
  display: flex;
  align-items: center;
  color: var(--dropdown-menu-item-color-text-fill-not-selected-default);
  font-size: var(--dropdown-menu-item-fonts-item-font-size);
  font-weight: var(--dropdown-menu-item-fonts-item-font-weight);
  line-height: var(--dropdown-menu-item-fonts-item-line-height);
  font-family: var(--dropdown-menu-item-fonts-item-font-family);
  letter-spacing: var(--dropdown-menu-item-fonts-item-letter-spacing);
  margin: var(--dropdown-menu-item-fonts-item-margin-spacing);
  text-indent: var(--dropdown-menu-item-fonts-item-text-indent);
  text-transform: var(--dropdown-menu-item-fonts-item-text-transform);
  text-decoration: var(--dropdown-menu-item-fonts-item-text-decoration);

  padding-left: var(--dropdown-menu-item-spacing-hor-padding-left);
  padding-right: var(--dropdown-menu-item-spacing-hor-padding-right);
  padding-top: var(--dropdown-menu-item-spacing-ver-padding-top);
  padding-bottom: var(--dropdown-menu-item-spacing-ver-padding-bottom);

  background-color: var(
    --dropdown-menu-item-color-container-fill-not-selected-default
  );
}
.items-selected {
  color: var(--dropdown-menu-item-color-text-fill-selected-default);
  font-family: var(
    --dropdown-fonts-label-standard-with-selected-text-sm-font-family
  );
}

::slotted(.selected-item) {
  background: var(--dropdown-menu-item-color-container-fill-selected-default);
}

::slotted(.dropdown-menu-item.hover) {
  background-color: var(
    --dropdown-menu-item-color-container-fill-not-selected-hover
  );
}

::slotted(.dropdown-menu-item.focus-visible) {
  color: var(--dropdown-menu-item-color-text-fill-not-selected-focus);
  border-radius: var(--dropdown-menu-item-border-radius-not-selected-focus);
  border: var(--dropdown-menu-item-border-style-not-selected-focus);
}

::slotted(.dropdown-menu-item.active) {
  background-color: var(
    --dropdown-menu-item-color-container-fill-selected-hover
  );
  color: var(--dropdown-menu-item-color-text-fill-selected-hover);
  border-radius: var(--dropdown-menu-item-border-radius-selected-hover);
}

::slotted(.dropdown-menu-item.selected-item.hover) {
  background-color: var(
    --dropdown-menu-item-color-container-fill-selected-hover
  );
  color: var(--dropdown-menu-item-color-text-fill-selected-hover);
  border-radius: var(--dropdown-menu-item-border-radius-selected-hover);
}

::slotted(.dropdown-menu-item.selected-item.focus-visible) {
  background-color: var(
    --dropdown-menu-item-color-container-fill-selected-focus
  );
  color: var(--dropdown-menu-item-color-text-fill-selected-focus);
  border-radius: var(--dropdown-menu-item-border-radius-selected-focus);
  border: var(--dropdown-menu-item-border-style-selected-focus);
}

::slotted(.dropdown-menu-item.selected-item.active) {
  background-color: var(
    --dropdown-menu-item-color-container-fill-selected-hover
  );
  color: var(--dropdown-menu-item-color-text-fill-selected-hover);
  border-radius: var(--dropdown-menu-item-border-radius-selected-hover);
  border: var(--dropdown-menu-item-border-style-selected-hover);
}

/* disabled state */

.dropdown[disabled] {
  color: var(--dropdown-color-text-fill-helper-text-standard-disabled);
}

.dropdown[disabled] .place-holder {
  color: var(
    --dropdown-color-text-fill-label-standard-with-placeholder-disabled
  );
}

.dropdown[disabled] .dropdown-toggle {
  border-bottom: var(--dropdown-border-style-standard-disabled);
}

.outlined[disabled] .dropdown-toggle {
  border: var(--dropdown-border-style-outlined-disabled);
}

.dropdown[disabled] label {
  color: var(--dropdown-color-text-fill-helper-text-standard-disabled);
}

.dropdown[disabled] .helper-text {
  color: var(--dropdown-color-text-fill-helper-text-standard-disabled);
}

/* error state  */
.dropdown[error] .dropdown-toggle {
  border-bottom: var(--dropdown-border-style-outlined-error);
}

.dropdown[error].outlined .dropdown-toggle {
  border: var(--dropdown-border-style-outlined-error);
}

.dropdown[error] .label {
  color: var(--dropdown-color-text-fill-helper-text-standard-error);
}

.dropdown[error] .helper-text {
  color: var(--dropdown-color-text-fill-helper-text-standard-error);
}

.sm ::slotted(.dropdown-menu-item) {
  padding-top: var(--dropdown-spacing-ver-item-standard-sm);
  padding-bottom: var(--dropdown-spacing-ver-item-standard-sm);
}

.md ::slotted(.dropdown-menu-item) {
  padding-top: var(--dropdown-spacing-ver-item-standard-md);
  padding-bottom: var(--dropdown-spacing-ver-item-standard-md);
}

.lg ::slotted(.dropdown-menu-item) {
  padding-top: var(--dropdown-spacing-ver-item-standard-lg);
  padding-bottom: var(--dropdown-spacing-ver-item-standard-lg);
}

.outlined.sm .dropdown-toggle {
  padding-right: var(--dropdown-spacing-hor-padding-right-outlined-input-sm);
  padding-left: var(--dropdown-spacing-hor-padding-left-outlined-input-sm);
  padding-top: var(--dropdown-spacing-ver-padding-top-outlined-input-sm);
  padding-bottom: var(--dropdown-spacing-ver-padding-bottom-outlined-input-sm);
}

.outlined.md .dropdown-toggle {
  padding-right: var(--dropdown-spacing-hor-padding-right-outlined-input-md);
  padding-left: var(--dropdown-spacing-hor-padding-left-outlined-input-md);
  padding-top: var(--dropdown-spacing-ver-padding-top-outlined-input-md);
  padding-bottom: var(--dropdown-spacing-ver-padding-bottom-outlined-input-md);
}

.outlined.lg .dropdown-toggle {
  padding-right: var(--dropdown-spacing-hor-padding-right-outlined-input-lg);
  padding-left: var(--dropdown-spacing-hor-padding-left-outlined-input-lg);
  padding-top: var(--dropdown-spacing-ver-padding-top-outlined-input-lg);
  padding-bottom: var(--dropdown-spacing-ver-padding-bottom-outlined-input-lg);
}

.dropdown-toggle:hover {
  border-bottom: var(--dropdown-border-style-standard-hover);
}

.dropdown-toggle:focus-visible {
  border-bottom: var(--dropdown-border-style-standard-focus);
}

.dropdown-toggle:active {
  border-bottom: var(--dropdown-border-style-standard-active);
}

.outlined .dropdown-toggle:hover {
  border: var(--dropdown-border-style-outlined-hover);
}

.outlined .dropdown-toggle:focus-visible {
  border: var(--dropdown-border-style-outlined-focus);
}

.outlined .dropdown-toggle:active {
  border: var(--dropdown-border-style-outlined-active);
}

`;
export {
  e as default
};

import { css as t } from "lit";
const e = t`
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

/* Padding based on size */
:host([size="sm"]) {
  padding: var(--full-width-content-spacing-ver-item-text-sm);
}

:host([size="lg"]) {
  padding: var(--full-width-content-spacing-ver-item-container-lg);
}
/* Alignment */
:host([alignment="left"]) {
  --content-align: flex-start;
}

:host([alignment="center"]) {
  --content-align: center;
}

:host([alignment="right"]) {
  --content-align: flex-end;
}

/* Text alignment based on alignment property */
.content {
  text-align: var(--content-align);
  justify-content: var(--content-align);
  display: flex;
  flex-direction: var(--content-flex-direction);
}

/* Spacing between sections */
::slotted([slot="heading"]) {
  margin-bottom: var(--full-width-content-spacing-ver-item-text-sm);
}

::slotted([slot="body"]) {
  margin-bottom: var(--full-width-content-spacing-ver-item-container-sm);
}

:host([contentLayout="row"]) .content {
  align-items: center;
}

:host([contentLayout="row"]) ::slotted([slot="heading"]) {
  margin-bottom: 0;
}

:host([contentLayout="row"]) ::slotted([slot="body"]) {
  margin-bottom: 0;
  max-width: 500px;
}

::slotted([slot="button-group"]) {
  display: flex;
  justify-content: var(--content-align, center);
}

`;
export {
  e as default
};

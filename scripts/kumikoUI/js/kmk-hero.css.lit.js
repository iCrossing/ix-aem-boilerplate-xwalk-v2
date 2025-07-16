import { css as t } from "lit";
const n = t`
:host {
  display: block;
  width: 100%;
  height: 100%;
}

.dividerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.divider {
  border: none;
  flex-grow: 1;
}

.vertical {
  width: 0;
  height: 100%;
}

.horizontal {
  width: 100%;
  height: 0;
}

.container.full-width {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}

.container.full-width .gradient-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    #000 55%,
    rgba(0, 0, 0, 0.5) 62%,
    rgba(0, 0, 0, 0) 69%
  );
  z-index: 1;
}

.container.full-width .image {
  position: relative;
  top: -57px;
}

.container.full-width .content {
  padding: var(--hero-module-spacing-ver-padding-full-width-container-top-sm)
    var(--hero-module-spacing-hor-padding-full-width-container-right-sm)
    var(--hero-module-spacing-ver-padding-full-width-container-bottom-sm)
    var(--hero-module-spacing-hor-padding-full-width-container-left-sm);
  color: white;
  z-index: 1;
}

.container.full-width .button-group {
  display: flex;
  flex-direction: column;
}

.container.full-width kmk-button {
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .container.full-width {
    width: 100%;
  }

  .container.full-width .gradient-wrapper::before {
    background: none;
    z-index: 0;
  }

  .container.full-width .image {
    position: inherit;
  }

  .container.full-width .content {
    position: absolute;
    background: none;
    top: 10%;
    width: 352px;
    padding: var(--hero-module-spacing-ver-padding-full-width-container-top-md)
      var(--hero-module-spacing-hor-padding-full-width-container-right-md)
      var(--hero-module-spacing-ver-padding-full-width-container-bottom-md)
      var(--hero-module-spacing-hor-padding-full-width-container-left-md);
  }

  .container.full-width .button-group {
    flex-direction: row;
  }

  .container.full-width kmk-button {
    margin: 0 5px;
  }
}

@media (min-width: 1024px) {
  .container.full-width {
    width: 100%;
  }

  .container.full-width .content {
    position: absolute;
    background: none;
    top: 10%;
    width: 526px;
    padding: var(--hero-module-spacing-ver-padding-full-width-container-top-lg)
      var(--hero-module-spacing-hor-padding-full-width-container-right-lg)
      var(--hero-module-spacing-ver-padding-full-width-container-bottom-lg)
      var(--hero-module-spacing-hor-padding-full-width-container-left-lg);
  }

  .container.full-width .button-group {
    flex-direction: row;
  }

  .container.full-width kmk-button {
    margin: 0 5px;
  }
}

.container.fifty-fifty,
.container.fifty-fifty-V2 {
  display: flex;
  flex-direction: column;
  position: relative;
}

.container.fifty-fifty .content,
.container.fifty-fifty-V2 .content {
  padding: var(--hero-module-spacing-ver-padding-fifty-fifty-content-top-sm)
    var(--hero-module-spacing-hor-padding-fifty-fifty-content-right-sm)
    var(--hero-module-spacing-ver-padding-fifty-fifty-content-bottom-sm)
    var(--hero-module-spacing-hor-padding-fifty-fifty-content-left-sm);
  color: black;
  background: none;
  width: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;
}

.container.fifty-fifty .button-group,
.container.fifty-fifty-V2 .button-group {
  display: flex;
  flex-direction: column;
}

.container.fifty-fifty kmk-button,
.container.fifty-fifty-V2 kmk-button {
  margin-bottom: 10px;
}

::slotted([slot="body"]) {
  margin: var(--hero-module-spacing-ver-item-full-width-content-sm) 0;
}

::slotted([slot="button-group"]) {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

@media (min-width: 768px) {
  .container.fifty-fifty,
  .container.fifty-fifty-V2 {
    flex-direction: column;
  }

  .container.fifty-fifty .content,
  .container.fifty-fifty-V2 .content {
    position: relative;
    width: 100%;
    padding: var(--hero-module-spacing-ver-padding-fifty-fifty-content-top-md)
      var(--hero-module-spacing-hor-padding-fifty-fifty-content-right-md)
      var(--hero-module-spacing-ver-padding-fifty-fifty-content-bottom-md)
      var(--hero-module-spacing-hor-padding-fifty-fifty-content-left-md);
    color: black;
  }

  .container.fifty-fifty .button-group,
  .container.fifty-fifty-V2 .button-group {
    flex-direction: row;
  }

  ::slotted([slot="button-group"]) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }
}

@media (min-width: 1440px) {
  .container.fifty-fifty {
    flex-direction: row;
    align-items: center;
  }

  ::slotted([slot="body"]) {
    margin: var(--hero-module-spacing-ver-item-full-width-content-lg) 0;
  }

  .container.fifty-fifty-V2 {
    flex-direction: row-reverse;
    align-items: center;
  }

  .container.fifty-fifty kmk-responsive-image,
  .container.fifty-fifty-V2 kmk-responsive-image {
    width: 50%;
    border-radius: var(--hero-module-border-radius-fifty-fifty-media-lg);
    overflow: hidden;
  }

  .container.fifty-fifty .content,
  .container.fifty-fifty-V2 .content {
    width: 50%;
    padding: var(--hero-module-spacing-ver-padding-fifty-fifty-content-top-lg)
      var(--hero-module-spacing-hor-padding-fifty-fifty-content-right-lg)
      var(--hero-module-spacing-ver-padding-fifty-fifty-content-bottom-lg)
      var(--hero-module-spacing-hor-padding-fifty-fifty-content-left-lg);
    color: black;
    margin: var(--hero-module-spacing-hor-item-fifty-fifty-container-lg);
  }

  .container.fifty-fifty kmk-button,
  .container.fifty-fifty-V2 kmk-button {
    margin: 0 10px;
  }
}

`;
export {
  n as default
};

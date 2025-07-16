import { css as r } from "lit";
const a = r`
:host {
  display: block;
}
svg {
  width: 100%;
  height: auto;
}
.kmk-logo {
  padding-top: var(--logo-spacing-ver-padding-top);
  padding-bottom: var(--logo-spacing-ver-padding-bottom);
  padding-left: var(--logo-spacing-hor-padding-left);
  padding-right: var(--logo-spacing-hor-padding-right);
  border: var(--logo-border-style-focus);
  border-color: transparent;
}
.kmk-logo:has(a) {
  padding: 0;
  a {
    display: block;
    padding-top: var(--logo-spacing-ver-padding-top);
    padding-bottom: var(--logo-spacing-ver-padding-bottom);
    padding-left: var(--logo-spacing-hor-padding-left);
    padding-right: var(--logo-spacing-hor-padding-right);
    border: var(--logo-border-style-focus);
    border-color: transparent;
    &:focus {
      outline: none;
      border-radius: var(--logo-border-radius-focus);
      border: var(--logo-border-style-focus);
    }
  }
}
.brand-firestone {
  &.color-default {
    .primary {
      fill: var(--color-red-450);
    }
  }
  &.color-white {
    .primary {
      fill: var(--color-gray-0);
    }
  }
  &.color-black {
    .primary {
      fill: var(--color-gray-1000);
    }
  }
}
.brand-bridgestone,
.brand-bridgestone-with-tagline {
  &.color-default {
    .primary {
      fill: var(--color-red-450);
    }
    .neutral {
      fill: var(--color-gray-1000);
    }
  }
  &.color-white {
    .primary {
      fill: var(--color-gray-0);
    }
    .neutral {
      fill: var(--color-gray-0);
    }
  }
  &.color-black {
    .primary {
      fill: var(--color-gray-1000);
    }
    .neutral {
      fill: var(--color-gray-1000);
    }
  }
}
`;
export {
  a as default
};

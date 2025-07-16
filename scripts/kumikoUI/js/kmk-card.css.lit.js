import { css as r } from "lit";
const c = r`
a {
  text-decoration: none;
  color: inherit;
  outline: none;
  display: inline-block;
  overflow: hidden;
}

.kmk-card {
  overflow: hidden;
  border-radius: var(--card-basic-border-radius-top-left) 
  var(--card-basic-border-radius-top-right) 
  var(--card-basic-border-radius-bottom-right) 
  var(--card-basic-border-radius-bottom-left);

  &.background-fill-1 {
    background-color: var(--card-basic-color-container-fill-default-1);
    border: var(--card-basic-border-style-default-1);
    .heading {
      --kmk-text-color: var(--card-basic-color-text-fill-title-default-1);
    }
    .body-copy {
      --kmk-text-color: var(--card-basic-color-text-fill-description-default-1);
    }
  }
  &.background-fill-2 {
    background-color: var(--card-basic-color-container-fill-default-2);
    border: var(--card-basic-border-style-default-2);
    .body-copy {
      --kmk-text-color: var(--card-basic-color-text-fill-description-default-2);
    }
    .heading {
      --kmk-text-color: var(--card-basic-color-text-fill-title-default-2);
    }
  }
}

/* Accesibility states for clickable card */
a:hover .kmk-card {
  &.background-fill-1 {
    background-color: var(--card-basic-color-container-fill-hover-1);
    border: var(--card-basic-border-style-hover-1);
    .heading {
      --kmk-text-color: var(--card-basic-color-text-fill-title-hover-1);
    }
    .body-copy {
      --kmk-text-color: var(--card-basic-color-text-fill-description-hover-1);
    }
  }
  &.background-fill-2 {
    background-color: var(--card-basic-color-container-fill-hover-2);
    border: var(--card-basic-border-style-hover-2);
    .heading {
      --kmk-text-color: var(--card-basic-color-text-fill-title-hover-2);
    }
    .body-copy {
      --kmk-text-color: var(--card-basic-color-text-fill-description-hover-2);
    }
  }
}
a:focus-visible .kmk-card {
  &.background-fill-1 {
    background-color: var(--card-basic-color-container-fill-focus-1);
    border: var(--card-basic-border-style-focus-1);
    .heading {
      --kmk-text-color: var(--card-basic-color-text-fill-title-focus-1);
    }
    .body-copy {
      --kmk-text-color: var(--card-basic-color-text-fill-description-focus-1);
    }
  }
  &.background-fill-2 {
    background-color: var(--card-basic-color-container-fill-focus-2);
    border: var(--card-basic-border-style-focus-2);
    .heading {
      --kmk-text-color: var(--card-basic-color-text-fill-title-focus-2);
    }
    .body-copy {
      --kmk-text-color: var(--card-basic-color-text-fill-description-focus-2);
    }
  }
}
`;
export {
  c as default
};

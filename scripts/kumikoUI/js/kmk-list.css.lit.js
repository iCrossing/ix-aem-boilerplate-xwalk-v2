import { css as t } from "lit";
const i = t`
kmk-list {
  ul,
  ol {
    margin: 0 0 0 10px;
  }
  ol {
    padding-left: var(--list-text-spacing-hor-padding-left-ordered-level1);
    padding-right: var(--list-text-spacing-hor-padding-right-ordered-level1);
    padding-top: var(--list-text-spacing-ver-padding-top-ordered-level1);
    padding-bottom: var(--list-text-spacing-ver-padding-bottom-ordered-level1);
    ol,
    ul {
      padding-left: var(--list-text-spacing-hor-padding-left-ordered-level2);
      padding-right: var(--list-text-spacing-hor-padding-right-ordered-level2);
      padding-top: var(--list-text-spacing-ver-padding-top-ordered-level2);
      padding-bottom: var(
        --list-text-spacing-ver-padding-bottom-ordered-level2
      );
    }
    /* this is not working as expected  */
    li::marker {
      margin-right: var(--list-item-spacing-ver-item-ordered);
    }
  }

  ul {
    padding-left: var(--list-text-spacing-hor-padding-left-unordered-level1);
    padding-right: var(--list-text-spacing-hor-padding-right-unordered-level1);
    padding-top: var(--list-text-spacing-ver-padding-top-unordered-level1);
    padding-bottom: var(
      --list-text-spacing-ver-padding-bottom-unordered-level1
    );
    ul,
    ol {
      padding-left: var(--list-text-spacing-hor-padding-left-unordered-level2);
      padding-right: var(
        --list-text-spacing-hor-padding-right-unordered-level2
      );
      padding-top: var(--list-text-spacing-ver-padding-top-unordered-level2);
      padding-bottom: var(
        --list-text-spacing-ver-padding-bottom-unordered-level2
      );
    }
    /* this is not working as expected  */
    li::marker {
      margin-right: var(--list-item-spacing-ver-item-unordered);
    }
  }

  li::marker {
    font-family: var(--fonts-body-ui-md1-font-family);
    font-weight: var(--fonts-body-ui-md1-font-weight);
  }

  &[spacing="sm"] {
    li {
      margin-bottom: var(--list-spacing-ver-item-sm);
    }
  }

  &[spacing="md"] {
    li {
      margin-bottom: var(--list-spacing-ver-item-md);
    }
  }

  &[spacing="lg"] {
    li {
      margin-bottom: var(--list-spacing-ver-item-lg);
    }
  }

  ul.dashed {
    list-style-type: none;
    & > li {
      list-style-type: "- ";
    }
  }

  ol .dashed {
    position: relative;
    right: 30px;
  }

  ul.none {
    list-style-type: none;
  }
}

`;
export {
  i as default
};

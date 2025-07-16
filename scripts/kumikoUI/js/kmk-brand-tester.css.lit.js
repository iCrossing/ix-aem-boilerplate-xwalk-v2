import { css as r } from "lit";
const a = r`
.brand-tester {
  background-color: var(--color-container-fill-3);
  padding: var(--spacing-sm2);
}

.brand-tester {
  h1 {
    color: var(--color-secondary-11);
    font-size: var(--font-size-48px);
    background-color: var(--tags-color-container-fill-new);
  }
  button {
    background-color: var(--color-primary-5);
    color: var(--color-gray-0);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: var(--color-primary-6);
    }
  }
  p {
    font-size: var(--font-size-36px);
    line-height: var(--line-heights-120);
    margin: 16px 0;
    color: var(--color-secondary-12);
  }
}
`;
export {
  a as default
};

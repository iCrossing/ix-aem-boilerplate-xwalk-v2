import { css as t } from "lit";
const e = t`
:host {
  width: 100%;
}
iframe {
  width: 100%;
}

.aspect-ratio-1-1 {
  iframe {
    aspect-ratio: 1 / 1;
  }
}

.aspect-ratio-16-9 {
  iframe {
    aspect-ratio: 16 / 9;
  }
}

.aspect-ratio-21-9 {
  iframe {
    aspect-ratio: 21 / 9;
  }
}

.aspect-ratio-9-16 {
  iframe {
    aspect-ratio: 9 / 16;
  }
}
`;
export {
  e as default
};

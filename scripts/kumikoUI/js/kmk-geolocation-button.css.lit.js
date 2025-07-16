import { css as n } from "lit";
const o = n`
kmk-geolocation-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

kmk-link {
  display: inline-flex;
  align-items: center;
}

kmk-geolocation-button kmk-link .left-icon {
  margin-right: 8px;
}

.coordinates {
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  color: red;
  gap: 10px;
  p {
    margin: 0;
  }
}

`;
export {
  o as default
};

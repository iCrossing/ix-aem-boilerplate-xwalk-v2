import { css as t } from "lit";
const i = t`
.tab-group {
  display: flex;
}
.tabs {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}
.position-top {
  flex-direction: column;
  .tabs {
    flex-direction: row;
  }
}
.position-left {
  flex-direction: row;
  .tabs {
    flex-direction: column;
    align-items: flex-end;
    width: 20%;
  }
  .panels {
    width: 80%;
  }
}
.position-right {
  flex-direction: row-reverse;
  .tabs {
    flex-direction: column;
    align-items: flex-start;
    width: 20%;
  }
  .panels {
    width: 80%;
  }
}

`;
export {
  i as default
};

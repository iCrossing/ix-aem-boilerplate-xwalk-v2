import { css as t } from "lit";
const r = t`
.kmk-carousel {
  position: relative;
}
.kmk-carousel-container {
  position: relative;
}
.swiper-controls {
  display: flex;
  align-items: center;
}

.kmk-carousel:not(.alignment-default) swiper-container::part(pagination) {
  display: none;
}

.cta {
  display: flex;
  justify-content: center;
}

.spacing-sm {
  .heading,
  .swiper-container,
  .swiper-controls,
  .cta {
    margin-bottom: var(--carousel-spacing-ver-item-sm);
  }
  .swiper-controls {
    margin-left: var(--carousel-spacing-hor-item-controls-left-sm);
    gap: var(--carousel-spacing-hor-item-controls-center-sm);
    margin-right: var(--carousel-spacing-hor-item-controls-right-sm);
  }
  ::part(wrapper) {
    margin-bottom: var(--carousel-spacing-ver-item-sm);
  }
}

.spacing-lg {
  .heading,
  .swiper-container,
  .swiper-controls,
  .cta {
    margin-bottom: var(--carousel-spacing-ver-item-lg);
  }
  .swiper-controls {
    margin-left: var(--carousel-spacing-hor-item-controls-left-lg);
    gap: var(--carousel-spacing-hor-item-controls-center-lg);
    margin-right: var(--carousel-spacing-hor-item-controls-right-lg);
  }
}

.alignment-default {
  .swiper-controls {
    justify-content: space-between;
    position: absolute;
    margin: 0 4px 0;
    width: calc(100% - 8px);
    top: 50%;
    z-index: 1;
  }
  .swiper-pagination {
    display: none;
  }
  ::part(wrapper) {
    margin-bottom: var(--carousel-spacing-ver-item-lg);
  }
  swiper-container::part(pagination) {
    position: relative;
    bottom: 0;
  }
  .swiper-controls {
    margin: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .swiper-prev-button,
  .swiper-next-button {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: var(--color-gray-0);
  }
  .swiper-prev-button {
    left: 0;
    padding-right: var(--spacing-24px);
  }
  .swiper-next-button {
    right: 0;
    padding-left: var(--spacing-24px);
  }
}
.alignment-left {
  .swiper-controls {
    justify-content: flex-start;
  }
}
.alignment-right {
  .swiper-controls {
    justify-content: flex-end;
  }
}
.alignment-center {
  .swiper-controls {
    justify-content: center;
  }
}


`;
export {
  r as default
};

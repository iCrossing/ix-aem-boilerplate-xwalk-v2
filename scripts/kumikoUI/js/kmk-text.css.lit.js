import { css as t } from "lit";
const e = t`
.kmk-text {
  color: var(--kmk-text-color, currentColor);
  display: block;
  width: 100%;
  ::slotted(*.font-display-sm) {
      font-weight: var(--fonts-display-sm-font-weight);
      font-size: var(--fonts-display-sm-font-size);
      line-height: var(--fonts-display-sm-line-height);
      font-family: var(--font-families-primary);
      letter-spacing: var(--fonts-display-sm-letter-spacing);
      margin: var(--fonts-display-sm-margin-spacing) 0;
      text-indent: var(--fonts-display-sm-text-indent);
      text-transform: var(--fonts-display-sm-text-transform);
      text-decoration: var(--fonts-display-sm-text-decoration);
  }

  ::slotted(*.font-display-md) {
    font-weight: var(--fonts-display-md-font-weight);
    font-size: var(--fonts-display-md-font-size);
    line-height: var(--fonts-display-md-line-height);
    font-family: var(--font-families-primary);
    letter-spacing: var(--fonts-display-md-letter-spacing);
    margin: var(--fonts-display-md-margin-spacing) 0;
    text-indent: var(--fonts-display-md-text-indent);
    text-transform: var(--fonts-display-md-text-transform);
    text-decoration: var(--fonts-display-md-text-decoration);
  }

  ::slotted(*.font-display-lg) {
    font-weight: var(--fonts-display-lg-font-weight);
    font-size: var(--fonts-display-lg-font-size);
    line-height: var(--fonts-display-lg-line-height);
    font-family: var(--font-families-primary);
    letter-spacing: var(--fonts-display-lg-letter-spacing);
    margin: var(--fonts-display-lg-margin-spacing) 0;
    text-indent: var(--fonts-display-lg-text-indent);
    text-transform: var(--fonts-display-lg-text-transform);
    text-decoration: var(--fonts-display-lg-text-decoration);
  
  }
  ::slotted(h1),
  ::slotted(*.font-heading-h1) {
    font-weight: var(--fonts-heading-mobile-h1-font-weight);
    font-size: var(--fonts-heading-mobile-h1-font-size);
    line-height: var(--fonts-heading-mobile-h1-line-height);
    font-family: var(--fonts-heading-mobile-h1-font-family);
    letter-spacing: var(--fonts-heading-mobile-h1-letter-spacing);
    margin: var(--fonts-heading-mobile-h1-margin-spacing) 0;
    text-indent: var(--fonts-heading-mobile-h1-text-indent);
    text-transform: var(--fonts-heading-mobile-h1-text-transform);
    text-decoration: var(--fonts-heading-mobile-h1-text-decoration);
    @media (min-width: 768px) {
      font-weight: var(--fonts-heading-desktop-h1-font-weight);
      font-size: var(--fonts-heading-desktop-h1-font-size);
      line-height: var(--fonts-heading-desktop-h1-line-height);
      font-family: var(--fonts-heading-desktop-h1-font-family);
      letter-spacing: var(--fonts-heading-desktop-h1-letter-spacing);
      margin: var(--fonts-heading-desktop-h1-margin-spacing) 0;
      text-indent: var(--fonts-heading-desktop-h1-text-indent);
      text-transform: var(--fonts-heading-desktop-h1-text-transform);
      text-decoration: var(--fonts-heading-desktop-h1-text-decoration);
    }
  }
  ::slotted(h2),
  ::slotted(*.font-heading-h2) {
    font-weight: var(--fonts-heading-mobile-h2-font-weight);
    font-size: var(--fonts-heading-mobile-h2-font-size);
    line-height: var(--fonts-heading-mobile-h2-line-height);
    font-family: var(--fonts-heading-mobile-h2-font-family);
    letter-spacing: var(--fonts-heading-mobile-h2-letter-spacing);
    margin: var(--fonts-heading-mobile-h2-margin-spacing) 0;
    text-indent: var(--fonts-heading-mobile-h2-text-indent);
    text-transform: var(--fonts-heading-mobile-h2-text-transform);
    text-decoration: var(--fonts-heading-mobile-h2-text-decoration);
    @media (min-width: 768px) {
      font-weight: var(--fonts-heading-desktop-h2-font-weight);
      font-size: var(--fonts-heading-desktop-h2-font-size);
      line-height: var(--fonts-heading-desktop-h2-line-height);
      font-family: var(--fonts-heading-desktop-h2-font-family);
      letter-spacing: var(--fonts-heading-desktop-h2-letter-spacing);
      margin: var(--fonts-heading-desktop-h2-margin-spacing) 0;
      text-indent: var(--fonts-heading-desktop-h2-text-indent);
      text-transform: var(--fonts-heading-desktop-h2-text-transform);
      text-decoration: var(--fonts-heading-desktop-h2-text-decoration);
      
    }
  }
  ::slotted(h3),
  ::slotted(*.font-heading-h3) {
    font-weight: var(--fonts-heading-mobile-h3-font-weight);
    font-size: var(--fonts-heading-mobile-h3-font-size);
    line-height: var(--fonts-heading-mobile-h3-line-height);
    font-family: var(--fonts-heading-mobile-h3-font-family);
    letter-spacing: var(--fonts-heading-mobile-h3-letter-spacing);
    margin: var(--fonts-heading-mobile-h3-margin-spacing) 0;
    text-indent: var(--fonts-heading-mobile-h3-text-indent);
    text-transform: var(--fonts-heading-mobile-h3-text-transform);
    text-decoration: var(--fonts-heading-mobile-h3-text-decoration);
    @media (min-width: 768px) {
      font-weight: var(--fonts-heading-desktop-h3-font-weight);
      font-size: var(--fonts-heading-desktop-h3-font-size);
      line-height: var(--fonts-heading-desktop-h3-line-height);
      font-family: var(--fonts-heading-desktop-h3-font-family);
      letter-spacing: var(--fonts-heading-desktop-h3-letter-spacing);
      margin: var(--fonts-heading-desktop-h3-margin-spacing) 0;
      text-indent: var(--fonts-heading-desktop-h3-text-indent);
      text-transform: var(--fonts-heading-desktop-h3-text-transform);
      text-decoration: var(--fonts-heading-desktop-h3-text-decoration);
    }
  }
  ::slotted(h4),
  ::slotted(*.font-heading-h4) {
    font-weight: var(--fonts-heading-mobile-h4-font-weight);
    font-size: var(--fonts-heading-mobile-h4-font-size);
    line-height: var(--fonts-heading-mobile-h4-line-height);
    font-family: var(--fonts-heading-mobile-h4-font-family);
    letter-spacing: var(--fonts-heading-mobile-h4-letter-spacing);
    margin: var(--fonts-heading-mobile-h4-margin-spacing) 0;
    text-indent: var(--fonts-heading-mobile-h4-text-indent);
    text-transform: var(--fonts-heading-mobile-h4-text-transform);
    text-decoration: var(--fonts-heading-mobile-h4-text-decoration);
    @media (min-width: 768px) {
      font-weight: var(--fonts-heading-desktop-h4-font-weight);
      font-size: var(--fonts-heading-desktop-h4-font-size);
      line-height: var(--fonts-heading-desktop-h4-line-height);
      font-family: var(--fonts-heading-desktop-h4-font-family);
      letter-spacing: var(--fonts-heading-desktop-h4-letter-spacing);
      margin: var(--fonts-heading-desktop-h4-margin-spacing) 0;
      text-indent: var(--fonts-heading-desktop-h4-text-indent);
      text-transform: var(--fonts-heading-desktop-h4-text-transform);
      text-decoration: var(--fonts-heading-desktop-h4-text-decoration);
    }
  }
  ::slotted(h5),
  ::slotted(*.font-heading-h5) {
    font-weight: var(--fonts-heading-mobile-h5-font-weight);
    font-size: var(--fonts-heading-mobile-h5-font-size);
    line-height: var(--fonts-heading-mobile-h5-line-height);
    font-family: var(--fonts-heading-mobile-h5-font-family);
    letter-spacing: var(--fonts-heading-mobile-h5-letter-spacing);
    margin: var(--fonts-heading-mobile-h5-margin-spacing) 0;
    text-indent: var(--fonts-heading-mobile-h5-text-indent);
    text-transform: var(--fonts-heading-mobile-h5-text-transform);
    text-decoration: var(--fonts-heading-mobile-h5-text-decoration);
    @media (min-width: 768px) {
      font-weight: var(--fonts-heading-desktop-h5-font-weight);
      font-size: var(--fonts-heading-desktop-h5-font-size);
      line-height: var(--fonts-heading-desktop-h5-line-height);
      font-family: var(--fonts-heading-desktop-h5-font-family);
      letter-spacing: var(--fonts-heading-desktop-h5-letter-spacing);
      margin: var(--fonts-heading-desktop-h5-margin-spacing) 0;
      text-indent: var(--fonts-heading-desktop-h5-text-indent);
      text-transform: var(--fonts-heading-desktop-h5-text-transform);
      text-decoration: var(--fonts-heading-desktop-h5-text-decoration);
    }
  }
  ::slotted(h6),
  ::slotted(*.font-heading-h6) {
    font-weight: var(--fonts-heading-mobile-h6-font-weight);
    font-size: var(--fonts-heading-mobile-h6-font-size);
    line-height: var(--fonts-heading-mobile-h6-line-height);
    font-family: var(--fonts-heading-mobile-h6-font-family);
    letter-spacing: var(--fonts-heading-mobile-h6-letter-spacing);
    margin: var(--fonts-heading-mobile-h6-margin-spacing) 0;
    text-indent: var(--fonts-heading-mobile-h6-text-indent);
    text-transform: var(--fonts-heading-mobile-h6-text-transform);
    text-decoration: var(--fonts-heading-mobile-h6-text-decoration);
    @media (min-width: 768px) {
      font-weight: var(--fonts-heading-desktop-h6-font-weight);
      font-size: var(--fonts-heading-desktop-h6-font-size);
      line-height: var(--fonts-heading-desktop-h6-line-height);
      font-family: var(--fonts-heading-desktop-h6-font-family);
      letter-spacing: var(--fonts-heading-desktop-h6-letter-spacing);
      margin: var(--fonts-heading-desktop-h6-margin-spacing) 0;
      text-indent: var(--fonts-heading-desktop-h6-text-indent);
      text-transform: var(--fonts-heading-desktop-h6-text-transform);
      text-decoration: var(--fonts-heading-desktop-h6-text-decoration);
    }
  }
  ::slotted(p){
    /* default medium */
    font-weight: var(--fonts-body-ui-md1-font-weight);
    font-size: var(--fonts-body-ui-md1-font-size);
    line-height: var(--fonts-body-ui-md1-line-height);
    font-family: var(--fonts-body-ui-md1-font-family);
    letter-spacing: var(--fonts-body-ui-md1-letter-spacing);
    margin: var(--fonts-body-ui-md1-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-md1-text-indent);
    text-transform: var(--fonts-body-ui-md1-text-transform);
    text-decoration: var(--fonts-body-ui-md1-text-decoration);
  }
  ::slotted(*.font-body-ui-xl1) {
    font-weight: var(--fonts-body-ui-xl1-font-weight);
    font-size: var(--fonts-body-ui-xl1-font-size);
    line-height: var(--fonts-body-ui-xl1-line-height);
    font-family: var(--fonts-body-ui-xl1-font-family);
    letter-spacing: var(--fonts-body-ui-xl1-letter-spacing);
    margin: var(--fonts-body-ui-xl1-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-xl1-text-indent);
    text-transform: var(--fonts-body-ui-xl1-text-transform);
    text-decoration: var(--fonts-body-ui-xl1-text-decoration);
  }
  ::slotted(*.font-body-ui-xl2) {
    font-weight: var(--fonts-body-ui-xl2-font-weight);
    font-size: var(--fonts-body-ui-xl2-font-size);
    line-height: var(--fonts-body-ui-xl2-line-height);
    font-family: var(--fonts-body-ui-xl2-font-family);
    letter-spacing: var(--fonts-body-ui-xl2-letter-spacing);
    margin: var(--fonts-body-ui-xl2-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-xl2-text-indent);
    text-transform: var(--fonts-body-ui-xl2-text-transform);
    text-decoration: var(--fonts-body-ui-xl2-text-decoration);
  }
  ::slotted(*.font-body-ui-lg1) {
    font-weight: var(--fonts-body-ui-lg1-font-weight);
    font-size: var(--fonts-body-ui-lg1-font-size);
    line-height: var(--fonts-body-ui-lg1-line-height);
    font-family: var(--fonts-body-ui-lg1-font-family);
    letter-spacing: var(--fonts-body-ui-lg1-letter-spacing);
    margin: var(--fonts-body-ui-lg1-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-lg1-text-indent);
    text-transform: var(--fonts-body-ui-lg1-text-transform);
    text-decoration: var(--fonts-body-ui-lg1-text-decoration);
  }
  ::slotted(*.font-body-ui-lg2) {
    font-weight: var(--fonts-body-ui-lg2-font-weight);
    font-size: var(--fonts-body-ui-lg2-font-size);
    line-height: var(--fonts-body-ui-lg2-line-height);
    font-family: var(--fonts-body-ui-lg2-font-family);
    letter-spacing: var(--fonts-body-ui-lg2-letter-spacing);
    margin: var(--fonts-body-ui-lg2-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-lg2-text-indent);
    text-transform: var(--fonts-body-ui-lg2-text-transform);
    text-decoration: var(--fonts-body-ui-lg2-text-decoration);
  }
  ::slotted(*.font-body-ui-md1) {
    font-weight: var(--fonts-body-ui-md1-font-weight);
    font-size: var(--fonts-body-ui-md1-font-size);
    line-height: var(--fonts-body-ui-md1-line-height);
    font-family: var(--fonts-body-ui-md1-font-family);
    letter-spacing: var(--fonts-body-ui-md1-letter-spacing);
    margin: var(--fonts-body-ui-md1-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-md1-text-indent);
    text-transform: var(--fonts-body-ui-md1-text-transform);
    text-decoration: var(--fonts-body-ui-md1-text-decoration);
  }
  ::slotted(*.font-body-ui-md2) {
    font-weight: var(--fonts-body-ui-md2-font-weight);
    font-size: var(--fonts-body-ui-md2-font-size);
    line-height: var(--fonts-body-ui-md2-line-height);
    font-family: var(--fonts-body-ui-md2-font-family);
    letter-spacing: var(--fonts-body-ui-md2-letter-spacing);
    margin: var(--fonts-body-ui-md2-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-md2-text-indent);
    text-transform: var(--fonts-body-ui-md2-text-transform);
    text-decoration: var(--fonts-body-ui-md2-text-decoration);
  }
  ::slotted(*.font-body-ui-sm1) {
    font-weight: var(--fonts-body-ui-sm1-font-weight);
    font-size: var(--fonts-body-ui-sm1-font-size);
    line-height: var(--fonts-body-ui-sm1-line-height);
    font-family: var(--fonts-body-ui-sm1-font-family);
    letter-spacing: var(--fonts-body-ui-sm1-letter-spacing);
    margin: var(--fonts-body-ui-sm1-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-sm1-text-indent);
    text-transform: var(--fonts-body-ui-sm1-text-transform);
    text-decoration: var(--fonts-body-ui-sm1-text-decoration);
  }
  ::slotted(p.font-body-ui-sm2) {
    font-weight: var(--fonts-body-ui-sm2-font-weight);
    font-size: var(--fonts-body-ui-sm2-font-size);
    line-height: var(--fonts-body-ui-sm2-line-height);
    font-family: var(--fonts-body-ui-sm2-font-family);
    letter-spacing: var(--fonts-body-ui-sm2-letter-spacing);
    margin: var(--fonts-body-ui-sm2-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-sm2-text-indent);
    text-transform: var(--fonts-body-ui-sm2-text-transform);
    text-decoration: var(--fonts-body-ui-sm2-text-decoration);
  }
  ::slotted(*.font-body-ui-xs1) {
    font-weight: var(--fonts-body-ui-xs1-font-weight);
    font-size: var(--fonts-body-ui-xs1-font-size);
    line-height: var(--fonts-body-ui-xs1-line-height);
    font-family: var(--fonts-body-ui-xs1-font-family);
    letter-spacing: var(--fonts-body-ui-xs1-letter-spacing);
    margin: var(--fonts-body-ui-xs1-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-xs1-text-indent);
    text-transform: var(--fonts-body-ui-xs1-text-transform);
    text-decoration: var(--fonts-body-ui-xs1-text-decoration);
  }
  ::slotted(*.font-body-ui-xs2) {
    font-weight: var(--fonts-body-ui-xs2-font-weight);
    font-size: var(--fonts-body-ui-xs2-font-size);
    line-height: var(--fonts-body-ui-xs2-line-height);
    font-family: var(--fonts-body-ui-xs2-font-family);
    letter-spacing: var(--fonts-body-ui-xs2-letter-spacing);
    margin: var(--fonts-body-ui-xs2-margin-spacing) 0;
    text-indent: var(--fonts-body-ui-xs2-text-indent);
    text-transform: var(--fonts-body-ui-xs2-text-transform);
    text-decoration: var(--fonts-body-ui-xs2-text-decoration);
  }
  ::slotted(*.font-label-lg) {
    font-weight: var(--label-lg-font-weight);
    font-size: var(--label-lg-font-size);
    line-height: var(--label-lg-line-height);
    font-family: var(--label-lg-font-family);
    letter-spacing: var(--label-lg-letter-spacing);
    margin: var(--label-lg-margin-spacing) 0;
    text-indent: var(--label-lg-text-indent);
    text-transform: var(--label-lg-text-transform);
    text-decoration: var(--label-lg-text-decoration);
  }
  ::slotted(*.font-label-md) {
    font-weight: var(--label-md-font-weight);
    font-size: var(--label-md-font-size);
    line-height: var(--label-md-line-height);
    font-family: var(--label-md-font-family);
    letter-spacing: var(--label-md-letter-spacing);
    margin: var(--label-md-margin-spacing) 0;
    text-indent: var(--label-md-text-indent);
    text-transform: var(--label-md-text-transform);
    text-decoration: var(--label-md-text-decoration);
  }
  ::slotted(*.font-label-sm) {
    font-weight: var(--label-sm-font-weight);
    font-size: var(--label-sm-font-size);
    line-height: var(--label-sm-line-height);
    font-family: var(--label-sm-font-family);
    letter-spacing: var(--label-sm-letter-spacing);
    margin: var(--label-sm-margin-spacing) 0;
    text-indent: var(--label-sm-text-indent);
    text-transform: var(--label-sm-text-transform);
    text-decoration: var(--label-sm-text-decoration);
  }
  ::slotted(*.specs) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs3);
  }
}
`;
export {
  e as default
};

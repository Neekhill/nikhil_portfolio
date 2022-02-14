import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    }
  `;
};
const largeMobile = (props) => {
  return css`
    @media only screen and (max-width: 560px) {
      ${props}
    }
  `;
};

const tablet = (props) => {
  return css`
    @media only screen and (max-width: 821px) {
      ${props}
    }
  `;
};

const tabletPlus = (props) => {
  return css`
    @media only screen and (max-width: 990px) {
      ${props}
    }
  `;
};

const large = (props) => {
  return css`
    @media only screen and (max-width: 1090px) {
      ${props}
    }
  `;
};

export { mobile, largeMobile, tablet, tabletPlus, large };

import { css } from 'styled-components';
import text from './text';

const { font, size, weight, lineHeight, letterSpacing } = text;
const typography = css`
  font-family: ${font.body};
  font-weight: ${weight.regular};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  h1 {
    font-size: ${size.heading.mobile.h1}px;
  }
`;

export default typography;

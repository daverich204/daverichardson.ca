import styled, { css } from 'styled-components';

import { transition } from '../../static/Anim';
import {
  primaryColorDark,
  accentColorDark,
  primaryText,
} from '../../static/Colors';

function colorSwitch(index) {
  switch (index) {
    case 1:
      return primaryColorDark;
    case 2:
      return accentColorDark;
    case 3:
      return primaryText;
    case 4:
      return accentColorDark;
    case 5:
      return primaryText;
    case 6:
      return accentColorDark;  
    default:
      return 'transparent';
  }
}

const ShiftingBackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: transparent;

  transition: ${transition};
  ${props =>
    props.index &&
    css`
      background-color: ${colorSwitch(props.index)};
      opacity: 0.33;
    `};
`;

export default ShiftingBackgroundGradient;

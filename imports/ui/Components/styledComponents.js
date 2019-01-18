import styled from 'styled-components';

import { font_color_primary, 
  font_color_secondary,
  thin,
  light,
  regular,
  bold,
  black} from '../vars/vars';

export const Link = styled.a`
  color: ${font_color_secondary};
  font-weight: ${bold};
  text-decoration: none;
  cursor: pointer;
`;

export const CallToAction = styled.a`
  color: ${font_color_primary};
  font-weight: ${bold};
  border: 2px solid ${font_color_primary};
  padding: 10px;
  box-sizing: content-box;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
`;
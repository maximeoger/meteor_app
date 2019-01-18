import React from 'react';
import styled from 'styled-components';
import { card_bg, card_border } from '../../vars/vars';

const Card = styled.div`
  max-width: 1150px;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  margin-top: 15px;
  border: 1px solid ${card_border};
  background-color: ${card_bg};
  padding: 10px;
  border-radius: 4px;
`;

export default Card;
import React, { Fragment } from 'react';
import Wrapper from './Components/Wrapper';
import './reset.css';

const App = props => {
  return (
    <Wrapper>
       {props.content}
    </Wrapper>
  )
}

export default App;
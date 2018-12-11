import React, { Component } from 'react';

import Form from './Form';
import List from './List';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Form />
        <List />
      </div>
    );
  }
}
import React, { Component } from 'react';
import FormContainer from './Form/FormContainer';
import List from './List';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <FormContainer />
        <List />
      </div>
    );
  }
}
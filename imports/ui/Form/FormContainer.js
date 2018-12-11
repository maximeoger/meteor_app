import React, { Component } from 'react';
import Form from './Form';

class FormContainer extends Component {
  constructor(props){
    super(props)

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event){
    console.log(event.target.value)
  }

  render() {
    return (
      <Form handleSubmit={this.submitForm}/>
    )
  }
}

export default FormContainer;

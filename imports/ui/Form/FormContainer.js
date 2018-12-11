import React, { Component } from 'react';
import Form from './Form';
import Students from '../../db/Students';

class FormContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      lastname: "",
      firstname: "",
      github: "",
    }

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  submitForm(e){
    e.preventDefault();
    const { lastname, firstname, github } = this.state; 

    
    Students.insert({
      lastname,
      firstname,
      github
    })

    this.setState({
      lastname: "",
      firstname: "",
      github: "",
    })
  }

  render() {
    return (
      <Form 
        lastname={this.state.lastname}
        firstname={this.state.firstname}
        github={this.state.github}
        handleChange={this.handleChange}
        handleSubmit={this.submitForm}/>
    )
  }
}

export default FormContainer;

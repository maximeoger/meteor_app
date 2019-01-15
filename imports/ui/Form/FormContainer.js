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

  handleGithubInput = async e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value})
    if( value.length % 3 == 0 ) {
      await fetch(`https://api.github.com/search/users?q=${value}`)
              .then(response => response.json())
              .then(data => console.log(data))
    }
    

  }

  componentDidUpdate(){

    const { lastname, firstname, github } = this.state;

    const { student } = this.props;

    const allowUpdate = (lastname !== "" || firstname !== "" || github !== "") && student

    console.log(allowUpdate);

    if(allowUpdate){
      this.setState({
        lastname: student.lastname,
        firstname: student.firstname,
        github: student.github
      })
    }
  }

  submitForm(e){

    e.preventDefault();

    const { lastname, firstname, github } = this.state; 

    if(lastname === "" || firstname === "" || github === ""){
      alert('Merci de remplir tours les champs')
      
      return
    }

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
        handleSubmit={this.submitForm}
        handleGithubInput={this.handleGithubInput}
        />
    )
  }
}

export default FormContainer;

import React, { Component } from 'react';
import Form from './Form';
import Students from '../../db/Students';
import ChooseList from './ChooseList'

class FormContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      lastname: "",
      firstname: "",
      login: "",
      html_url: "",
      avatar_url: "",
      url: "",
      githubResults: {}
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

  handleGithubInput = async (e) => {

    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value})
    if( value.length % 3 == 0 ) {

      let response = await fetch(`https://api.github.com/search/users?q=${value}`);

      let data = await response.json();

      this.setState({
        githubResults: data
      })

    }
    
  }

  handleClickOnResult = (data) => {

    this.setState({
      login: data.login,
      html_url: data.html_url,
      avatar_url: data.avatar_url,
      url: data.url,
      githubResults: {}
    })

  }

  componentDidUpdate(){

    const { lastname, firstname, github } = this.state;

    const { student } = this.props;

    const allowUpdate = (lastname !== "" || firstname !== "" || github !== "") && student

    console.log(this.state);

    if(allowUpdate){
      this.setState({
        lastname: student.lastname,
        firstname: student.firstname,
        github: student.github,
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
    const {
      lastname,
      firstname,
      github,
      githubResults
    } = this.state
    return (
      <div>
        <Form 
          lastname={ lastname }
          firstname={ firstname }
          github={ github }
          handleChange={this.handleChange}
          handleSubmit={this.submitForm}
          handleGithubInput={this.handleGithubInput}
        >
        </Form>
        <ChooseList 
          handleClickOnResult={this.handleClickOnResult}
          githubResults={ githubResults }
        />
      </div>
    )
  }
}

export default FormContainer;

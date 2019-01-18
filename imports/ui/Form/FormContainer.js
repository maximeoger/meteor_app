import React, { Component } from 'react';
import Form from './Form';
import Students from '../../db/Students';
import ChooseList from './ChooseList'
import {Meteor} from 'meteor/meteor';

class FormContainer extends Component {
  constructor(props){
    super(props)

    this.initialState = {
      lastname: this.props.lastname ? this.props.lastname : "",
      firstname: this.props.firstname ? this.props.firstname : "",
      login: this.props.login ? this.props.login : "",
      html_url: this.props.html_url ? this.props.html_url : "",
      avatar_url: this.props.avatar_url ? this.props.avatar_url : "",
      url: this.props.url ? this.props.url : "",

      githubResults: {}
    }

    this.state = this.initialState;

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

      let requestConfig = {
        method: "GET",
        mode: 'cors',
      }

      let response = await fetch(`https://api.github.com/search/users?q=${value}`, requestConfig);

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

    if(allowUpdate){
      this.setState({
        lastname: student.lastname,
        firstname: student.firstname,
        github: student.github,
      })
    }
  }

  persistDataInDb = (data) => {
    
    const {userId} = this.props;

    const result = Meteor.call('students.updateStudent', userId, data);
    console.log("result : " , result)

  }

  submitForm(e){

    e.preventDefault();

    const { lastname, firstname, login,
    html_url,
    avatar_url,
    url } = this.state; 

    if(lastname === "" || firstname === ""|| login === "" || html_url === "" || avatar_url === "" || url === ""){
      alert('Merci de remplir tours les champs')
      
      return
    }

    if(this.props.update){
      this.persistDataInDb({
        lastname,
        firstname,
        html_url,
        avatar_url,
        url,
        login
      })
    }

    Students.insert({
      lastname,
      firstname,
      html_url,
      avatar_url,
      url,
      login
    })

    this.setState(this.initialState)
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

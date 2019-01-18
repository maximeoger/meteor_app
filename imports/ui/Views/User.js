import React, { Component } from 'react';
import Students from '../../db/Students.js';
import { withTracker } from 'meteor/react-meteor-data';
import FormContainer from '../Form/FormContainer.js';

class User extends Component {
  componentDidUpdate(){
    console.log('UPDATE')
  }
  render() {
    return (
      <FormContainer 
        student={this.props.student}/>
    )
  }
}

export default withTracker( (props) => {
  return {
    student: Students.findOne(props.match.params.user)
  }
})(User);
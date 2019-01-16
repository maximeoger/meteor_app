import React, { Component, Fragment } from 'react';
import Link from '../Components/Link/Link';
import FormContainer from '../Form/FormContainer';
import Students from '../../db/Students';
import { withTracker } from 'meteor/react-meteor-data';

class UpdateUser extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { student } = this.props
    
    return (
      <Fragment>
        <Link url="/">Retour</Link>
        <header>
          <h1>Modifier un eleve</h1>
        </header>
        {
        student ?
        <FormContainer 
          lastname={student.lastname}
          firstname={student.firstname}
          login={student.login}
          html_url={student.html_url}
          avatar_url={student.avatar_url}
          url={student.url}
          />
          : <p>chargement...</p>
        }
        
      </Fragment>
    )
  }
}

export default withTracker( (props) => {
  return {
    student: Students.findOne({"_id": props.params.userId})
  }
})(UpdateUser);

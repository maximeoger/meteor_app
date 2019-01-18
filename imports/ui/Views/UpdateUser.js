import React, { Component, Fragment } from 'react';
import FormContainer from '../Form/FormContainer';
import Students from '../../db/Students';
import { withTracker } from 'meteor/react-meteor-data';
import {Link} from '../Components/styledComponents';

class UpdateUser extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { student, params } = this.props
    
    return (
      <Fragment>
        <Link url="/">Retour</Link>
        <header>
          <h1>Modifier un eleve</h1>
        </header>
        {
        student ?
        <FormContainer 
          update={true}
          userId={params.userId}
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

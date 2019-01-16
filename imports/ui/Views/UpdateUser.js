import React, { Component, Fragment } from 'react';
import Link from '../Components/Link/Link';
import FormContainer from '../Form/FormContainer';
import Students from '../../db/Students';

class UpdateUser extends Component {
  componentDidMount(){
    this.findStudent()
  }

  findStudent = async () => {

    const { params: { userId } } = this.props;
    console.log(typeof userId, userId)

    let data = await Students.findOne({"_id": userId});

    console.log(data)
  }

  render() {
    return (
      <Fragment>
        <Link url="/">Retour</Link>
        <header>
          <h1>Modifier un eleve</h1>
        </header>
        <FormContainer 
          lastname="coucou"/>
      </Fragment>
    )
  }
}

export default UpdateUser;

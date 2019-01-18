import React, {Fragment} from 'react'
import FormContainer from '../Form/FormContainer';
import {Link} from '../Components/styledComponents';

const AddUser = (props) => {
  
  return (
    <Fragment>
      <Link href="/">Retour a la home</Link>
      <header>
        <h1>Ajouter un eleve</h1>
      </header>
      <FormContainer
        insert={true}
        />
    </Fragment>
  )
}

export default AddUser
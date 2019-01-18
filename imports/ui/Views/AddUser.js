import React, {Fragment} from 'react'
import Link from '../Components/Link/Link'
import FormContainer from '../Form/FormContainer';

const AddUser = (props) => {
  
  return (
    <Fragment>
      <Link url="/">Retour a la home</Link>
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
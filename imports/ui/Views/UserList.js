import React from 'react';
import FormContainer from '../Form/FormContainer';
import ListContainer from '../ListContainer';
import { CallToAction } from '../Components/styledComponents';

const UserList = () => {
  return (
    <div className="container">
      <CallToAction href="/add-user">Ajouter un utilisateur</CallToAction>
      <ListContainer />
    </div>
  )
}

export default UserList;

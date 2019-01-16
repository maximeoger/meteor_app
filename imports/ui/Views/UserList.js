import React from 'react';
import FormContainer from '../Form/FormContainer';
import ListContainer from '../ListContainer';
import Link from '../Components/Link/Link';

const UserList = () => {
  return (
    <div className="container">
      <Link url="/add-user">Ajouter un utilisateur</Link>
      <ListContainer />
    </div>
  )
}

export default UserList;

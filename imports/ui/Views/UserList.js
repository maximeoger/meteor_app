import React from 'react';
import FormContainer from '../Form/FormContainer';
import List from '../List';

const UserList = () => {
  return (
    <div className="container">
      <a href="/add-user">Ajouter un utilisateur</a>
      <List />
    </div>
  )
}

export default UserList;

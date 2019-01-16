import React from 'react';
import FormContainer from '../Form/FormContainer';
import List from '../List';
import Link from '../Components/Link/Link';

const UserList = () => {
  return (
    <div className="container">
      <Link href="/add-user">Ajouter un utilisateur</Link>
      <List />
    </div>
  )
}

export default UserList;

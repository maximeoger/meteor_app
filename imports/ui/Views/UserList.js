import React from 'react';
import List from '../List';
import Link from '../Components/Link/Link';

const UserList = () => {
  return (
    <div className="container">
      <Link url="/add-user">Ajouter un utilisateur</Link>
      <List />
    </div>
  )
}

export default UserList;

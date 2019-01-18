import React, {Fragment} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Students from '../db/Students.js';
import Card from '../ui/Components/Card/Card';
import Avatar from './Components/Avatar';
import { CallToAction, Link } from './Components/styledComponents.js';

const List = ({ students, handleDelete }) => {
  
  if(students.length === 0){
    return( 
    <Fragment>
      <p>La liste est vide</p>
      <CallToAction href="/add-user">CLiquer pour ajouter un utilisateur</CallToAction>
    </Fragment>)
  }

  return (
    <Fragment>
      {students.map(item => 
             <Card key={item._id}> 

                <Avatar src={item.avatar_url}/>

                <div className="column">
                 {item.firstname} {item.lastname} 
                </div>

                <div className="column">
                  <Link href={item.html_url}>{item.login}</Link>
                </div>
                
                <div className="column">
                  <Link className="button" href={`/update-user/${item._id}`}>Modifier  </Link>
                  <Link className="button button-clear" href="#" onClick={ () => handleDelete( item._id )  }>Suprimer</Link>
                </div>
                
            </Card>
      )}
    </Fragment>
  )
}

export default withTracker( () => {
  return {
    students: Students.find({}).fetch()
  }
})(List);
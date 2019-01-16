import React, {Fragment} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Students from '../db/Students.js';
import Card from '../ui/Components/Card/Card';

const List = (props) => {

  if(props.students.length === 0){
    return( 
    <Fragment>
      <p>La liste est vide</p>
      <a href="/add-user">CLiquer pour ajouter un utilisateur</a>
    </Fragment>)
  }

  return (
    <Fragment>
      {props.students.map(item => 
             <Card key={item._id}> 

                <img src={item.avatar_url}/>

                <div className="column">
                 {item.firstname} {item.lastname} 
                </div>

                <div className="column">
                  <a href={item.html_url}>{item.login}</a>
                </div>
                
                <div className="column">
                  <a className="button" href={`/update-user/${item._id}`}>Modifier</a>
                  <a className="button button-clear" href="#">Suprimer</a>
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
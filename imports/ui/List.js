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

                <img width="50" src={item.avatar_url}/>

                <div className="column">
                 {item.firstname} {item.lastname} 
                </div>

                <div className="column">
                  <a href={item.html_url}>{item.login}</a>
                </div>
                
                <div className="column">
                  <a className="button" href={`/${item._id}`}>Modifier</a>
                  <a className="button button-clear" href="#" onClick={ id => props.handleDelete( id )  }>Suprimer</a>
                </div>
                
            </Card>
      )}
    </Fragment>
  )
}

export default withTracker( () => {
  return {
    students: Students.find({}).fetch(),
  }
})(List)

//<Link className="button" to={`/${item._id}`}>Modifier</Link>

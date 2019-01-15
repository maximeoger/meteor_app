import React, {Fragment} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Students from '../db/Students.js';
import Card from '../ui/Components/Card/Card';

const List = (props) => {
  return (
    <Fragment>
      {props.students.map(item => 
             <Card key={item._id}> 

                <div className="column">
                 {item.firstname} {item.lastname} 
                </div>

                <div className="column">
                  <a href={item.github}>{item.github}</a>
                </div>
                
                <div className="column">
                  <a className="button" href={`/${item._id}`}>Modifier</a>
                  <a className="button button-clear" href="#">Suprimer</a>
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

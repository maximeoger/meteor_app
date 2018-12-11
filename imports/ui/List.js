import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Students from '../db/Students.js';

const List = (props) => {

  return (
    <ul>
      {props.students.map(item => {
        return <li key={item._id} > {item.firstname} {item.lastname} <a href={item.github}>{item.github}</a></li>
      })}
    </ul>
  )
}

export default withTracker(() => {
  return {
    students: Students.find({}).fetch(),
  }
})(List);
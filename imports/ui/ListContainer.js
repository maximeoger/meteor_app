import React, { Component } from 'react'
import List from './List'
import Students from '../db/Students'

class ListContainer extends Component {

  handleDelete( id ) {
    Meteor.call('students.removeStudent', id,
    (err, res) => console.log(err, res)
    )
  }


  render() {
    return (
      <List handleDelete={ this.handleDelete }/>
    )
  }
}
export default ListContainer
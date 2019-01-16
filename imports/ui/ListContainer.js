import React, { Component } from 'react'
import List from './List'
import Students from '../db/Students'
class ListContainer extends Component {

  handleDelete( id ) {
    Students.remove( {"_id":  id })
  }


  render() {
    return (
      <List handleDelete={ this.handleDelete }/>
    )
  }
}
export default ListContainer
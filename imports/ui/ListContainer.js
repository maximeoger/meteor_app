import React, { Component } from 'react'
import List from './List'
import Students from '../db/Students'
class ListContainer extends Component {

  handleSubmit( id ) {
    Students.remove( {"_id":  item._id })
  }

  render() {
    return (
      <List />
    )
  }
}
export default ListContainer
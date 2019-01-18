import { Meteor } from 'meteor/meteor';
import Students from '../imports/db/Students';


Students.allow({
  'insert': () => true,
  'update': () => true,
  'remove': () => true
})
Meteor.methods({
  'students.updateStudent'(userId , newData) {
    console.log(userId)
    newData[_id] = userId
    Students.update(userId, {
      $set: newData
    })
  },
  'students.removeStudent'( id ) {
    Students.remove( {"_id":  id })
  }
})
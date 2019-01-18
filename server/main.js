import { Meteor } from 'meteor/meteor';
import Students from '../imports/db/Students';

Meteor.methods({
  'students.updateStudent'( userId , newData ) {
    Students.update(userId, {
      $set: newData
    })
  },
  'students.addStudent'(data) {
    
  }
})
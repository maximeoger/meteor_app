import { Meteor } from 'meteor/meteor';
import Students from '../imports/db/Students';


Students.allow({
  'insert': () => true,
  'update': () => true,
  'remove': () => true
})
Meteor.methods({
  'students.updateStudent'( userId , newData ) {
    Students.update(userId, {
      $set: newData
    })
  },
  'students.addStudent'(data) {
      Students.update(userId, {
        $set: data
      })
  },
  'students.removeStudent'(id) {
    Students.remove({'_id': id})
  }
})
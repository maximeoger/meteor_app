import { Meteor } from 'meteor/meteor';
import Students from '../imports/db/Students';

Meteor.startup(() => {
  if (Students.find().count() <= 0) {
    Students.insert({
      lastname: "Giselle",
      firstname: "Beyonce",
      github: "https://github.com/heticeric"
    })
  }
});

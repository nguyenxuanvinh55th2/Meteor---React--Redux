import {Meteor} from 'meteor/meteor';
import {Classes, UserClass, RolesInClass} from './Collections.js';
export const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.userId === args.id) {
        return Meteor.users.findOne(context.userId);
      }
    },
    users(root, args, context){
      return Meteor.users.find({}).fetch();
    },
    classes(root, args, context){
      console.log(Classes);
      return Classes.find({}).fetch();
    }
  },
  User: {
    studentInClasses(user) {
      let classIds = [];
      UserClass.find({userId: user._id, roleId: "578e2115dd53281c95f64c4d"}).forEach(function(row){
        classIds.push(row.classId);
      });
      return Classes.find({_id: {$in: classIds}}).fetch();
    }
  },
  Class: {
    students(root) {
      let userIds = [];
      UserClass.find({classId: root._id, roleId: "578e2115dd53281c95f64c4d"}).forEach(function(row){
         userIds.push(row.userId);
      });
      return Meteor.users.find({_id: {$in: userIds}}).fetch();
    }
  }
};

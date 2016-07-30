import { Meteor } from 'meteor/meteor';
import '../imports/api/task.js';
import '../imports/api/Collections.js';
import { createApolloServer } from 'meteor/apollo';

import schema from '../imports/api/schema';
import {resolvers} from '../imports/api/resolvers';



import {Email} from 'meteor/email'
createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
  resolvers,
});

process.env.MAIL_URL = 'smtp://nguyenxuanvinh55th2@gmail.com:7955132350@smtp.gmail.com:465/';



Meteor.methods({
  sendEmail:function(text){
    // SSR.compileTemplate('emailText', '<p style="color:red">Hello {{username}}</p> <a href=http://localhost:3000/formAdd>ddfd</a>');
    // var html = SSR.render("emailText", {username: text});

    SSR.compileTemplate('emailText',Assets.getText("mail.html") );
    var html = SSR.render("emailText");

    Email.send({
         to:'nguyenxuanvinhict@gmail.com',
         from: 'nguyenxuanvinh55th2@gmail.com',
         subject: "this is test email one",
         html:html
       });
  }
});

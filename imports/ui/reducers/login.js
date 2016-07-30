import {Meteor} from 'meteor/meteor'
const login = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN_FACE':
    console.log("ok");

    Meteor.loginWithFacebook({
    requestPermissions: ['user_friends', 'public_profile', 'email']
  }, (err) => {
    if (err) {
      // handle error
    } else {
      // successful login!
    }
  });


  case 'SEND_EMAIL':
      Meteor.call("sendEmail",action.text, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
          alert("the email sended");
        }
      });
    default:
      return state
  }
}

export default login

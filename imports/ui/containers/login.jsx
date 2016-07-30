import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { loginFace } from '../actions'
// import {browserHistory,Link} from 'react-router'
import {Meteor} from 'meteor/meteor'

class Login extends Component {

  test(){
    console.log("loginWithFacebook");

  }
  render(){
    return (
      <div>
          <button onClick={e =>{this.props.onlogin()}}>login facebook</button>
      </div>
    )
  }
}
Login.propTypes = {
  onlogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onlogin: () => {
      dispatch(loginFace())
    }
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default Login

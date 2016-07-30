import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {sendToEmail} from '../actions';

import sendEmail from '../components/sendEmail.jsx';

const mapStateToProps =(state) => {
  return {
    state
  }
}

const mapDispathToProps = (dispatch) => {
  return{
    onsendEmail : (text) =>{
      dispatch(sendToEmail(text))
    }
  }
}

const SendEmail = connect(
  mapStateToProps,
  mapDispathToProps
)(sendEmail)
export default SendEmail

import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'

class sendEmail extends Component {

  render(){
    return (
      // <div>
      //     <button onClick={this.props.onsendEmail("vinh dep trai")}>sent Email</button>
      // </div>
      <div>


        <form onSubmit={e => {
          e.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          this.props.onsendEmail(this.input.value)
          this.input.value = ''
        }}>
          <input ref={node => {
            this.input = node
          }} />
        <button type="submit">
          ok send Email
          </button>
        </form>
      </div>
    )
  }
}
sendEmail.propTypes = {
  onsendEmail: PropTypes.func.isRequired,
};


export default sendEmail

import React, { Component, PropTypes } from 'react'
import './tam.less'
export default class Todo extends Component{
  render(){
    return(
      <div>
        <li onClick={this.props.onUp} >
          {this.props.task.text}
        </li>
          <button  className="btn btn-info "
          onClick={this.props.onDel} style={{ color: 'red'}}>
          X</button>
      </div>

    )
  }
}

Todo.propTypes = {
  task: PropTypes.object.isRequired,
  onDel:PropTypes.func.isRequired,
  onUp: PropTypes.func.isRequired
}

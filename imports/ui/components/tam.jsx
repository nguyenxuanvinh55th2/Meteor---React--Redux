import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

class Tam extends Component {

  render(){
    return (
      <div>
        <p>{this.props.params.id}</p>
      <p>vinh dep trai</p>
      </div>
    )
  }
}
export default Tam

import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

class Tam extends Component {

  render(){
    return (
      <div>
        <p>{this.props.params.id}</p>
      <p> this is page Tam</p>
      <Link to ="/">Go to Home</Link>
      </div>
    )
  }
}
export default Tam

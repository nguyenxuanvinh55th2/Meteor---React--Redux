import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {browserHistory,Link} from 'react-router'
class AddTodo extends Component {

  addclick()
  {

    browserHistory.push("/");
  }
  render(){
    return (
      <div>

        <form onSubmit={e => {
          e.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          this.props.onTodo(this.input.value)
          // this.addclick()
          browserHistory.push("/")
          this.input.value = ''
        }}>
          <input ref={node => {
            this.input = node
          }} />
        <button type="submit">
            Add Todo
          </button>
        </form>
        <Link to="/tam/10">Go to Tam</Link>
      </div>
    )
  }
}
AddTodo.propTypes = {
  onTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo)

export default AddTodo

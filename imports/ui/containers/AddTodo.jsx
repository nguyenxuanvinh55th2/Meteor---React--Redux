import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

  render(){
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          this.props.onTodo(this.input.value)
          this.input.value = ''
        }}>
          <input ref={node => {
            this.input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
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

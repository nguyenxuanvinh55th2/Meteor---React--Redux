import { Tasks } from '../../api/task.js';
const todos = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var task = {
        id: action.id,
        text: action.text
      };
      Tasks.insert(task);
      return task;
    case 'DEL_TODO':
      Tasks.remove(action.id)
    default:
      return state
  }
}

export default todos

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}
export const delTodo = (id) => {
  return {
    type: 'DEL_TODO',
    id
  }
}
export const updateTodo =(id,text) => {
  return{
    type: 'UPDATE_TODO',
    id,
    text
  }
}

export const loginFace =() => {
  return{
    type: 'LOGIN_FACE'
  }
}

export const sendToEmail =(text) => {
  return{
    type: 'SEND_EMAIL',
    text
  }
}

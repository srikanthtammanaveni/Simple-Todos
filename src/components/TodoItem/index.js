// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDelete} = props

  const {title, id} = todo

  const onDeleteUser = () => {
    onDelete(id)
  }

  return (
    <li className="todo-container">
      <p className="name">{title}</p>
      <button className="button" type="button" onClick={onDeleteUser}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

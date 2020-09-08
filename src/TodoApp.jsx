import React from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [],
    }
    this.textInput = React.createRef()
  }
  addItem = () => {
    let newTodoItems = [...this.state.todoItems]
    newTodoItems.push({
      value: this.textInput.current.value,
      isDone: false,
    })
    this.setState({ todoItems: newTodoItems })
    this.textInput.current.value = ''
  }

  removeItem = index => {
    let newTodoItems = [...this.state.todoItems]
    newTodoItems.splice(index, 1)
    this.setState({ todoItems: newTodoItems })
  }

  markTodoDone = index => {
    let newTodoItems = [...this.state.todoItems]
    let currentItem = newTodoItems[index]
    currentItem.isDone = !currentItem.isDone
    this.setState({ todoItems: newTodoItems })
  }

  render() {
    const { todoItems } = this.state
    return (
      <div>
        <TodoHeader />
        <TodoForm addItem={this.addItem} textInput={this.textInput} />
        <TodoList
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
          todoItems={todoItems}
        />
      </div>
    )
  }
}

export default TodoApp

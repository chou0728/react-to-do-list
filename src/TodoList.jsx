import React from 'react'
import TodoListItem from './TodoListItem'

const itemsWarpStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
const TodoList = ({ todoItems, removeItem, markTodoDone }) => {
  return (
    <ul className="items-wrap" style={itemsWarpStyle}>
      {todoItems.map((item, index) => (
        <TodoListItem
          key={index}
          index={index}
          todoItem={item}
          removeItem={removeItem}
          markTodoDone={markTodoDone}
        />
      ))}
    </ul>
  )
}
export default TodoList

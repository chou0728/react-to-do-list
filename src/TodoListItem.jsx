import React from 'react'

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '50%',
  border: '1px solid #000',
  marginTop: '-1px',
  padding: '5px',
  borderRadius: '4px',
}
const itemTextStyle = { flexGrow: 1, textAlign: 'left' }
const IconStyle = {
  textAlign: 'center',
  cursor: 'pointer',
  padding: '0 5px',
}

const doneStyle = {
  color: '#3c3c3c',
  textDecoration: 'line-through',
}

const TodoListItem = ({ todoItem, removeItem, markTodoDone, index }) => {
  return (
    <li style={itemStyle}>
      <div onClick={() => markTodoDone(index)} style={IconStyle}>
        V
      </div>
      <div
        style={
          todoItem.isDone ? { ...doneStyle, ...itemTextStyle } : itemTextStyle
        }
      >
        {todoItem.value}
      </div>
      <div onClick={() => removeItem(index)} style={IconStyle}>
        X
      </div>
    </li>
  )
}

export default TodoListItem

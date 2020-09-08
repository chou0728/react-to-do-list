import React from 'react'
const formWrapStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const inputStyle = {
  width: '200px',
  height: '20px',
  marginRight: '10px',
}
const TodoForm = ({ addItem, textInput }) => {
  return (
    <div className="form-wrap" style={formWrapStyle}>
      <input
        type="text"
        ref={textInput}
        placeholder="請輸入內容"
        style={inputStyle}
      />
      <button onClick={addItem}>新增</button>
    </div>
  )
}
export default TodoForm

import React from 'react'
import './style.css'

const Button = ({ children, action, type = 'button', ...props }) => {
  return <button type={type} className='btn' value='code' {...props} onClick={() => { action() }}>{children}</button>
}

export default Button
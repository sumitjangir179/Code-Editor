import { React, useState } from 'react'
import { Button } from '../index'
import './style.css'

const Editor = () => {
  const [code, setCode] = useState('')
  const [lock, setLock] = useState(false)

  const onChangeHandler = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      setCode(code.slice(0, e.target.selectionStart) + '\t' + code.slice(e.target.selectionEnd));
      e.target.selectionStart = e.target.selectionEnd = e.target.selectionStart + 1;
    }
    else{
      setCode(e.target.value)
    }
  }

  const copyHandler = () => {
    navigator.clipboard.writeText(code)
    alert('Text copied')
  }

  const saveHandler = () => {
    const link = document.createElement('a')
    const file = new Blob([code], { type: 'text/plain' })
    link.href = URL.createObjectURL(file)
    link.download = 'file.txt'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const lockAndUnlockHandler = () => {
    if (!lock) {
      setLock(true)
      document.getElementById('btn').innerText = 'Unlock'
      document.getElementById('code').readOnly = true
    }
    else {
      setLock(false)
      document.getElementById('btn').innerText = 'Lock'
      document.getElementById('code').readOnly = false
    }

  }

  return (
    <>
      <div className='editor'>
        <textarea id='code' name='code' rows='20' placeholder='Write Here' autoFocus value={code} onChange={onChangeHandler} onKeyDown={onChangeHandler}/>
      </div>

      <div className='editorBtn'>
        <Button action={copyHandler}>Copy</Button>
        <Button action={saveHandler}>Save</Button>
        <Button id='btn' action={lockAndUnlockHandler}>Lock</Button>
      </div>

    </>

  )
}

export default Editor
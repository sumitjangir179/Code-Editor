import React from 'react'
import {Container, Editor } from './components/index'
import './App.css'


const App = () => {
  return (
    <Container>
      <h1 className='heading'>Code Editor</h1>
      <Editor />
    </Container>
  )
}

export default App
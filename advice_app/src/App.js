import React from 'react'
import Advice from './component/Advice';
import "./index.css";
const App = () => {
  const url = "https://images.unsplash.com/photo-1521833965051-8273d0579115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  
  return (
    <div>
          <Advice />
    </div>
  )
}

export default App
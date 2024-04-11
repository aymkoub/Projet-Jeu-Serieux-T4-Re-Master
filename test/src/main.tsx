import React from 'react'
import ReactDOM from 'react-dom/client'
import Partie from './Partie.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Partie niveau={1}/>
  </React.StrictMode>,
)

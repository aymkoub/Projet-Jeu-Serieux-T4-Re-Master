import React from 'react'
import ReactDOM from 'react-dom/client'
import Partie from './Partie.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    children : [
      {
        path : "/partie",
        element : <Partie niveau={1}></Partie>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)

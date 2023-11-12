import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Route/Route'
import "./index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  
  RouterProvider,
} from "react-router-dom";


import './index.css'
import router from './Routers/Routers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl px-2 mx-auto font-inter'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <browserRouter>
    <Navbar/>
    </browserRouter>
  </React.StrictMode>,
)

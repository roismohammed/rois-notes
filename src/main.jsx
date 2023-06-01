import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@tabler/core/dist/js/tabler'
import '@tabler/core/dist/css/tabler.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

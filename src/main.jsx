import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterApp } from './router/RouterApp'
import '../assets/css/styles.css'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  </React.StrictMode>,
)
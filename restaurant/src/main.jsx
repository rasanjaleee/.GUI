import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from 'react-use-cart'


createRoot(document.getElementById('root')).render(

  
    <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
    </React.StrictMode>
    
  
  
)

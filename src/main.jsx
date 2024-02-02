import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  // {<React.StrictMode>
  // </React.StrictMode>,}
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
)

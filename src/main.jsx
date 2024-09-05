import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppContext from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>
)

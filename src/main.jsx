import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './components/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalStyle>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStyle>
)

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Public } from './Pages'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Public />} />
      </Routes>
    </>
  )
}

export default App

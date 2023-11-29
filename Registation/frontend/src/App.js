import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
function App() {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route index path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
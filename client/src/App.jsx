import './App.css'
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { Register } from './pages/Register';

const App = ()=> {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

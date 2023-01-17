import GlobalStyle from './css/GlobalStyle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Home from './components/home/Home.js'
import Input from './components/input/Input.js'
import Output from './components/output/Output.js';



export default function App() {
  return (
    <BrowserRouter>

    <GlobalStyle />
    
    <Routes>
      
      <Route path='/' element={<Login />} />
      <Route path='/cadastro' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/nova-entrada' element={<Input />} />
      <Route path='/nova-saida' element={<Output />} />

    </Routes>
    </BrowserRouter>
  );
}


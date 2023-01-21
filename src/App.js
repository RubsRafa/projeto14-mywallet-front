import GlobalStyle from './css/GlobalStyle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Home from './components/home/Home.js'
import Input from './components/input/Input.js'
import Output from './components/output/Output.js';
import Provider from './components/contextAPI/Provider.js'
import EditInput from './components/editInput/EditInPut.js';
import EditOutput from './components/editOutput/EditOutPut.js';


export default function App() {

  return (

    <BrowserRouter>

      <GlobalStyle />

      <Provider>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/nova-entrada' element={<Input />} />
          <Route path='/nova-saida' element={<Output />} />
          <Route path='/editar-entrada' element={<EditInput />} />
          <Route path='/editar-saida' element={<EditOutput />} />
          

        </Routes>
      </Provider>
    </BrowserRouter>

  );
}


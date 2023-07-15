import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'

import './App.css'
import Hamburguer from './components/Hamburguer/Hamburguer'
import Footer from './components/Footer/Footer'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa'
import ConsultarEmpresas from './pages/ConsultarEmpresas/ConsultarEmpresas'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <div>LogMiller</div>
          <Navbar />
          <Hamburguer />
        </Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cadastro-empresa' element={<CadastroEmpresa />}></Route>
          <Route path='/consultar-empresas' element={<ConsultarEmpresas />}></Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

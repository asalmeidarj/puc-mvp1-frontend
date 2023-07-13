import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

import Products from './pages/Products/Products'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'

import './App.css'
import Hamburguer from './components/Hamburguer/Hamburguer'
import Footer from './components/Footer/Footer'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa'

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
          <Route path='/about' element={<About />}></Route>
          <Route path='/products/:id' element={<Products />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/company' element={<Navigate to='/about' />}></Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

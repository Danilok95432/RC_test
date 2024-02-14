import './App.css'
import CartContainer from './Components/Cart/CartContainer'
import FooterContainer from './Components/Footer/FooterContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import OverlayContainer from './Components/Overlay/OverlayContainer'
import ProductsContainer from './Components/Products/ProductsContainer'
import Products from './Components/Products/Products'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <>
          <HeaderContainer />
          <Routes>
            <Route path='/' element={<ProductsContainer />}/>
            <Route path='products' element={<ProductsContainer />}/>
            <Route path='products?category=:category' element={<ProductsContainer />}/>
          </Routes>
          <FooterContainer />
          <OverlayContainer />
          <CartContainer />
      </>
    </BrowserRouter>
  )
}

export default App

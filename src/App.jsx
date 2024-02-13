import './App.css'
import CartContainer from './Components/Cart/CartContainer'
import FooterContainer from './Components/Footer/FooterContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import OverlayContainer from './Components/Overlay/OverlayContainer'
import ProductsContainer from './Components/Products/ProductsContainer'


function App() {

  return (
    <>
        <HeaderContainer />
        <ProductsContainer />
        <FooterContainer />
        <OverlayContainer />
        <CartContainer />
    </>
  )
}

export default App

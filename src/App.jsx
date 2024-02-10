import './App.css'
import FooterContainer from './Components/Footer/FooterContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import ProductsContainer from './Components/Products/ProductsContainer'


function App() {

  return (
    <>
      <HeaderContainer />
      <main>
        <ProductsContainer />
      </main>
      <FooterContainer />
    </>
  )
}

export default App

import { connect } from "react-redux";
import Products from './Products'
import { setProductsAC } from "../../redux/productsReducer";


let mapStateToProps = (state) =>{
    return{
        products: state.products.products,
        activeCategory: state.categories.activeCategory
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setProducts: (products) => {
            dispatch( setProductsAC(products) )
        },
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer
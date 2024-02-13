import { connect } from "react-redux";
import Products from './Products'
import { setLoadMoreAc, setProductsAC } from "../../redux/productsReducer";
import { addToCartAC } from "../../redux/cartReducer";


let mapStateToProps = (state) =>{
    return{
        products: state.products.products,
        activeCategory: state.categories.activeCategory,
        loadMore: state.products.loadMore,
        searchText: state.search.searchText,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setProducts: (products) => {
            dispatch( setProductsAC(products) )
        },
        setLoadMore: (flag) => {
            dispatch( setLoadMoreAc(flag) )
        },
        addToCart: (product) => {
            dispatch( addToCartAC(product) )
        },
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer
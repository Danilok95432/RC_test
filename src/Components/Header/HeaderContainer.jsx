import { connect } from "react-redux";
import Header from "./Header";
import { setActiveCategoryAC, setCategoriesAC } from "../../redux/categoriesReducer";
import { switchModalModeAC } from "../../redux/overlayReducer";
import { setLoadMoreAc, setProductsAC } from "../../redux/productsReducer";
import { setSearchText } from "../../redux/searchReducer";


let mapStateToProps = (state) =>{
    return{
        categories: state.categories.categories,
        activeCategory: state.categories.activeCategory,
        searchText: state.search.searchText,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setCategories: (categories) => {
            dispatch( setCategoriesAC(categories) )
        },
        setActiveCategory: (category) => {
            dispatch( setActiveCategoryAC(category) )
        },
        switchModalMode: (flag) => {
            dispatch( switchModalModeAC(flag) )
        },
        setLoadMore: (flag) => {
            dispatch( setLoadMoreAc(flag) )
        },
        setSearchText: (text) => {
            dispatch( setSearchText(text) )
        },
        setProducts: (products) => {
            dispatch( setProductsAC(products) )
        },
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
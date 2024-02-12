import { connect } from "react-redux";
import Header from "./Header";
import { setActiveCategoryAC, setCategoriesAC } from "../../redux/categoriesReducer";
import { switchModalModeAC } from "../../redux/overlayReducer";
import { setLoadMoreAc } from "../../redux/productsReducer";


let mapStateToProps = (state) =>{
    return{
        categories: state.categories.categories,
        activeCategory: state.categories.activeCategory
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
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
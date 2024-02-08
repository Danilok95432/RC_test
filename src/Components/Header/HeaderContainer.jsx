import { connect } from "react-redux";
import Header from "./Header";
import { setActiveCategoryAC, setCategoriesAC } from "../../redux/categoriesReducer";


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
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
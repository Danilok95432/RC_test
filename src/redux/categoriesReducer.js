const SET_CATEGORIES = 'SET-CATEGORIES',
      SET_ACTIVE_CATEGORY = 'SET-ACTIVE-CATEGORY'


let initialState = {
    categories: [],
    activeCategory: 'all'
}


const categoriesReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CATEGORIES: {
            return{
                ...state,
                ...state.categories,
                categories: action.categories
            }
        }

        case SET_ACTIVE_CATEGORY: {
            
            return{
                ...state,
                ...state.categories,
                activeCategory: action.category
            }
        }
    }

    return state
}

export let setCategoriesAC = (categories) => {
    return{
        type: SET_CATEGORIES,
        categories: categories
    }
}

export let setActiveCategoryAC = (category) => {
    return{
        type: SET_ACTIVE_CATEGORY,
        category: category
    }
}




export default categoriesReducer
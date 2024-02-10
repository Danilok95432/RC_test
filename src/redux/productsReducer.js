const SET_PRODUCTS = 'SET-PRODUCTS',
      SET_LOAD_MORE = 'SET-LOAD-MORE'


let initialState = {
    products: [],
    loadMore: false
}


const productsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_PRODUCTS: {
            return{
                ...state,
                ...state.products,
                products: action.products
            }
        }

        case SET_LOAD_MORE: {
            return{
                ...state,
                ...state.products,
                loadMore: action.flag
            }
        }
    }

    return state
}

export let setProductsAC = (products) => {
    return{
        type: SET_PRODUCTS,
        products: products
    }
}

export let setLoadMoreAc = (flag) => {
    return{
        type: SET_LOAD_MORE,
        flag: flag
    }
}




export default productsReducer
const SET_PRODUCTS = 'SET-PRODUCTS'


let initialState = {
    products: [],
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
    }

    return state
}

export let setProductsAC = (products) => {
    return{
        type: SET_PRODUCTS,
        products: products
    }
}




export default productsReducer
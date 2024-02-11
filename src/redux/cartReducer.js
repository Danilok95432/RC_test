const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
      REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'


let initialState = {
    cart: [],
}


const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_ITEM_TO_CART: {
            state.cart.push(action.item)
            return{
                ...state,
                ...state.cart,
            }
        }

        case REMOVE_ITEM_FROM_CART: {
            let index = state.cart.indexOf(action.item)
            state.cart.splice(index, 1)
            return{
                ...state,
                ...state.cart
            }
        }
    }

    return state
}


export let addToCartAC = (product) => {
    return{
        type: ADD_ITEM_TO_CART,
        item: product
    }
}

export let removeItemFromCartAC = (product) => {
    return{
        type: REMOVE_ITEM_FROM_CART,
        item: product
    }
}


export default cartReducer
const ADD_ITEM_TO_CART = 'ADD-ITEM-TO-CART',
      REMOVE_ITEM_FROM_CART = 'REMOVE-ITEM-FROM-CART',
      CHANGE_QUANTITY = 'CHANGE-QUANTITY'


let initialState = {
    cart: [],
}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART: {
            let newItem = null
            let product = state.cart.filter((product) => product.item == action.item)
            if(product.length != 0)
            {
                let index = state.cart.findIndex(el => el.item == product[0].item)
                state.cart[index].quantity += 1
            } 
            else
                newItem = {
                    item: action.item,
                    quantity: 1
                }   
            return{
                ...state,
                cart: newItem ? [...state.cart, newItem] : state.cart
            }
        }

        case REMOVE_ITEM_FROM_CART: {
            let newState = {...state};
            newState.cart = [...state.cart];
            let index = newState.cart.indexOf(action.item)
            newState.cart.splice(index, 1)
            return newState
        }

        case CHANGE_QUANTITY: {
            let newState = {...state};
            newState.cart = [...state.cart];
            let index = state.cart.findIndex(el => el.item == action.product.item)
            newState.cart[index].quantity += action.changes
            if(newState.cart[index].quantity <= 0){
                newState.cart.splice(index, 1)
            }
            return{
                ...newState,
                ...newState.cart,
                cart: newState.cart
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

export let changeQuantityProduct = (product, changes) => {
    return{
        type: CHANGE_QUANTITY,
        product: product,
        changes: changes
    }
}


export default cartReducer
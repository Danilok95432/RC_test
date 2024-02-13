const ADD_ITEM_TO_CART = 'ADD-ITEM-TO-CART',
      REMOVE_ITEM_FROM_CART = 'REMOVE-ITEM-FROM-CART',
      CHANGE_QUANTITY = 'CHANGE-QUANTITY'


let initialState = {
    cart: [],
    counterItems: 0,
    controlSum: 0,
}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART: {
            let newItem = null;
            let product = state.cart.filter((product) => product.item == action.item);
            let updatedCart = [];
            let updatedControlSum = state.controlSum;
            let updatedCounterItems = state.counterItems;
          
            if (product.length != 0) {
              let index = state.cart.findIndex(el => el.item == product[0].item);
              updatedControlSum += product[0].item.price;
              updatedCart = state.cart.map((el, i) => {
                if (i === index) {
                  return {
                    ...el,
                    quantity: el.quantity + 1
                  };
                }
                return el;
              });
            } else {
              newItem = {
                item: action.item,
                quantity: 1
              };
              updatedControlSum += action.item.price;
              updatedCart = [...state.cart, newItem];
            }
          
            return {
              ...state,
              cart: updatedCart,
              controlSum: updatedControlSum,
              counterItems: updatedCounterItems + 1
            };
          }

        case REMOVE_ITEM_FROM_CART: {
            const updatedCart = [...state.cart];
            const updatedControlSum = state.controlSum - (action.item.item.price * action.item.quantity);
            const updatedCounterItems = state.counterItems - action.item.quantity;
            const index = updatedCart.indexOf(action.item);
            updatedCart.splice(index, 1);
            return {
            ...state,
            cart: updatedCart,
            controlSum: updatedControlSum,
            counterItems: updatedCounterItems
            }
        }

        case CHANGE_QUANTITY: {
            let updatedCart = [];
            let updatedControlSum = state.controlSum;
            let updatedCounterItems = state.counterItems;
            let index = state.cart.findIndex(el => el.item == action.product.item);
              updatedCart = state.cart.map((el, i) => {
                if (i === index) {
                  return {
                    ...el,
                    quantity: el.quantity + action.changes
                  };
                }
                return el;
              });
            if(action.changes > 0)
                updatedControlSum += action.product.item.price
            else updatedControlSum -= action.product.item.price
            if(updatedCart[index].quantity <= 0){
                updatedCart.splice(index, 1)
            }
            return{
                cart: updatedCart,
                counterItems: updatedCounterItems + action.changes,
                controlSum: updatedControlSum
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
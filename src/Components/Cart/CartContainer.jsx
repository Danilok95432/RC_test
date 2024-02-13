import { connect } from "react-redux";
import Cart from "./Cart";
import { switchModalModeAC } from "../../redux/overlayReducer";
import { changeQuantityProduct, removeItemFromCartAC } from "../../redux/cartReducer";


let mapStateToProps = (state) =>{
    return{
        isActiveModal: state.overlay.isActiveModal,
        cart: state.cart.cart,
        counterItems: state.cart.counterItems,
        controlSum: state.cart.controlSum,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        switchModalMode: (flag) => {
            dispatch( switchModalModeAC(flag) )
        },
        changeQuantity: (product, changes) => {
            dispatch( changeQuantityProduct(product, changes) )
        },
        removeItem: (product) => {
            dispatch( removeItemFromCartAC(product) )
        }
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer
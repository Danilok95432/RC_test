import { connect } from "react-redux";
import Cart from "./Cart";
import { switchModalModeAC } from "../../redux/overlayReducer";


let mapStateToProps = (state) =>{
    return{
        isActiveModal: state.overlay.isActiveModal,
        cart: state.cart.cart,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        switchModalMode: (flag) => {
            dispatch( switchModalModeAC(flag) )
        },
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer
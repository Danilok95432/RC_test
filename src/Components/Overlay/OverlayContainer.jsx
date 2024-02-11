import { connect } from "react-redux";
import Overlay from "./Overlay";
import { switchModalModeAC } from "../../redux/overlayReducer";


let mapStateToProps = (state) =>{
    return{
        isActiveModal: state.overlay.isActiveModal
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        switchModalMode: (flag) => {
            dispatch( switchModalModeAC(flag) )
        },
    }
}

const OverlayContainer = connect(mapStateToProps, mapDispatchToProps)(Overlay)

export default OverlayContainer
import { connect } from "react-redux";
import Footer from "./Footer";
import { setLoadMoreAc } from "../../redux/productsReducer";


let mapStateToProps = (state) =>{
    return{
        
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setLoadMore: (flag) => {
            dispatch( setLoadMoreAc(flag) )
        },
    }
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer
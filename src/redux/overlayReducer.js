const SWITCH_MODAL_MODE = 'SWITCH-MODAL-MODE'


let initialState = {
    isActiveModal: false
}


const overlayReducer = (state = initialState, action) =>{
    switch(action.type){
        case SWITCH_MODAL_MODE: {
            return{
                ...state,
                isActiveModal: action.flag
            }
        }
    }

    return state
}

export let switchModalModeAC = (flag) => {
    return{
        type: SWITCH_MODAL_MODE,
        flag: flag
    }
}

export default overlayReducer
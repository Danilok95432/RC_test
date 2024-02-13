const SET_SEARCH_TEXT = 'SET-SEARCH-TEXT'


let initialState = {
    searchText: ''
}


const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SEARCH_TEXT: {
            return{
                ...state,
                searchText: action.text
            }
        }
    }

    return state
}


export let setSearchText = (text) => {
    return{
        type: SET_SEARCH_TEXT,
        text: text
    }
}


export default searchReducer
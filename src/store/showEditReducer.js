const init = {
    show: false,
    id:0
}

const showEditReducer = (state=init,action) => {
    switch(action.type) {
        case 'SHOW_EDIT':
            return{
                ...state,
                show: true,
                id: action.payload
            }
        case 'HIDE_EDIT':
            return{
                ...state,
                show: false
            }
        default: 
        return state
    }
    

}
export default showEditReducer
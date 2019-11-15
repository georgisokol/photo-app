const initData = {
    showd: false,
    id:0
}
const showDeleteReducer = (state=initData, action) => {
    switch(action.type){
        case 'SHOW_DELETE':
            return{
                ...state,
                showd: true,
                id: action.payload
            }
        case 'HIDE_DELETE':
            return{
                ...state,
                showd: false
            }
        default:
            return state
    }
}
export default showDeleteReducer
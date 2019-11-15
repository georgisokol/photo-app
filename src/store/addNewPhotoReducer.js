const data = {
    showAdd: false
}
const addNewPhotoReducer = (state=data,action) => {
    switch(action.type){
        case 'ADD_PHOTO':
            return{
                ...state,
                showAdd: true
            }
        case 'HIDE_ADD':
            return{
                ...state,
                showAdd: false
            }
            default:
                return state;
    }
}
export default addNewPhotoReducer;
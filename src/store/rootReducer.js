const initData = {
    photos: [],
    loading: false,
    fail: false
};
const rootReducer = (state = initData, action) => {
    switch(action.type){
        case 'FETCH_PHOTOS_SUCCESS': {
            state.photos = action.data
            state.loading = false
            state.fail = false
        }
        case 'FETCH_PHOTOS_LOADING':
            return{
                ...state,
                loading: true,
                fail: false
            }    
        case 'FETCH_PHOTOS_FAIL' :
            return{
                ...state,
                loading: false,
                fail: true
            }
        case 'DELETE_PHOTO' : {
            const arr = state.photos.filter((item) => { 
                return item.id !== action.payload 
            })
            return {
                ...state, 
                photos: arr
            }
        }
        case 'CHANGE_NEW_TITLE' : {
            state.photos.map((item) => {
                if(item.id === action.payload){
                    console.log(item.title)
                    item.title = action.data
                    console.log(item.title)
                }
            })
            
            return {
                ... state
            }
        }
        default: 
            return state
    }
}
export default rootReducer
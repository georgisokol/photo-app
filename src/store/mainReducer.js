import {combineReducers} from 'redux'
import rootReducer from './rootReducer'
import showEditReducer from './showEditReducer'
import showDeleteReducer from './showDeleteReducer'
import addNewPhotoReducer from './addNewPhotoReducer'

const mainReducer = combineReducers ({
    photos: rootReducer,
    showEdit: showEditReducer,
    showDelete: showDeleteReducer,
    addPhoto: addNewPhotoReducer
})
export default mainReducer
export const fetchPhotosSuccess = (data) => {
    return {
        type: 'FETCH_PHOTOS_SUCCESS',
        data: data
    }
};
export const fetchPhotosLoading = () => {
    return {
        type: 'FETCH_PHOTOS_LOADING'
    }
};
export const fetchPhotosFail = () => {
    return {
        type: 'FETCH_PHOTOS_FAIL'
    }
};
export const deletePhoto = (id) => {
    
    return {
        type: 'DELETE_PHOTO',
        payload: id
    }
}
export const editTitle = (id,title) => {
    
    return {
        type: 'CHANGE_NEW_TITLE',
        payload: id,
        data: title
    }
}
export const fetchPhotos = (data) => {
    return (dispatch) => {
        dispatch(fetchPhotosLoading());
        fetch(
            `http://jsonplaceholder.typicode.com/photos`,
            {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            dispatch(fetchPhotosSuccess(data))
        })
        .catch(() => {
            dispatch(fetchPhotosFail)
        })
    }
}

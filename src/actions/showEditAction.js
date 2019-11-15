export const showEdit = (id) => {
    return {
        type: 'SHOW_EDIT',
        payload: id
    }
}
export const hideEdit = () =>{
    return {
        type: 'HIDE_EDIT'
    }
}
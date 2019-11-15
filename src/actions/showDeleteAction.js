export const showDelete = (id) => {
    return{
        type: 'SHOW_DELETE',
        payload: id
    }
}
export const hideDelete = () => {
    return {
        type: 'HIDE_DELETE'
    }
}
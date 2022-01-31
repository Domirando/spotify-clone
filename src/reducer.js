export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
}
export const reducer = (state, action) => {
    console.log(action)
    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state

    }
}
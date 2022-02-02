export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    daily_mix: null
}
export const reducer = (state, action) => {
    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DAILY_MIX':
            return{
                ...state,
                daily_mix: action.daily_mix
            }

        default:
            return state
    }
}

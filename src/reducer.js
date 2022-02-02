export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    daily_mix: null
    // token: 'BQBLDlP_C6p-mevz-9Ic3fncOEed7weI19C81UTEWgNPZsAlhYxEgLS8akkWSPHNtojuNSnbLNIcWQ8EhTdSix-T9DPpF9m2CltAe61Ts595gudY9HBHPJnEP2OPzuxX0QfQ_zU5x0LHjjuVWOy5EYMywIoPOqvMKwZxkLot7i6Lxr1L'
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

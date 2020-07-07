// Store/Reducers/favoriteReducer.js
const initialState = {token: null, user: null, users: []}

const login= (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.data.user,
                token: action.data.token
            }
        case 'LOGOUT':
            return initialState

        case "FETCH_EDIT_PROFILE_BEGINS":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_EDIT_PROFILE_SUCCESS":
            return {
                ...state,
                loading: false,
                user: action.payload.user
            };
        case "FETCH_EDIT_PROFILE_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                races: []
            };
        case "FETCH_ALL_USERS":
            return {
                ...state,
                loading: false,
                users: action.payload.users,
                races: action.payload.users
            };
        case "FETCH_EDIT_ADMIN_USER":
            console.log(action)
            return {
                ...state,
                loading: false,
                users: state.users.map(user => {
                    if (user.id === action.payload.user.id) {
                        console.log(user)
                        user = action.payload.user;
                    }
                    return user;
                })
            };
        case "DELETE_USER_ADMIN":
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id !== action.payload.idUser)
            };
        default:
            return state
    }
}

export default login
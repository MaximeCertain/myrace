export const login = (data) => {
    return{
        type: "LOGIN",
        data: data
    }
}
export const logout = (data) => {
    return{
        type: "LOGOUT",
        data: data
    }
}
export const fetchEditUserBegin = () => ({
    type: "FETCH_EDIT_PROFILE_BEGINS",
    loading: true,
})
export const fetchEditUserSuccess = (user) => ({
    type: "FETCH_EDIT_PROFILE_SUCCESS",
    payload: {user},
    loading: false

})
export const fetchEditUserFailure = (error) => ({
    type: "FETCH_EDIT_PROFILE_FAILURE",
    loading: false,
    payload: {error}
})


export const fetchAllUsers = (users) => ({
    type: "FETCH_ALL_USERS",
    loading: false,
    payload: {users}
})
export const fetchEditAdminUser = (user) => ({
    type: "FETCH_EDIT_ADMIN_USER",
    loading: false,
    payload: {user}
})
export const fetchDeleteAdminUser = (idUser) => ({
    type: "DELETE_USER_ADMIN",
    loading: false,
    payload: {idUser}
})
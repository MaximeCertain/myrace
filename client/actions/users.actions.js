export const login = (data) => {
    //contient token ET user
    return{
        type: "LOGIN",
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



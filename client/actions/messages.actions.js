export const fetchMessageFormBegins = () => ({
    type: "FETCH_MESSAGE_FORM_BEGIN",
    loading: true,
})
export const fetchMessageFormSuccess = (message) => ({
    type: "FETCH_MESSAGE_FORM_SUCCESS",
    payload: {message},
    loading: false

})
export const fetchMessageFormFailure = (error) => ({
    type: "FETCH_MESSAGE_FORM_FAILURE",
    loading: false,
    payload: {error}
})

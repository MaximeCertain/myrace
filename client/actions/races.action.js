export const fetchRacesBegin = () => ({
    type: "FETCH_RACES_BEGIN",
    loading: true,
})
export const fetchRacesSuccess = (races) => ({
    type: "FETCH_RACES_SUCCESS",
    payload: {races},
    loading: false

})
export const fetchRacesFailure = (error) => ({
    type: "FETCH_RACES_FAILURE",
    loading: false,
    payload: {error}
})
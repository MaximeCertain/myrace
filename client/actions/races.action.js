export const requestRaces = () => ({
    type: "REQUEST_RACES",
    loading: true,
})
export const requestRacesSuccess = (races) => ({
    type: "REQUEST_RACES_SUCCESS",
    races,
    loading: false,
})
export const requestRacesError = (error) => ({
    type: "REQUEST_RACES_ERROR",
    loading: false,
    error,
})
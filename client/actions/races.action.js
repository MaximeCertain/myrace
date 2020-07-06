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

export const fetchRaceFormBegins = () => ({
    type: "FETCH_RACE_FORM_BEGIN",
    loading: true,
})
export const fetchRaceFormSuccess = (race) => ({
    type: "FETCH_RACE_FORM_SUCCESS",
    payload: {race},
    loading: false

})
export const fetchRaceFormEditSuccess = (race) => ({
    type: "FETCH_RACE_FORM_EDIT_SUCCESS",
    payload: {race},
    loading: false

})
export const fetchRaceFormFailure = (error) => ({
    type: "FETCH_RACE_FORM_FAILURE",
    loading: false,
    payload: {error}
})
export const getRegisteredRaces = (id) => ({
    type: "GET_REGISTERED_RACES",
    loading: false,
    id: {id}
})

export const getResultedRaces = (id) => ({
    type: "GET_RESULTED_RACES",
    loading: false,
    id: {id}
})
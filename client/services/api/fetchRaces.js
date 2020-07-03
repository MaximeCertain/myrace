
function fetchRaces() {
    return dispatch => {
        dispatch(requestRaces);
        RacesService.list()
            .then(races => {
                dispatch(requestRacesSuccess(races))
                return races;
            })
            .catch(error => {
                dispatch(requestRacesError(error))
            })
    }
}

export default fetchRaces
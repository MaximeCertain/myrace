import {fetchMessageFormFailure, fetchMessageFormSuccess} from "../../actions/messages.actions";
import MessagesService from "../../services/api/messages.service";
import {fetchRaceFormFailure} from "../../actions/races.action";
import {store} from '../../store/configureStore'

export function fetchSendMessage(body, raceId, type) {
    return async dispatch => {
        try {
            let races = store.getState().race.races

            //   dispatch(fetchEditUserBegin());
            let message = (await MessagesService.create(body, raceId, type))
            //console.log(race.id === message.RaceId)

          /*  let x = races.map(race =>
                race.id == message.RaceId ? { ...race, race.Messages : message} : race
            )
            console.log(x)*/

            if (message) {
                message.raceId = raceId
               await ((dispatch(fetchMessageFormSuccess(message))));
            }                console.log(store.getState())

        } catch (e) {
            dispatch(fetchMessageFormFailure(e));
        }
    };
}

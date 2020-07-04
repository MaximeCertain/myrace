import {fetchMessageFormFailure, fetchMessageFormSuccess} from "../../actions/messages.actions";
import MessagesService from "../../services/api/messages.service";
import {fetchRaceFormFailure} from "../../actions/races.action";

export function fetchSendMessage(body, raceId) {
    return async dispatch => {
        try {
            //   dispatch(fetchEditUserBegin());
            let message = (await MessagesService.create(body, raceId))
            await (dispatch(fetchMessageFormSuccess(message)));
            if(message){
                console.log(message)
            }
        } catch (e) {
            dispatch(fetchMessageFormFailure(e));
        }
    };
}

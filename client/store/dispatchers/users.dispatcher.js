import {fetchEditUserBegin, fetchEditUserFailure, fetchEditUserSuccess} from "../../actions/users.actions";
import UsersService from "../../services/api/users.service";

export function fetchEditUser(user) {
    return async dispatch => {
        try {
            dispatch(fetchEditUserBegin());
           (await UsersService.update(user))
           dispatch(fetchEditUserSuccess(user));
        } catch (e) {
            dispatch(fetchEditUserFailure(e));
        }
    };
}



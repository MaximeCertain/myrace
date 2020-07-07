import {
    fetchAllUsers, fetchEditAdminUser, fetchDeleteAdminUser,
    fetchEditUserBegin,
    fetchEditUserFailure,
    fetchEditUserSuccess
} from "../../actions/users.actions";
import UsersService from "../../services/api/users.service";
import {store} from "../../store/configureStore";

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

export function getAllUsers(user) {
    return async dispatch => {
        try {
            dispatch(fetchEditUserBegin());
            let users = (await UsersService.list())
            console.log(users)
            dispatch(fetchAllUsers(users));

        } catch (e) {
            dispatch(fetchEditUserFailure(e));
        }
    };
}

export function fetchEditUserAdmin(user) {
    console.log(user)
    return async dispatch => {
        try {
            //dispatch(fetchEditUserBegin());
            (await UsersService.update(user))
            dispatch(fetchEditAdminUser(user));
            console.log(store.getState().login)

        } catch (e) {
            dispatch(fetchEditUserFailure(e));
        }
    };
}

export function fetchDeleteUserAdmin(idUser) {
    return async dispatch => {
        try {
            //dispatch(fetchEditUserBegin());
           let response = (await UsersService.delete(idUser))
            if(response){
                dispatch(fetchDeleteAdminUser(idUser));
            }
            console.log(store.getState().login)

        } catch (e) {
            dispatch(fetchEditUserFailure(e));
        }
    };
}

import * as action from './ActionType';

export const getAccessToken = (uid) => {

    return {
        type: action.API_CHECK_ACCESS_FETCH,
        data: uid
    }

}
export const clearResponse = () => {

    return {
        type: action.CLEAR_RESPONSE
    }

}
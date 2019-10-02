import * as action_type from './../actions/LoginAction/ActionType';

const initialState = {
    tokenData: {},
    isFetching: false
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.API_CHECK_ACCESS_SUCCESS:
            console.log('ddfds', action.data.data.token);
            return Object.assign({}, state, {
                tokenData: { token: action.data.data.token, success: action.data.success },
                isFetching: false
            });
        case action_type.IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case action_type.CLEAR_RESPONSE:
            // console.log('ddfds', action.data.data.token);
            return Object.assign({}, state, {
                tokenData: {}
            });



        default:
            return state;
    }
}

export default LoginReducer;
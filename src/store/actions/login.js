export function userLoginSuccess(data) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: data,
    };
}

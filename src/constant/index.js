export const UserCase = Object.freeze({
    Global: {
        updateState: 'global_UPDATE_STATE',
        navigate: 'global_NAVIGATE_TO_ROUTE',
        goBack: 'global_GO_BACK',
    },
    User: {
        updateState: 'user_UPDATE_STATE',
        login: 'user_LOGIN',
        logout: 'user_LOGOUT',
        signup: 'user_SIGNUP',
    }
})
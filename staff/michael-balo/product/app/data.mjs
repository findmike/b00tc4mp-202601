export const data = {

    setToken: function (token) {
        sessionStorage.token = token

    },

    getToken: function () {
        return sessionStorage.token
    },

    removeToken: function () {
        delete sessionStorage.token
    }
}
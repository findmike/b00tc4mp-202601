const storage = localStorage

export const data = {

    setToken: function (token) {
        storage.token = token

    },

    getToken: function () {
        return storage.token
    },

    removeToken: function () {
        delete storage.token
    }
}
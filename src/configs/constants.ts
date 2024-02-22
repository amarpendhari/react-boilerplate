export default {
    API_URL : process.env.REACT_APP_API_URL,
    API_ENDPOINT: {
        AUTH: {
            REGISTER: '/auth/register',
            LOGIN: '/auth/login',
        },
        CATEGORY: '/category',
        COLLECTION: '/collection'
    },
    STORAGE_KEYS: {
        TOKEN: 'auth_token',
        DARKMODE: 'dark_mode'
    }
}
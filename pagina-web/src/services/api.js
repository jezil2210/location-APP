const axios = require('axios')

const api = axios.create({
    baseURL: 'http://localhost:2002'
})

export default api
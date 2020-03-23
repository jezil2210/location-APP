const { Router } = require('express')
const DevControllers = require('./Controllers/DevControllers')
const SearchController = require('./Controllers/searchController')


const routes = Router()

routes.get('/devs',DevControllers.index)
routes.post('/devs', DevControllers.store)

routes.get('/search',SearchController.index)

module.exports = routes
//http://localhost:2002/?temperatura=32&humid=52
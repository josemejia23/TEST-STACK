//enrouter object for save routes
// const Router for require express
const { Router } = require('express')   
const router = Router()
//instance of profile controller
const profilesCtrl =  require('../controllers/profiles.controller')

//CRUD
//CREATE-RED-UPDATE-DELETE

router.get('/', profilesCtrl.getProfiles);

router.post('/', profilesCtrl.createProfile);

router.get('/:id', profilesCtrl.getProfile);

router.put('/:id', profilesCtrl.editProfile);

router.delete('/:id', profilesCtrl.deleteProfile);

//export router
module.exports = router
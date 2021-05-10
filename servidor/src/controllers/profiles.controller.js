//define of object profileCtrl
const profileCtrl = {}

//getting profile of models
const Profile = require('../models/Profile')

//GET PROFILES ASYNC
profileCtrl.getProfiles = async (req, res) =>  {

    const profiles = await Profile.find()
    res.json(profiles)
}

//CREATE NEW PROFILE ASYNC
profileCtrl.createProfile = async (req, res) =>  {
    
    const newProfile = new Profile(req.body)
    await newProfile.save()
    res.send({message: 'Profile created'})
}

//GET ONE PROFILE
profileCtrl.getProfile = async (req, res) =>  {
    
    console.log(req.params)
    const profile = await Profile.findById(req.params.id)
    res.send(profile)
}

//EDIT PROFILES ASYNC
profileCtrl.editProfile = async (req, res) =>  {
    
    await Profile.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Profile updated'})
}

//DELETE PROFILES ASUYNC BY ID
profileCtrl.deleteProfile = async (req, res) =>  {
    
    await Profile.findByIdAndDelete(req.params.id)
    res.json({status: 'Profile deleted'})
}

//EXPORT PROFILE CONTROLLER
module.exports = profileCtrl;
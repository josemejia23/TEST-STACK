//declarate variables of database mongoose
const {Schema, model} = require('mongoose')

//SHEMA FOR DEFINE THE FIELDS STORE IN EACH DOCUMENT
const profileSchema =  new Schema(
    {
    name: {type: String}, 
    avatar_url: {type: String}, 
    login: {type: String}, 
    type: {type: String}, 
    company: {type: String}, 
    location: {type: String}, 
    email: {type: String}, 
},
{
    timestamps: true, 
    versionKey: false
}
);

//EXPORT PROFILE SHEMA
module.exports = model('Profile', profileSchema);

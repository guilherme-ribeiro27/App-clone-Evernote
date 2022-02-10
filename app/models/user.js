/**
 * This is the Schema for user collection
 */

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

// pre('save') will process before a real saving on database happens
// Here I will hash the password
userSchema.pre('save',function (next){
    if(this.isNew || this.isModified('password')){
        bcrypt.hash(this.password,10,
            (err,hashedPassword)=>{
                if(err)
                    next()
                else{
                    this.password = hashedPassword  
                    next()
                }
            }
        )
    }
})

userSchema.methods.isCorrectPassword = function (password,callback){
    bcrypt.compare(password, this.password, function(err,same){
        if(err)
            callback(err)
        else
            callback(err,same)
    })      
}

module.exports = mongoose.model('User', userSchema);
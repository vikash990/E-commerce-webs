const mongoose=require('mongoose');
const Schema=mongoose.Schema

const UserSchema=new Schema({
    first_name:{
        type:String
    },
    number:{
        type:Number
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
      },
   })

   
module.exports=user=mongoose.model('user',UserSchema)
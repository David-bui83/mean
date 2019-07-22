const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const petsSchema = new mongoose.Schema({
  name:{type:String,required:[true,'Name cannot be empty'],minlength:[3,'All pets must have a name of at least 3 characters'],unique:true},
  type:{type:String,required:[true,'Type cannot be empty'],minlength:[3,'All pets must have a type of at least 3 characters']},
  desc:{type:String,required:[true,'Type cannot be empty'],minlength:[3,'All pets must have a description of at least 3 characters']},
  skills:[],
  likes: 0,
},{timestamps:true})
petsSchema.plugin(uniqueValidator,{ message: 'error, Name is already taken' });
mongoose.model('Pets',petsSchema)
const mongoose=require('mongoose');
const noteSchema=new mongoose.Schema({
  course:String, title:String, file:String,
  uploadedAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model('Note',noteSchema);

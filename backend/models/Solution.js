const mongoose=require('mongoose');
const solutionSchema=new mongoose.Schema({
  pyq:String, file:String,
  uploadedAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model('Solution',solutionSchema);

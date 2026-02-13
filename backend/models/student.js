const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
  name:String, batch:String, role:{type:String,default:'student'}
});
module.exports=mongoose.model('Student',studentSchema);

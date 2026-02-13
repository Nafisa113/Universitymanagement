const mongoose=require('mongoose');
const routineSchema=new mongoose.Schema({
  day:String, time:String, classLab:String
});
module.exports=mongoose.model('Routine',routineSchema);

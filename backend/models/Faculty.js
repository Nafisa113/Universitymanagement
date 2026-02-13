const mongoose=require('mongoose');
const facultySchema=new mongoose.Schema({
  name:String, designation:String, email:String, phone:String
});
module.exports=mongoose.model('Faculty',facultySchema);

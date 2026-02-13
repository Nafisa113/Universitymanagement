const mongoose=require('mongoose');
const alumniSchema=new mongoose.Schema({
  name:String, photo:String, achievements:String
});
module.exports=mongoose.model('Alumni',alumniSchema);

const mongoose=require('mongoose');
const busSchema=new mongoose.Schema({
  route:String, time:String, pickup:String, drop:String
});
module.exports=mongoose.model('Bus',busSchema);

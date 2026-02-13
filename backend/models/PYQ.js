const mongoose=require('mongoose');
const pyqSchema=new mongoose.Schema({
  year:Number, semester:String, file:String,
  uploadedAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model('PYQ',pyqSchema);

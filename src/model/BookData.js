const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true });
const Schema=mongoose.Schema;

var NewBookSchema=new Schema({
    title: String,
    author: String,
    pages:String,
    images:String
});
var BookData=mongoose.model('Book-Data',NewBookSchema);

module.exports=BookData;
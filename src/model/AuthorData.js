const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true });
const Schema=mongoose.Schema;

var NewAuthorSchema=new Schema({
   
    author: String,
    country: String,
    books: String,
    images: String
});
var AuthorData=mongoose.model('Author-Data',NewAuthorSchema);

module.exports=AuthorData;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/packageDetails',{
    useNewUrlParser: true,}).then(
        () => console.log('Connection to MongoDB successful')
    );

const packageSchema = new mongoose.Schema({
        packageId : {
            type: Number,
            unique:true,
            required:[true,'Required Field']
        },
        name : {
            type: String,
            required : [true,'Required Field']
        },
        itemType:{
            type : String,
            required : [true,'Required Field']
        },
});

const packageModel = mongoose.model('myPackage',packageSchema);
module.exports = packageModel;
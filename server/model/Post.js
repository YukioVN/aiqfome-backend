let mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    $type:String, 
    required: [true, "Campo obrigatório"],
    unique: true,
  },
  urlImage: {
    $type:String, 
    required: [true, "Campo obrigatório"]
  },
  urlRecipe: {
    $type:String, 
    required: [true, "Campo obrigatório"]
  } 
}, {
    typeKey: '$type',
    timestamps: true
  }
);

module.exports = mongoose.model('posts', PostSchema);
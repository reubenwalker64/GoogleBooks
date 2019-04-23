const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const BookSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  desription: {
      type: String,
      required: true
  }
  authors: {
    type: Schema.Types.Array
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;

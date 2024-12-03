const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    seriesName: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true,
    },
    form: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    publisher: {
        type: String
    },
    publicationYear: {
        type: Number
    },
    subgenres: {
        type: String
    },
    lexile: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
  }, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
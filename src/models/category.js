const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryImage: {
        type: String,
    },
    isPopular: {
        type: Boolean,
    },
    subCategories: [{
        subCategoryName: {
            type: String,
            required: true
        },
        subCategoryImage: {
            type: String,
        },
        subCategoryIsPopular: {
            type: Boolean
        }
    }]
})

module.exports = mongoose.model('Category', Schema)
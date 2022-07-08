const Category = require('../../models/category')

const CategoryController = {

    async createCategory(req, res) {

        const bodyData = req.body

        try {
            const category = await Category.create(bodyData)
            return res.status(200).json(category)

        } catch (err) {
            return res.status(400).json(err)
        }
    },


    async getCategories(req, res) {
        try {
            const categories = await Category.find()
            return res.status(200).json(categories)
        } catch (err) {
            return res.status(400).json(err)
        }
    },


    async updateCategory(req, res) {

        const bodyData = req.body
        const { category_id } = req.params

        try {

            const updatedCategory = await Category.findByIdAndUpdate(category_id, bodyData, { new: true })
            return res.status(200).json(updatedCategory)

        } catch (err) {
            return res.status(400).json(err)
        }
    },

    async deleteCategory(req, res) {
        const { category_id } = req.params

        try {
            const deletedCategory = await Category.findByIdAndDelete(category_id)
            return res.status(200).json(deletedCategory)

        } catch (err) {
            return res.status(400).json(err)
        }
    },

    async getCategoryById(req, res) {

        const { category_id } = req.body

        try {

            const category = await Category.findById(category_id)
            return res.status(200).json(category)

        } catch (err) {
            return res.status(400).json(err)
        }
    }


}

module.exports = CategoryController
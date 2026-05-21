const category = require('../models/category.model')
const catchAsync = require('../utilites/catchAsync.util')


const getCategorys = catchAsync(
   async (req,res)=>{
        const categorys = await category.find()
        return res.status(200).json({massage:'category list' , data:categorys})
    }
)

const addCategory = catchAsync(
    async (req,res) => {
        const {title,isActive,isDeleted} = req.body
        const newCategory = await category.create({title,isActive,isDeleted})
        return res.status(201).json({massage:"category added" , data:newCategory})
    }
)

const toggleCategoryActive =catchAsync(
    async (req,res)=>{
        const id = req.params.id 
        const myCategory = await category.findById(id);

        if(!myCategory){
            return res.status(404).json({status:'erorr' , Message:'category not found'})
        }
        myCategory.isActive = !myCategory.isActive
        await myCategory.save()
        res.status(201).json({massage:"Category status updated" , data:myCategory})
    }
)

const deleteCategory = catchAsync(
    async (req,res)=>{
        const id = req.params.id 
        const myCategory = await category.findById(id);

        if(!myCategory){
            return res.status(404).json({status:'erorr' , Message:'category not found'})
        }
        myCategory.isDeleted = !myCategory.isDeleted
        await myCategory.save()
        res.status(201).json({massage:"Category deleted"})
    }
)

module.exports = {
    addCategory,
    deleteCategory,
    toggleCategoryActive,
    getCategorys
}
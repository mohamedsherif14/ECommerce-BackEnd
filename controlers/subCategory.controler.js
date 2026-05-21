const subCategory = require('../models/subCatgeory.model')
const category = require('../models/category.model')
const catchAsync = require('../utilites/catchAsync.util')

const addSubCategory = catchAsync(
    async(req,res)=>{
        const {title,categoryid} = req.body
        const myCategory = await category.find({_id:categoryid})
        if(!category){
            return res.status(404).json({ message:"category not found"})
        }
        const mySubCategory = await subCategory.create({title,categoryid})
        res.status(201).json({massage:'subCategory add',data:mySubCategory})
    }
)


const getSubCategorys = catchAsync(
    async (req,res) => {
        const mySubCategorys = subCategory.find()
        res.status(200).json({massage:'subCategorys' ,data:mySubCategorys})
    }
)

const toggleSubCategoryActive =catchAsync(
    async (req,res)=>{
        const {id} = req.parms 
        const mySubCategory = await subCategory.findById(id);

        if(!mySubCategory){
            return res.status(404).json({status:'erorr' , Message:'subCategory not found'})
        }
        mySubCategory.isActive = !mySubCategory.isActive
        await mySubCategory.save()
        res.status(201).json({massage:"subCategory status updated" , data:mySubCategory})
    }
)

const deletSubCategory =catchAsync(
    async (req,res)=>{
        const {id} = req.parms 
        const mySubCategory = await subCategory.findById(id);

        if(!mySubCategory){
            return res.status(404).json({status:'erorr' , Message:'subCategory not found'})
        }
        mySubCategory.isDeleted = !mySubCategory.isDeleted
        await mySubCategory.save()
        res.status(201).json({massage:"subCategory status updated" , data:mySubCategory})
    }
)

module.exports = {
    addSubCategory,
    getSubCategorys,
    toggleSubCategoryActive,
    deletSubCategory
}


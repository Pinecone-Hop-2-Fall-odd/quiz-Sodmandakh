import { CategoryModel } from "../models/category-model.js";


export const getCategory = async (req, res) => {
    try {
      const categories = await CategoryModel.find();
  
      res.status(200).json({ categories: categories });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const createCategory = async (req, res) => {
    console.log(req.body)
    try {
      const body = req.body;
  
      console.log(body)
  
      const category = await CategoryModel.create({
        category: body.category,
      });
  
      res.status(269).json({ category });
    } catch (error) {
      res.status(569).json({ error: error.message });
    }
  };




export const deleteCategoryAndQuizzes = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await CategoryModel.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const deletedCategory = await CategoryModel.findByIdAndDelete(id);

    if (deletedCategory) {
      res.status(200).json({ message: "Category deleted successfully", category: deletedCategory });
    } else {
      res.status(500).json({ message: "Failed to delete category" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

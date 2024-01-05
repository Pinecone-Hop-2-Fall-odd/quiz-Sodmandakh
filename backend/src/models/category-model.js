import mongoose from "mongoose";

    const categorySchema = new mongoose.Schema({
        category   : String
      });
  


export const CategoryModel = mongoose.model("category", categorySchema);
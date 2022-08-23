const { Category } = require("../model/category");
const fs = require("fs");
const { User } = require("../model/user");

class CategoryController {
  static async getAllCategory(req, res) {
    const categorys = await Category.findAll({
      include:User
    });
    res.send([...categorys]); //axios  -- > res.data
  }

  static async getCategoryById(req, res) {
    const category = await Category.findOne({
      where: {
        id: req.body.id,
      },
    });
    res.send({...category});
  }

  static async addCategory(req, res) {
    if (req.user) {
      await Category.create({
        ...req.body,
        picUrl: req.file.filename,
        userId: req.user.id,
      });
      res.send({ status: "ok" });
    } else {
      res.send({ error: "user not found" });
    }
  }

  static async deleteCategory(req, res) {
    if (req.user) {
      await Category.destroy({ where: { id: req.body.id } });
      res.send({ status: "category deleted" });
    } else {
      res.send({ error: "user not found" });
    }
  }

  static async updateCategoryPicUrl(req, res) {
    if (req.user) {
      let x = await Category.findOne({ where: { id: req.body.id } });
      let str =
        __dirname.substring(0, __dirname.lastIndexOf("controller")) +
        "public\\images\\category\\" +
        x.picUrl;
      fs.unlinkSync(str, (err, ok) => {
        if (err) err;
      });
      await Category.update(
        { picUrl: req.file.filename },
        { where: { id: req.body.id } }
      );
      res.send({ status: "category update" });
    } else {
      res.send({ error: "user not found" });
    }
  }
}

module.exports = CategoryController;

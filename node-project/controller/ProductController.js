const { Category } = require("../model/category");
const { Product } = require("../model/product");
const { User } = require("../model/user");

class ProductController {
    static async getAllProduct(req, res) {
        const products = await Product.findAll({
          include:User
        });
        res.send([...products]);

    }

    static async addProduct(req,res){
        if(req.user){
            await Product.create({ 
              ...req.body, 
              userId: req.user.id ,
              picUrl: req.file.filename,
              date: new Date(),
              bool:0})

              res.send({
                status: "ok"
              })
        }else{
            res.send({error:"User not found"})
        }
    }
    static async deleteProduct(req,res){
        if(req.user){
            await Product.destroy({where: {id: req.body.id } })
            res.send({ status: "deleted" })
        } else {
          res.send({
            status: "error"
          })}
    }
      static async getAllCocktails(req,res){
        const cate = await Category.findOne({
             where: {
              name:"COCKTAILS"
             },

        })
        
        const cocktail = await Product.findAll({
          where:{
              categoryId:cate.id,
          }
        })
        res.send([...cocktail])
      }


      static async getProductById(req, res) {
        const product = await Product.findOne({
          where: {
            id: req.body.id,
          },
        });
        res.send({ product });
      }
      static async getProductsByCategoryId(req, res) {
        const cat = await Category.findOne({
          where:{
            name:req.body.catName
          }
        })
        const products = await Product.findAll({
          where: {
            categoryId: cat.id,
          },
        });

        res.send([...products]);
      }

      static async getProductsByUserId(req, res) {
        const products = await Product.findAll({
          where: {
            userId: req.body.userId,
          },
        });
        res.send([...products]);
      }
}
module.exports = ProductController;

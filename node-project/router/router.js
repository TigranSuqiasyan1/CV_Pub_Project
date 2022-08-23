const express = require("express");
const router = express.Router();

const CategoryController = require("../controller/CategoryController");
const ProductController = require("../controller/ProductController");
const UserController = require("../controller/UserController");
const DancerController = require("../controller/DancerController")
const { uploadCategory, uploadProduct, uploadUser, uploadEvent, uploadDancer } = require("./multer");
const EventController = require("../controller/EventController");

/**user detalis */
router.post("/getAllUser", UserController.getAllUser)
router.post("/registerUser", uploadUser.single("avatar"), UserController.registerUser)
router.post("/loginUser", UserController.loginUser)
router.post("/getUser", UserController.getUser)
router.post("/logout", UserController.logout)
router.post("/updateUserPicUrl", uploadUser.single("avatar") ,UserController.updateUserPicUrl)
router.post("/editUser", uploadUser.single("avatar") ,UserController.editUser)
router.post("/deleteUser",UserController.deleteUser)

/**event */
router.post("/getAllEvent", EventController.getAllEvent)
router.post("/getEventToday", EventController.getEventToday)
router.post("/getEventByUserId", EventController.getEventByUserId)
router.post("/addEvent", uploadEvent.single("avatar"), EventController.addEvent)
router.post("/deleteEvent",EventController.deleteEvent)


/**category */
router.post("/getAllCategory", CategoryController.getAllCategory)
router.post("/addCategory", uploadCategory.single("avatar") ,CategoryController.addCategory)
router.post("/updateCategoryPicUrl", uploadCategory.single("avatar") ,CategoryController.updateCategoryPicUrl)
router.post("/deleteCategory", CategoryController.deleteCategory)
router.post("/getCategoryById", CategoryController.getCategoryById)



/**product */
router.post("/getAllProduct", ProductController.getAllProduct)
router.post("/getProductById", ProductController.getProductById)
router.post("/getProductsByCategoryId", ProductController.getProductsByCategoryId)
router.post("/getProductsByUserId", ProductController.getProductsByUserId)
router.post("/addProduct", uploadProduct.single("avatar"), ProductController.addProduct)
router.post("/deleteProduct", ProductController.deleteProduct)

/**dancer */
router.post("/getAllDancer", DancerController.getAllDancer)
router.post("/addNewDancer",uploadDancer.single("avatar"), DancerController.addNewDancer)
router.post("/deleteDancer", DancerController.deleteDancer)

/**cocktails */
router.post("/getAllCocktails",ProductController.getAllCocktails) 
/**params */


module.exports = { router };





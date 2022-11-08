const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");



//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.post("/create", homeController.create);
// router.get("/create/posts", homeController.getPosts);
router.get("/posts", homeController.getPosts);
router.put("/update/:id", homeController.update);

router.delete('/delete/:id', homeController.deletePost);


module.exports = router;

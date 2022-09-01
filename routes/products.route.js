const router =require("express").Router

const {getProducts,createProducts, updateProducts,deleteProducts}=require("../controllers/products.controller")

const productRouter=router();

productRouter.get("/", getProducts);
productRouter.patch("/", updateProducts);
productRouter.post("/", createProducts);
productRouter.delete("/", deleteProducts);


module.exports=productRouter;
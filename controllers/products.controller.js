const getProducts=(request, response)=>{
    response.status(200).send("get all products")
}
const createProducts=(request, response)=>{
    response.status(201).send("Product has been update")
}
const updateProducts=(request, response)=>{
    response.status(200).send("Product is updated")
}
const deleteProducts=(request, response)=>{
    response.status(200).send('Product is deleted')
}

module.exports={getProducts,createProducts,updateProducts,deleteProducts}
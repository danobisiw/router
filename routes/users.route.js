const router= require ("express").Router

const {createUser,deleteUser, getUsers,updateUser} =require ("../controllers/user.controller")

//instantiate user router
const userRouter= router()

userRouter.get("/", getUsers);
userRouter.patch("/", updateUser);
userRouter.post("/", createUser);
userRouter.delete("/", deleteUser);




module.exports=userRouter;
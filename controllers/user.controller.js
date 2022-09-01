
const getUsers= (request, response) => {
  response.status(200).send("welcome to my server");
};

const createUser= (request, response)=>{
    response.status(201).send("Your data is saved")
}

const updateUser=(request, response)=>{
    response.status(200).send("Data is replaced")
}
const deleteUser=(request, response)=>{
    response.status(200).send("data is deleted")
}

module.exports={getUsers,updateUser,createUser,deleteUser}
const express = require('express');
const router = express.Router();
const {handleGetAllUser , getUserById , editUserById , deleteUserById , createUser} = require('../Controller/userController')

router.route("/").get(handleGetAllUser).post(createUser)

router
     .route("/:id")
     .get(getUserById)
     .patch(editUserById)
     .delete(deleteUserById)





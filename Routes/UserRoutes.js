const express = require('express');

const { getUsers, createUser, deleteUser, editUser } = require('../Controllers/UserControllers')

const userRouter = express.Router()

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

userRouter.route('/user/:id')
    .delete(deleteUser)
    .put(editUser)

module.exports = userRouter;
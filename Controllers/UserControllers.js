const User = require('../Models/User')

const createUser = async (req, res) => {
    try {
        //* Guardar info en nuestra Base de Datos
        const newUser = new User(req.body);
        await newUser.save();
        res.json({success: true, message: 'User Created successfully!!', id: newUser._id})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await User.find().populate('favProducts')
        res.json({ success: true, users })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const deleteUser = async(req, res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndDelete(id)
        console.log(result)

        if(!result){
            throw new Error("Usuario no existe, imposible de eliminar!!")
        }
        res.json({ success: true, message: "Elemento borrado" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const editUser = async(req, res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndUpdate(id, req.body, {new: true})
        console.log(result)
        if(!result){
            throw new Error("Usuario no existe, imposible de editar!!")
        }
        res.json({ success: true, message: "Usuario editado con exito!" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

module.exports = { createUser, getUsers, deleteUser, editUser }
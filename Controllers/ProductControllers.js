const Product = require('../Models/Product')

const createProduct = async (req, res) => {
    try {
      // const user = await User.findById(req.auth.id)
      // if (!user.admin) {
      //   throw new Error('No estás autorizado')
      // }
      const newProduct = new Product(req.body)
      await newProduct.save();
      res.json({
        success: true,
        message: 'Producto creado',
        productId: newProduct._id
      })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  }

  module.exports = createProduct
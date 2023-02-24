const mongoose = require('mongoose');

// Por si sale una advertencia de strictQuery, s epuede dejar tanto en true como en false
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB).then(() => console.log('Base de datos conectada!!!'))
const mongoose = require('mongoose')

const password = 'Gb8DsehyVCtxgPQL'
const dbname = 'histkey-db'
const uri = `mongodb+srv://jorlp:${password}@cluster0.awsvfpe.mongodb.net/${dbname}?
    retryWrites=true&w=majority`
// const uri = `mongodb+srv://jorlp:<password>@cluster0.awsvfpe.mongodb.net/?retryWrites=true&w=majority`

module.exports = async () => {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('######################### SUCCESSFUL CONNECTION TO DB #########################')
    } catch (err) {
        console.error(err)
    }
}

// module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
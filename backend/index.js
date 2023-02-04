const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const userController = require('./controller/user')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://ArindamDan:Arindam12345@cluster0.nl5g5.mongodb.net/Arindam-DB', (err) => {
    if (err) {
        console.log('DB Err.')
    } else {
        console.log('DB Connected.')
    }
}); 

app.post('/add-user', userController.signup)
app.post('/login-user', userController.signin)
app.post('/url/add-order' ,userController.addtocart)
app.get('/url/getorder' ,userController.getorder)

app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})
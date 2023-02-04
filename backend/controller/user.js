const UserModel = require('../models/user')
const nodemailer = require('nodemailer')
const bcrypt = require("bcrypt")
const ProductModel = require('../models/product');
const { default: mongoose } = require('mongoose');
module.exports.signup = async (req, res) => {
    console.log(req.body)

    // email should not exist alreday
    const hashPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashPassword

    const newUser = new UserModel({
        phone: req.body.phone,
        password: req.body.password,
        name : req.body.name
    });

    newUser.save().then(() => {
        res.send({ code: 200, message: 'Signup success' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err' })
    })

}


module.exports.signin = (req, res) => {
    //email and password
    const phone = req.body.phone;
    const password = req.body.password;
    //find user exist or not
    UserModel.findOne({ phone })
        .then(user => {
            //if user not exist than return status 400
            if (!user || user==null) return res.send({ code: 500, message: 'user not found' })
              console.log(user)
            //if user exist than compare password
            //password comes from the user
            //user.password comes from the database
            bcrypt.compare(password, user.password, (err, data) => {
                //if error than throw error
                if (err)  return res.send({ code: 404, message: 'password wrong' })

                //if both match than you can do anything
                if (data) {
                    return res.send({
                    phone: data.phone,
                    code: 200,
                    message: 'user Found',
                    token: 'hfgdhg'
                })
                } else {
                    return res.send({ code: 401, message: 'Invalid credientials' })
                }

            })

        })
}


module.exports.addtocart = async (req, res) => {
    console.log(req.body)

    const newOrder = new ProductModel({
        user_id: req.body.user_id,
        sub_total: req.body.sub_total,
        phone_number : req.body.phone_number 
    });

    newOrder.save().then(() => {
       return res.send({ code: 200, message: 'Succesfully added order' })
    }).catch((err) => {
       return res.send({ code: 500, message: ' Err is coming' })
    })

}

module.exports.getorder = async (req,res) => {
    let userid = req.query.user_id;
    // console.log(user_id);

    ProductModel.findOne({ user_id : userid}).then(data => {
         res.send({code :200 ,message : "get the order details" ,data : data});
    }).catch(err =>{
        res.send({ code: 500, message: ' Err is coming 1' })
    })
}



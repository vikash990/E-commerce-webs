const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../modals/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  
  const userData = {
    first_name: req.body.first_name,
    number: req.body.number,
    email: req.body.email,
    password: req.body.password,
    
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json( {"registered": "User already exists" ,
        "state":1
                    })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            number: user.number,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.status(400).json({ error: 'Password Incorrect' })
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


users.get('/profile',(req,res)=>{

 var decode=jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

 User.findOne({

   where:decode.id

})
.then(user=>{
  
 if(user){
   res.json(user)
 } else {
   
   res.send('User does not exist')
 }

})
.catch(err=>{
  res.send('error:'+err)
})


})

users.get('/header',(req,res)=>{

  var decode=jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
 
  User.findOne({
 
    where:decode.id
 
 })
 .then(user=>{
   
  if(user){
    res.json(user)
  } else {
    
    res.send('User does not exist')
  }
 
 })
 .catch(err=>{
   res.send('error:'+err)
 })
 
 
 })


module.exports = users

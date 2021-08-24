var express = require('express');
var router = express.Router();
const user = require('../models/user')

/* GET users listing. */
router.get('/', async(req,res)=>{
  const list = await user.find()
  res.send({
    list,
    message:"users list"
  })
})
// POST user
router.post('/register', async(req,res)=>{
  await new user(req.body).save()
  res.send({
    message:"user added"
  })
})
module.exports = router;

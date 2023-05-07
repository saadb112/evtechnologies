const mongoose = require('mongoose');
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const sgmail = require("@sendgrid/mail")
const api = "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"
const port = process.env.PORT || 8000
sgmail.setApiKey(api)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.use(express.json())
const database = (module.exports = () => {
    
    try {
      mongoose.connect(
        "mongodb+srv://saadb112:saadbhaizindabaad1@cluster0.vbcrt.mongodb.net/?retryWrites=true&w=majority"
      );
      console.log("Database connected succesfully");
    } catch (error) {
      console.log(error);
      console.log("Database connection failed");
    }
  });
  
  database();

  const schema = mongoose.Schema({
    name : String,
    email : String,
    msg : String
  })
  const User = mongoose.model("EVTechnologies", schema)
  app.post("/contact", async(req,res)=>{
    const {name, email, msg} = req.body
 const create = await User.create({
    name,
    email,
    msg
 })
 await create.save()
 const message = {
  to : "saadbaig789@gmail.com",
  from : "evtechnologies11@gmail.com",
  subject : "New Message From Evtechnologies",
  text : `
  Name : ${name},
  Email : ${email},
  Message : ${msg}
  `
 }
 sgmail.send(message).then((response)=>{
console.log("email sent")
 })
})
app.listen(port, ()=>{
    console.log("started")
})
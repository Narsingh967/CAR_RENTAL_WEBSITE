// const express = require('express');
// const router = express.Router();
// const users = require("../model/userSchema")



// router.post('/rentnow',async (req,res)=>{
//   try {


// console.log("1")

//     data = await users.create({
//           user_email    : data?.email,
//           location   : "req.body.location",
//           full_name      : "req.body.rental_amount",
//           phone      : "req.body.location",
//           adhar_number  : "req.body.pick_up_date",
//           lpu_id   : "req.body.return_date",
//           gender   : "req.body.return_date"
//     })
//     return res.json({message:"success", data:data})
// } catch{
//     console.log("error in try block")
// }
// })


// exports.module=router


const express = require('express');
const router = express.Router();
const users = require("../model/userSchema"); 


router.use(express.json());

router.post('/rentnow', async (req, res) => {
  try {
    console.log("1"); // Debugging log

    console.log(req.body)

    const data = await users.create({
      user_email: req.body.email, 
      location: req.body.location,
      full_name: req.body.name, 
      phone: req.body.phoneNumber, 
      adhar_card: req.body.adhar_card, 
      lpu_id: req.body.lpu_id, 
      gender: req.body.gender 
    });
    return res.json({message: "success", data: data, success:true});
  } catch (error) {
    console.error("error in try block", error); 
    res.status(500).json({message: "Internal Server Error", error: error.toString(), success:false});
  }
});

module.exports = router; 

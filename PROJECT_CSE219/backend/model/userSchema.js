
const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new Schema({
  user_email : {
        type: String,
        required: true,
    
  },

  location: {
        type: String,
        required: true,
    },

  adhar_card : {
    type: Number,
    required: true,
  },

  full_name : {
    type: String,
    required: false,
},

lpu_id : {
  type: Number,
  required: true,
},

phone : {
  type: Number,
  required: true,
},

gender : {
    type: String,
    required: true,
  },
  
}
, {
    timestamps: true
});

const userRentals = mongoose.models.userRentals || mongoose.model("userdata2", schema);


module.exports = userRentals ;
const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");


const usuarioSchema = new Schema(
  {
    userName: {
      type: String,
      required: false,
      trim: true
    },
    fullName: {
      type: String,
      required: false,
      trim: true
    },
    phoneNumber: {
      type: Number,
      required: false,
      trim: true
    },
    token: {
      type: String
    },
    // confirmado: {
    //   type: Boolean,
    //   default: false
    // },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    favoriteCoins: [{
      type: String,
    }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Usuario = model("Usuario", usuarioSchema);

module.exports = Usuario;

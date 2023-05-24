const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    apellidos: {
      type: String,
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
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

// usuarioSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
//   return await bcrypt.compare(passwordFormulario, this.password);
// };


const Usuario = model("Usuario", usuarioSchema);

module.exports = Usuario;

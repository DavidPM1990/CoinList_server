// import nodemailer from "nodemailer";

// export const emailRegistro = async (datos) => {
//   const { email, nombre, token } = datos;

//   const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // Información del email

//   const info = await transport.sendMail({
//     from: '"CoinList - Cotizador de Cryptomonedas" <davidpardomartin1990@gmail.com>',
//     to: email,
//     subject: "CoinList - Comprueba tu cuenta",
//     text: "Comprueba tu cuenta en CoinList",
//     html: `<p>Hola: ${nombre} Comprueba tu cuenta en CoinList</p>
//     <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 

//     <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    
//     <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    
//     `,
//   });
// };

// export const emailOlvidePassword = async (datos) => {
//   const { email, nombre, token } = datos;

//   const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // Información del email

//   const info = await transport.sendMail({
//     from: '"CoinList - Cotizador de Cryptomonedas" <davidpardomartin1990@gmail.com>',
//     to: email,
//     subject: "CoinList - Reestablece tu Password",
//     text: "Reestablece tu Password",
//     html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>

//     <p>Sigue el siguiente enlace para generar un nuevo password: 

//     <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
    
//     <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    
//     `,
//   });
// };

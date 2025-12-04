import jwt from 'jsonwebtoken';
import 'dotenv/config';
const secret_key = process.env.JWT_SECRET_KEY || "asdfasdfasdfasdfasdf"  ;
console.log("secret_key en authentication", secret_key)
  // Middleware para verificar el token JWT
  export const authentication = (req, res, next) => {
    //console.log()
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.sendStatus(403);
        next();
    });
  }
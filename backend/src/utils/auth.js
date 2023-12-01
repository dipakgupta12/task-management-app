import bcrypt from "bcrypt";
import crypto from "crypto";

export const hashAuth = {
   hashPassword : async (password) => {
    const salt = await crypto.randomBytes(16).toString('hex');
    const hashedPassword = await new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        else resolve(derivedKey.toString('hex'));
      });
    });
    console.log("hash auth", salt, password,hashedPassword)
    return hashedPassword;
  },
  
   passwordMatch : async (password, hashedPassword) => {
    const [salt, storedHash] = hashedPassword.split(':');
    const derivedKey = await new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, key) => {
        if (err) reject(err);
        else resolve(key.toString('hex'));
      });
    });
    console.log("getting inm match", password, hashedPassword, storedHash, salt)
    return derivedKey === storedHash;
  },

  generateToken: (payload) => {
    return jwt.sign(payload, process.env.MY_SECURITY_TOKEN_KEY, {});
  },

  verifyToken: (token) => {
    try {
      const decoded = jwt.verify(token, process.env.MY_SECURITY_TOKEN_KEY);
      return decoded;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
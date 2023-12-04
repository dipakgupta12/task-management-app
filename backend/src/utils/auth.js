import jwt from "jsonwebtoken";

export const hashAuth = {
   hashPassword : async (password) => {
    return password;
  },
  
   passwordMatch : async (password, hashedPassword) => {
    return password === hashedPassword
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

const bcrypt = require("bcrypt");
async function hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      console.error(error);
      throw new Error("Password hashing failed");
    }
  }


  module.exports=hashPassword;
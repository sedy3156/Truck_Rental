const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const clientModel = require("../models/client.js");
require("dotenv").config();

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await clientModel.findOne({ where: { email } });

    if (!client) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, client.password);

    if (!isPasswordValid && client.status==1) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: client.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred during login" });
  }
};

// exports.showing = async (req, res) => {
//   const token = req.headers.authorization.split(" ")[1]; // Extract the token from the request headers

//   try {
//     const decodedToken = jwt.verify(token, "your_secret_key");
//     const userId = decodedToken.id;
//     const username = decodedToken.username;
//     const role = decodedToken.role;

//     // Use the user information for authorization or other purposes
//     // ...
//   } catch (error) {
//     // Handle token verification errors
//   }
//   try {
//     const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
//     const clientId = decodedToken.id;

//     return res.json({ clientId });
//     console.log("Client ID:", clientId);
//   } catch (error) {
//     return res.json("tena tsy mety aloha a");
//   }
// };

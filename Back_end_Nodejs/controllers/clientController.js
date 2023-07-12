const clientModel = require("../models/client.js");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const path = require("path");
require("dotenv").config();
const sendEmail = require("../utils/sendEmail.js");
const generateRandomString = require("../utils/generatorRandomString.js");
const hashPassword = require("../utils/hashPassword.js");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const crypto = require("crypto");

exports.createClient = async (req, res) => {
  // this is the code validation for new user
  const number_for_email_verification = generateRandomString(5);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    name,
    email,
    address,
    phone_number,
    password,
    password_confirmation,
  } = req.body;
  try {
    const hashedPassword = await hashPassword(password);

    const result = await clientModel.create({
      name: name,
      email: email,
      address: address,
      phone_number: phone_number,
      password: hashedPassword,
      validation_code: number_for_email_verification,
      status: 0,
    });
    // after the user is created it send an email in his account
    sendEmail(name, email, number_for_email_verification);
    return res.json({
      message: "Record created successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: errors.array(),
    });
  }
};

exports.account_verification = async (req, res) => {
  const { validation_codes } = req.body;
  try {
    const client = await clientModel.findOne({
      where: { validation_code: validation_codes },
    });
    if (!client) {
      return res.status(401).json({ message: "Invalid validation code" });
    } else {
      try {
        await clientModel.update(
          { status: 1 },
          { where: { validation_code: validation_codes } }
        );
        // clientModel.delete({where:{id:client.id}})
        const token = jwt.sign({ id: client.id }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });

        return res.json({ token });
      } catch (error) {
        return res.status(500).json({
          error: "An error occurred while updating the account state",
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
};



//fonction for retrieving all clients
exports.getClients = (req, res) => {
  clientModel
    .findAll({
      attributes: [
        "name",
        "email",
        "address",
        "phone_number",
        "password",
        "validation_code",
      ],
    })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Unable to fetch records!",
      });
    });
};

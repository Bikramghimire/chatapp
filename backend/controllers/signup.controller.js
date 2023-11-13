const Joi = require("joi");
const User = require("../models/user.modal");

module.exports = {
  signUpUser: async (req, res) => {
    try {
      const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().required(),
        password: Joi.string().min(6).max(200).required(),
      });
      console.log("the request values are", req.body);
      const { error, value } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const newUser = new User(value);
      await newUser.save();
      res
        .status(201)
        .json({ success: true, message: "User is successfully created" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

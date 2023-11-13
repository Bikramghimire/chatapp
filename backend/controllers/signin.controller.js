const Joi = require("joi");
const User = require("../models/user.modal");

module.exports = {
  signInUser: async (req, res) => {
    try {
      const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(6).max(200).required(),
      });
      console.log("the request values are", req.body);
      const { error, value } = schema.validate(req.body);
      const { email, password } = value;
      console.log("the response value is-----", error);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const user = await User.findOne({ email, password });
      if (user) {
        res.json({ success: true, message: "signin successfull", data: user });
      } else {
        res.json({
          success: false,
          message: "Invalid username and password",
        });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

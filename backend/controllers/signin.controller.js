const Joi = require("joi");
const User = require("../models/user.modal");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  console.log("the user", user?._id.toString());
  return jwt.sign(
    {
      _id: user?._id.toString(),
      name: user?.username,
      email: user?.email,
    },
    process.env.SECRET_KEY
  );
};

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

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const user = await User.findOne({ email, password });
      if (user) {
        const responseToken = await generateToken(user);
        user.token = responseToken;
        res.json({
          success: true,
          message: "signin successfull",
          data: user,
          token: responseToken,
        });
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

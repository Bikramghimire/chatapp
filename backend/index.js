const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const signUpRoute = require("./routes/signup.route");
const signInRoute = require("./routes/signin.route");
const cors = require("cors");
dotenv.config();

const mongoDB_URL = process.env.MONGO_URL;
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongoDB_URL)
  .then(() => console.log("mongodb is connected successfully"))
  .catch((err) => console.log("mongodb conmnection is failed", err.message));

app.get("/", (req, res) => {
  console.log("welcome to the todos app");
});

app.use("/api/signup", signUpRoute);
app.use("/api/signin", signInRoute);

app.use((req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    console.log("the roken", token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
});

app.get("/api/verifytoken", (req, res) => {
  return res.send("this is after authentication");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

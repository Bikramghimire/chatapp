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

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

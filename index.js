require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const AuthRoutes = require("./routes/AuthRoutes");
const RestrauntRoutes = require("./routes/RestrauntRoutes");
const EmployeeRoutes = require("./routes/EmployeeRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const DishRoutes = require("./routes/DishRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/passport-jwt")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.connection.on("error", (error) => console.log(error));

require("./config/passport.js");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", AuthRoutes);
app.use("/api", RestrauntRoutes);
app.use("/api", EmployeeRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", DishRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});

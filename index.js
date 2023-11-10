const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://careerlaksh:Selva%40123@cluster0.fypk9xn.mongodb.net/netflix",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Db Connected");
  });

 app.use("/api/user",userRoutes); 

app.listen(5050, console.log("server started"));

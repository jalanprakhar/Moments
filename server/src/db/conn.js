require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.71yhk.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Connection Successfull`);
  })
  .catch((e) => console.log(e));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

// mongodb://servidor:porta/nomedobanco

const Conn = (url, user, pass, data) => {
  mongoose
    .connect(`${url}/${data}`, {
      user: user, 
      pass: pass, 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.log("bank connection error: ", err));
};

module.exports = Conn;

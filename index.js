const express = require("express");
const session = require("express-session")
const cors = require("cors");
const port = process.env.PORT || 3001;
const Conn = require("./conn/conn");
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use("/list", require("./routes/list.routes"))

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.listen(port);

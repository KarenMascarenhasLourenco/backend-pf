const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
});

const ListModel = mongoose.model("lists", ListSchema);

module.exports = ListModel;

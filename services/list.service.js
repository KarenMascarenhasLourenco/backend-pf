const ListModel = require("../models/list");

class ListService {
  findAll = async () => {
    return await ListModel.find();
  };

  findId = async (id) => {
    return await ListModel.findById(id)
  }
  
  create = async (list) => {
    return await ListModel.create(list);
  };

  edit = async (id, list) => {
    return await ListModel.updateOne({ _id: id }, list);
  };

  delete = async (id) => {
    return await ListModel.deleteOne({ _id: id });
  };
}

module.exports = ListService;

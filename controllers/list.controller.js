const ListService = require("../services/list.service");

const listService = new ListService();

class ListController {
  findAll = async (req, res) => {
    const list = await listService
      .findAll()
      .then((list) => {
        res.status(200).json({ list, success: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
  };
  findId = async (req, res) => {
    await listService
      .findId(req.params.id)
      .then((list) => {
        res.status(200).json({ list, success: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ success: false });
      });
  };
  create = async (req, res) => {
    await listService
      .create(req.body)
      .then((list) => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
  };
  edit = async (req, res) => {
    await listService
      .edit(req.params.id, req.body)
      .then((list) => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
  };
  delete = async (req, res) => {
    await listService
      .delete(req.params.id)
      .then((list) => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
  };
}

module.exports = ListController;

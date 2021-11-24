const express = require("express")
const ListController = require("../controllers/list.controller")
const listController = new ListController();
const router = express.Router()

router.get("/", listController.findAll)
router.get("/:id", listController.findId)
router.post("/create", listController.create)
router.put("/update/:id", listController.edit)
router.delete("/delete/:id", listController.delete)

module.exports = router
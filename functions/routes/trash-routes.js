const express = require("express");

const {
    createTrash,
    getAllTrash,
    getTrashById,
    updateTrashById,
    deleteTrashById,
    markTrashAsFull,
    markTrashAsEmpty
} = require("../controllers/trash-controller");

const router = express.Router();

router.post("/", createTrash);
router.get("/", getAllTrash);
router.get("/:id", getTrashById);
router.put("/:id", updateTrashById);
router.delete("/:id", deleteTrashById);
router.put("/:id/full", markTrashAsFull);
router.put("/:id/empty", markTrashAsEmpty);

module.exports = {
    routes: router
}
const express = require("express");

const {
  getAllTeachers,
  createTeachers,
  getTeachersById,
  updateTeachers,
  deleteTeachers,
} = require("./../controllers/teachersController");

const router = express.Router();

router.route("/").get(getAllTeachers).post(createTeachers);

router
  .route("/:id")
  .get(getTeachersById)
  .put(updateTeachers)
  .delete(deleteTeachers);

module.exports = router;

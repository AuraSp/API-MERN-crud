const Students = require("./../models/studentModel");

// GET ALL STUDENTS FROM STUDENT DATABASE
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Students.find(); //DATABASE OBJECT/TABLE NAME
    res.status(200).json({
      status: "success",
      results: students.length,
      data: {
        students: students,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// CREATE NEW STUDENT
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Students.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// GET SPECIFIC STUDENT BY HIS ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        students: student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// UPDATE CHOSEN STUDENT DATA
exports.updateStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndUpdate(req.params.id, req.body, {
      // after data update - get new student data
      new: true,
      // additionally check data according to DB schema (studenModel)
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        student: student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// DELETE SPECIFIC STUDENT BY HIS ID
exports.deleteStudent = async (req, res) => {
  try {
    await Students.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

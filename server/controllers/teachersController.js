const Teachers = require("./../models/teachersModel");

// GET ALL TEACHERS FROM STUDENT DATABASE
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teachers.find(); //DATABASE OBJECT/TABLE NAME
        res.status(200).json({
            status: "success",
            results: teachers.length,
            data: {
                teachers: teachers,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

// CREATE NEW TEACHER
exports.createTeachers = async (req, res) => {
    try {
        const newTeachers = await Teachers.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                teacher: newTeachers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

// GET SPECIFIC TEACHER BY HIS ID
exports.getTeachersById = async (req, res) => {
    try {
        const teacher = await Teachers.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                teachers: teacher,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

// UPDATE CHOSEN TEACHER DATA
exports.updateTeachers = async (req, res) => {
    try {
        const teacher = await Teachers.findByIdAndUpdate(req.params.id, req.body, {
            // after data update - get new teachers' data
            new: true,
            // additionally check data according to DB schema (teacherModel)
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                teacher: teacher,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

// DELETE SPECIFIC TEACHER BY HIS ID
exports.deleteTeachers = async (req, res) => {
    try {
        await Teachers.findByIdAndDelete(req.params.id);

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
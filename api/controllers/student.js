// controllers/Student.js
const Student = require("../models/Student.js");

exports.getAllStudent = (req, res) => {
    Student.find()
        .then((Student) => res.json(Student))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Student not found", error: err.message })
        );
};

exports.postCreateStudent = (req, res) => {
    Student.create(req.body)
        .then((data) => res.json({ message: "Student added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Student", error: err.message })
        );
};

exports.putUpdateStudent = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Student", error: err.message })
        );
};

exports.deleteStudent = (req, res) => {
    Student.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Student deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
exports.authlogin = (req, res) => {
    Student.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Student deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
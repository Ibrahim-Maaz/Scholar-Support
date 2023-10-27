// controllers/Donor.js
const Donor = require("../models/Donor.js");

exports.getAllDonor = (req, res) => {
    Donor.find()
        .then((Donor) => res.json(Donor))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Donor not found", error: err.message })
        );
};

exports.postCreateDonor = (req, res) => {
    Donor.create(req.body)
        .then((data) => res.json({ message: "Donor added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Donor", error: err.message })
        );
};

exports.putUpdateDonor = (req, res) => {
    Donor.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Donor", error: err.message })
        );
};

exports.deleteDonor = (req, res) => {
    Donor.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Donor deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
exports.authlogin = (req, res) => {
    Donor.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Donor deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
// controllers/req.js
const REQ = require("../models/req");

exports.getAllReq = (req, res) => { //to get all req
    REQ.find()
        .then((req) => res.json(req))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "REQ not found", error: err.message })
        );
};


exports.getAllReqEmail = (req, res) => {
    const emailParam = req.params.email;
    const { verified } = req.query;
  
    const query = { email: emailParam, verified: verified };
  
    REQ.find(query)
      .then((reqData) => {
        if (reqData.length === 0) {
          res.status(404).json({ message: `REQ not found for email: ${emailParam} and verified: ${verified}` });
        } else {
          res.json(reqData);
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Internal server error", error: err.message })
      );
  };

// exports.getAllReqEmail = (req, res) => { //to get all for a particular email
//     const emailParam = req.params.email;

//     REQ.find({ email: emailParam })
//     .then((reqData) => {
//         if (reqData.length === 0) {
//             res.status(404).json({ message: `REQ not found for email: ${emailParam}` });
//         } else {
//             res.json(reqData);
//         }
//     })
//     .catch((err) =>
//         res.status(500).json({ message: "Internal server error", error: err.message })
//     );
// };
exports.postCreateReq = (req, res) => {
    //variable can be declare here


    // const data = req.body; // Assuming you have data in the request body

    // console.log(JSON.stringify(data, null, 2)); // Log the data on the console
    // res.status(200).json({ message: "REQ added successfully", data });


    // let pending = new Boolean(false);
    REQ.create(req.body)
        .then((data) => res.json({ message: "REQ added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add req", error: err.message })
        );
};

exports.putUpdateReq = (req, res) => {
    

    REQ.findByIdAndUpdate(
      req.params.id,
      { Verified: true },
      { new: true }
    )
      .then((data) => res.json({ message: "Updated successfully", data }))
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Failed to update req", error: err.message })
      );
  };

exports.deleteReq = (req, res) => {
    REQ.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "req deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
// server.js
require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

const app = express();
const cors = require("cors")
app.use(cors());

app.use("/uploads",express.static("uploads"))

// routes
const volunteer = require("./routes/volunteer"); // added
const enrolled = require("./routes/Enrolled");
const job= require("./routes/job.js");
const jobreq= require("./routes/jobreq.js");
const ngo= require("./routes/ngo.js");
const donor= require("./routes/donor.js");
const req= require("./routes/req.js");
const admin= require("./routes/admin.js");
const student= require("./routes/student.js");
// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/volunteer", volunteer); // added
app.use("/api/enrolled",enrolled);
app.use("/api/job", job); // added
app.use("/api/jobreq",jobreq);
app.use("/api/ngo", ngo); // added
app.use("/api/donor", donor); // added
app.use("/api/req",req);
app.use("/api/admin", admin); // added
app.use("/api/student", student); // adding
// setting up port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
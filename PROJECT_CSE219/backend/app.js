
const express = require('express');
const app = express();
const dp = require("./db");
const cors = require('cors');
const path = require('path');
const rent = require("./routers/submitData");

// Connect to the database
dp();

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Define routes
app.use("/api", rent);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

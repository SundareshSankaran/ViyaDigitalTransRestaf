var express = require("express");
var PORT = process.env.PORT || 4002;
// Initialize Express
var app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

  // require a restaf server

// something similar to app.js of restaf server



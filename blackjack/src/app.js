const express = require('express');
const Routes = require( "./router" );
const path = require("path");

const app = express();
app.listen(3000);

// Add this middleware to serve the CSS file.
app.use("/blackjack", Routes.router, express.static(path.join(__dirname, "../public")));
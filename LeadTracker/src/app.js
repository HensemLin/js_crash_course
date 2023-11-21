const express = require( "express" );
const Routes = require( "./router" );
const path = require( "path" );

const app = express()
app.listen(3000);

app.use("/chrome", Routes.router, express.static(path.join(__dirname, "../public")));
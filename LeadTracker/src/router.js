const express = require( "express" );
const controller = require( "./controller" );

const router = express.Router();

router.get("/", controller.chrome_index);

module.exports = {
    router
}
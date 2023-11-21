const express = require('express');
const controller = require( "./controller" );

const router = express.Router();

router.get("/", controller.blackjack_index);

module.exports = {
    router
}
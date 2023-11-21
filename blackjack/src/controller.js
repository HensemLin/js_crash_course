const path = require("path");

const blackjack_index = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}

module.exports = {
    blackjack_index
}
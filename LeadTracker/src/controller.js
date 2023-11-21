const path = require( "path" );

const chrome_index = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}

module.exports = {
    chrome_index
}
const path = require('path');

// HTML Routing

module.exports = (app) => {
    // use "*" path to render index.html file
    app.get("*", (req, res) => {
        res.sendfile(path.join(__dirname, "../public/index.html"));
    });

    // use "/notes" path to render notes.html file
    app.get("/notes", (req, res) => {
        res.sendfile(path.join(__dirname, "../public/notes.html"));
    });


};
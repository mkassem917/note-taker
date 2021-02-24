const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  // READ
  app.get("/api/notes", (req, res) => {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    newNote.id = uuidv4();
    fs.readFile("../db/db.json", "utf8", (err, data) => {
    //   if (err) {
    //     throw err;
    //   }
      data.push(newNote);
      fs.writeFile("../db/db.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("Good to go");
      });
    });

    res.json(newNote);
  });
};

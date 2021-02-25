const notesDataStore = require('../db/dataStore');
const fs = require("fs");
const {v4: uuidv4} = require("uuid");




module.exports = (app) => {

 // Read
app.get("/api/notes", (req, res) => {
    fs.readFile("db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});
//Write new note
app.post("/api/notes", (req, res) => {
            let newNote = req.body;
            newNote.id = uuidv4();
            fs.readFile("db.json", "utf8", function (err, newNote) {
                if (err) {
                    throw err;
                }
                dataStore.push(newNote);
                fs.writeFile("db.json", JSON.stringify(newNote), () => {});

                res.json(newNote);
            });
        });

    };


//     app.get("/api/notes", (req, res) => {
//         res.json(notesDataStore);

//     });

//     app.post("/api/notes", (req, res) => {
//         notesDataStore.push(req.body);
//     });

// };

//     app.post("/api/notes", (req, res) => {
//         let newNote = req.body;
//         newNote.id = uuidv4();
//         fs.readFile("../db/db.json", "utf8", function (_err, newNote) {
//             // if (err) {
//             //     throw err;
//             // }
//             dataStore.push(newNote);
//             fs.writeFile("../db/db.json", JSON.stringify(newNote), () => {});

//             res.json(newNote);
//         });
//     });
 
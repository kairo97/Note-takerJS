const express = require("express");
const router = express.Router();
const fs = require('fs');

// api//notes

router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8",(err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            res.json(notesData);
        }
    });
});
router.post("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            notesData.push(req.body);
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("oh no!");
                    throw err;
                } else {
                    res.send("data added!");
                }
            });
        }
    });
});
// /api/notes/takeouttrash
router.get("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            for (let i = 0; i < notesData.length; i ++) {
                const note = notesData[i];
                if (note.id == req.params.title) {
                    return res.json(note);
                }
            }
            return res.send("no such note");
        }
    });
});
router.put("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            let notesData =  JSOn.parse(data);
            notesData = notesData.map((note) => {
                if (note.title == req.params.title) {
                    return {
                        title: req.body.title,
                        text: req.body.text,
                    };
                } else {
                    return note;
                }
            });
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("oh no!");
                    throw err;
                } else {
                    res.send("data uploaded!");
                }
            });
        }
    });
});

router.delete("./:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
        res.status(500).send("oh no!");
        throw err;
        } else {
            let notesData = JSON.parse(data);
            notesData = notesData.filter((note) => {
                if (note.id == req.params.id) {
                    return false;
                } else {
                    return true;
                }
            });
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("oh no!");
                    throw err;
                } else {
                    res.send("data deleted!");
                }
            });
        }
    });
});

module.exports = router;


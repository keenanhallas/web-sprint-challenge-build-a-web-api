const express = require("express");
const actionsDb = require("../data/helpers/actionModel");

const router = express.Router();

//Get all actions
router.get("/", (req, res) => {
    actionsDb.get()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Get a specific action
router.get("/:id", (req, res) => {
    actionsDb.get(req.params.id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Post an action
//is it better to somehow get the project id from the url?
router.post("/", (req, res) => {
    actionsDb.insert(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Update a specific action
router.put("/:id", (req, res) => {
    actionsDb.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Delete a specific action
router.delete("/:id", (req, res) => {
    actionsDb.remove(req.params.id)
        .then(response => {
            res.status(204).end();
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
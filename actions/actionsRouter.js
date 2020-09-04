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
    
});

//Post an action
router.post("/", (req, res) => {

});

//Update a specific action
router.put("/:id", (req, res) => {
    
});

//Delete a specific action
router.delete("/:id", (req, res) => {
    
});

module.exports = router;
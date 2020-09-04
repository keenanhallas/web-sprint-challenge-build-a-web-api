const express = require("express");
const actionsDb = require("../data/helpers/actionModel");
const projectsDb = require("../data/helpers/projectModel");

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
router.post("/", (req, res) => {
    const action = req.body;
    action.project_id = req.project_id;
    actionsDb.insert(action)
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

// function validateProjectId(req, res, next) {
//     console.log(req.body.project_id);
//     projectsDb.get(req.body.project_id)
//     .then(response => {
//         console.log(response);
//         if(response) {
//             req.project_id = response.id;
//             next();
//         } else {
//             res.status(404).json({ message: "Project not found" });
//         }
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

module.exports = router;
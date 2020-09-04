const express = require("express");
const projectsDb = require("../data/helpers/projectModel");
const { response } = require("express");
const actionRoutes = require("../actions/actionsRouter");

const router = express.Router();

//Get all projects
router.get("/", (req, res) => {
    projectsDb.get()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Get a specific project
router.get("/:id", (req, res) => {
    projectsDb.get(req.params.id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Post a project
router.post("/", (req, res) => {
    projectsDb.insert(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Update a project
router.put("/:id", (req, res) => {
    projectsDb.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        });
});

//Delete a project
router.delete("/:id", (req, res) => {
    projectsDb.remove(req.params.id)
        .then(response => {
            res.status(204).end();
        })
        .catch(err => {
            console.log(err);
        });
});

router.use("/:id/actions", actionRoutes);

// function validateProjectId(req, res, next) {
//     if (req.params.id) {
//         projectsDb.get(req.params.id)
//     } else {
//         next();
//     }
// }

module.exports = router;
const express = require('express');

const {
    createProject,
    readProject,
    readProjectById,
    updateProject,
    deleteProject
} = require('../controllers/project_controller.js');

const router = express.Router();

router
    .post('/projects', createProject)
    .get('/projects', readProject)
    .get('/projects/:id', readProjectById)
    .put('/projects/:id', updateProject)
    .delete('/projects/:id', deleteProject);

module.exports = router;
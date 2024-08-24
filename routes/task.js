const express = require('express');
const taskModel = require('../models/task');
const { createTask, readTask, updateTask, deleteTask } = require('../services/task');

const taskRouter = express.Router();

taskRouter.post('/', async (req, res) => {
  try {
    const task = await createTask(req.body.title, req.body.description, req.body.dueDate, req.body.userId);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

taskRouter.get('/:id', async (req, res) => {
  try {
    const task = await readTask(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

taskRouter.put('/:id', async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body.title, req.body.description, req.body.dueDate);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

taskRouter.delete('/:id', async (req, res) => {
  try {
    await deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = taskRouter;
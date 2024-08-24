const express = require('express');
const router = express.Router();
const { createUser, readUser, updateUser, deleteUser } = require('../services/user');
const { userModel } = require('../models/user');

router.post('/create', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await createUser(username, password, email);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Failed to create user', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await readUser({ _id: id });
    if (!user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to read user', error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const Updates = req.body;
    const user = await updateUser(id, Updates);
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: 'Failed to update user', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete user', error });
  }
});

module.exports = { userRouter: router };
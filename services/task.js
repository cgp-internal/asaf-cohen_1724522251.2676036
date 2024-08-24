const taskModel = require('./models/task');

async function createTask(title, description, dueDate, userId) {
  try {
    const task = new taskModel({ title, description, dueDate, userId });
    await task.save();
    return task;
  } catch (error) {
    throw error;
  }
}

async function readTask(id) {
  try {
    const task = await taskModel.findById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw error;
  }
}

async function updateTask(id, title, description, dueDate) {
  try {
    const task = await taskModel.findByIdAndUpdate(id, { title, description, dueDate }, { new: true });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw error;
  }
}

async function deleteTask(id) {
  try {
    await taskModel.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
}

module.exports = { createTask, readTask, updateTask, deleteTask };
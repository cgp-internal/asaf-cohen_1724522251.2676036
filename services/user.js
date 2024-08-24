const { userModel } = require('./models/user');

const createUser = async (username, password, email) => {
  try {
    const user = new userModel({ username, password, email });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const readUser = async (filter) => {
  try {
    const user = await userModel.findOne(filter).exec();
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id,Updates) => {
  try {
    const user = await userModel.findByIdAndUpdate(id, Updates, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await userModel.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, readUser, updateUser, deleteUser };
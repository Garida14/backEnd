import { getUserByEmail, allUsers } from "../queris/user/getUser.js";
import { createNewUser } from "../queris/user/createUser.js";
import { updateUser } from "../queris/user/updateUser.js";
import { deleteUser } from "../queris/user/deleteUser.js";
//Get user by Email

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Get all users

export const getAllUsersService = async (req, res) => {
  try {
    const users = await allUsers(req);
    res.send(JSON.stringify(users));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Create user

export const createNewUserService = async (req, res) => {
  try {
    const user = await createNewUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Update user

export const updateUserService = async (req, res) => {
  try {
    const user = await updateUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Delete user
export const deleteUserService = async (req, res) => {
  try {
    const user = await deleteUser(req);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

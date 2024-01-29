// create user
// update user
// delete user
// get user
// get users

import { getUserByEmail } from "../queris/user/getUser.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.messsage);
  }
};

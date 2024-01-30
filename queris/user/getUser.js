import fs from "fs";

const userDB = "/Users/23LP9224/Documents/backend/model/users.json";

export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const allUsers = await fs.readFileSync(userDB, "utf-8");
    const parsedUsers = JSON.parse(allUsers);
    if (!parsedUsers) {
      return null;
    }
    const user = parsedUsers.find((user) => user.email === email);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const allUsers = async (req, res) => {
  try {
    const data = fs.readFileSync(userDB, "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    throw new Error(error);
  }
};

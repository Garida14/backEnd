import fs from "fs";

const userDB = "/Users/23LP9224/Documents/backend/model/users.json";

export const updateUser = async (req, res) => {
  const {
    email: upEmail,
    password,
    username,
    followers,
    following,
    img,
  } = req.body;

  try {
    if (
      (!upEmail || !password || !username || !followers || !following || !img,
      g)
    ) {
      throw new Error("Please fill all the fields");
    }
    const users = JSON.parse(fs.readFileSync(userDB, "utf-8"));
    const user = users.find((user) => user.email === upEmail);
    if (!user) {
      throw new Error("User not found");
    }
    const index = users.findIndex((user) => user.email === upEmail);
    const updatedUser = {
      ...user,
      password,
      username,
      followers,
      following,
      img,
    };
    users[index] = updatedUser;
    fs.writeFileSync(userDB, JSON.stringify(users));
    return "User updated successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};

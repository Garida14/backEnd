import fs from "fs";

const userDB = "/Users/23LP9224/Documents/backend/backEnd/model/users.json";

export const deleteUser = async (req, res) => {
  const { email: upEmail } = req.body;
  try {
    const users = await fs.readFileSync(userDB, "utf-8");
    const user = JSON.parse(users);

    const newUsers = user.filter(({ email }) => email !== upEmail);

    console.log(newUsers);
    await fs.writeFileSync(userDB, JSON.stringify(newUsers));

    return "deleted";
  } catch (err) {
    throw new Error(err.message);
  }
};

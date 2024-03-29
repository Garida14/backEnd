import fs from "fs";

const userDB = "/Users/23LP9224/Documents/backend/model/users.json";

export const createNewUser = async (req, res) => {
  const { username, email, password, followers, following, img } = req.body;
  try {
    if (!username || !email || !password || !followers || !following || !img) {
      throw new Error("Please fill all the fields");
    }
    const newUserFile = await fs.readFileSync(userDB, "utf-8");

    console.log(newUserFile);
    const data = JSON.parse(newUserFile);
    if (data.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }
    data.push({
      username,
      email,
      password,
      followers,
      following,
      img,
    });
    await fs.writeFileSync(userDB, JSON.stringify(data));
    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};

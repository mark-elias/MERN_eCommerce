import { Router, Request, Response } from "express";
import { UserModel } from "../models/users";
import { userErrors } from "../errors";
import bcrypt from "bcrypt";
const router = Router();

router.get("/", (req, res) => {
  res.send("this is the Users Page 👥");
});

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      res.status(400).json({ type: userErrors.USERNAME_ALREADY_EXISTS });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username: username,
      password: hashedPassword,
    });

    await newUser.save();
    //might need to change this to res.json()
    res.send("user registered succesfully");
  } catch (err) {
    res.status(500).json({ type: err });
  }
});
//==================================
module.exports = router;

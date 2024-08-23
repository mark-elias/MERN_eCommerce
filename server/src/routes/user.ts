import { Router, Request, Response, NextFunction } from "express";
import { IUser, UserModel } from "../models/users";
import { userErrors } from "../errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = Router();

// Register User
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

// Login user
router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user: IUser = await UserModel.findOne({ username: username });

    if (!user) {
      res.status(400).json({ type: userErrors.NO_USER_FOUND });
      return;
    }

    // to compare the password recieved(password)
    // and the password in the DB(user.password)
    // recieved password must go before DB password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ type: userErrors.WRONG_CREDENTIALS });
      return;
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
  } catch (err) {
    res.status(400).json({ type: err });
    return;
  }
});

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        res.status(403);
        return;
      }

      next();
    });
  }
  res.status(401);
  return;
};
//==================================
module.exports = router;

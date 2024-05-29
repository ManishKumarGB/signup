import express from "express";
import User from "../model/User.js";

const authRouter = express.Router();

// REGISTER
authRouter.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const userExist = await User.find({ username: req.body.username });
    console.log(userExist);
    if (userExist.length !== 0) return res.send("USEREXISTS");
    else {
      const user = await User.create({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      // console.log(user);
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// LOGIN
authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    !user && res.send("USER_NOT_FOUND").status(404);
    // const validate = await bcrypt.compare(req.body.password, user.password);
    const validate = user.password === req.body.password;
    !validate && res.send("WRONG_PASSWORD");

    res.status(200).send(user);
  } catch (err) {
    res.status(500);
  }
});

// RESET
authRouter.put("/reset", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    !user && res.send("USER_NOT_FOUND").status(404);
    // const validate = await bcrypt.compare(req.body.password, user.password);
    const validate = user.password === req.body.password;
    !validate && res.send("WRONG_PASSWORD");

    const newUser = await User.findByIdAndUpdate(
      user._id,
      {
        $set: { password: req.body.newPassword },
      },
      { new: true }
    );
    res.status(200).send(newUser);

    // res.status(200).send(user);
  } catch (err) {
    res.status(500);
  }
});

authRouter.post("/request-password-reset", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    !user && res.send("USER_NOT_FOUND").status(404);
    // const validate = await bcrypt.compare(req.body.password, user.password);
    const validate = user.password === req.body.password;
    !validate && res.send("WRONG_PASSWORD");

    res.status(200).send(user);
  } catch (err) {
    res.status(500);
  }
});

export default authRouter;

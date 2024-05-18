const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");

async function heandleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function heandleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid UserName or Password",
    });

  // const sessionId = uuidv4();
  // setUser(sessionId, user);
  // res.cookie("uid", sessionId);
  // return res.redirect("/");

  const token = setUser(user);
  res.cookie("token", token);
  return res.redirect("/");
}

module.exports = {
  heandleUserSignup,
  heandleUserLogin,
};

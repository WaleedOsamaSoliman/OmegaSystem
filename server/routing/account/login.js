const Authentication = require("../../api/account/authentication");
const login = async (req, res) => {
  const username = req.body.username || undefined;
  const password = req.body.password || undefined;
  const Auth = new Authentication(username, password);
  result = await Auth.Athenticate();
  // console.log(result);
  if (result.state) {
    req.session.is_logged = true;
    req.session.user = result.user;
    res.cookie("is_logged", true);

    // req.cookies.set("is_logged", true);
  }
  res.send(result);
};
module.exports = login;

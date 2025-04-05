const Authentication = require("../../api/account/authentication");
const login = async (req, res) => {
  const username = req.body.username || undefined;
  const password = req.body.password || undefined;

  const Auth = new Authentication(username, password);
  //check if user already logged

  if (!req.session.is_logged) {
    result = await Auth.Athenticate();
    // console.log(result);
    if (result.state) {
      req.session.is_logged = true;
      req.session.user = result.user;
      res.cookie("is_logged", true);

      // req.cookies.set("is_logged", true);
    }
    return res.send(result);
  }
  console.log("USer already logged ...");
  res.send({
    state: false,
    reason: "already.logged",
  });
};
module.exports = login;

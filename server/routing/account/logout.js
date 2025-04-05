const logout = (req, res) => {
  console.log("Logout end point");
  //   destroy the session
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error while destroying the session !");
    }
  });
  res.clearCookie("connect.sid");
  res.clearCookie("is_logged");
  res.send({
    state: true,
  });
  console.log("logged out successfully ...");
};

module.exports = logout;

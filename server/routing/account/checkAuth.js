const checkAuth = (req, res) => {
  if (req.session.is_logged) {
    return res.send({
      state: true,
      user: req.session.user,
      organization: req.session.organizationInfo,
    });
  }
  return res.send({
    state: false,
  });
  //   return res.send(req.session);
};

module.exports = checkAuth;

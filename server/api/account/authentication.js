const Database = require("../../init/database");

class Authentication {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async Athenticate() {
    const username = this.username;
    const password = this.password;
    // check if username and password already exists
    if (!username || !password) {
      return {
        state: false,
        reason: "no.user.or.password",
      };
    }
    // check the username in database or not ...

    const checkUser = await Database.query(
      "SELECT * FROM accounts where username = ?",
      [username]
    );

    if (checkUser.length !== 1) {
      return {
        state: false,
        reason: "username.not.found",
      };
    }
    const checkPass = await Database.query(
      "SELECT * FROM accounts where username = ? and password = ? ",
      [username, password]
    );

    if (checkPass.length !== 1) {
      return {
        state: false,
        reason: "password.wrong",
      };
    }

    const user = checkPass[0];

    return {
      state: true,

      user: {
        id: user.id || "?",
        nickname: user.nickname || "?",
        name: user.name || "?",
        email: user.email || "?",
        phone: user.phone || "?",
        permessions: user.permessions || [],
        role: user.role || "?",
      },
    };
  }
}

module.exports = Authentication;

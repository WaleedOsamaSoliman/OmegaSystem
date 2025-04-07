const { Sequelize: S, DataTypes, DATE } = require("sequelize");
const settings = require("../config/settings");

const permessionsList = require("./permessions");
const dbTables = require("./dbTables");

class Sequelize {
  constructor() {
    try {
      const database = settings.database.name;
      const user = settings.database.user;
      const password = settings.database.pass;
      const host = settings.database.host;
      const port = settings.database.port;
      const type = settings.database.type;
      this.connection = new S(database, user, password, {
        host,
        dialect: type,
        port,
      });
    } catch (err) {
      console.log("Error : ", err.toString());
    }
  }

  async defineTables() {
    // automatic define all table

    const tablesNames = Object.keys(dbTables);
    tablesNames.map((item) => {
      return this.connection.define(item, dbTables[item], {
        tableName: item,
        timestamps: false,
      });
    });

    console.log("All tables has been defined ...");

    await this.start();
  }

  async start() {
    // sync the schema to apply the edits
    await this.connection
      .sync({ force: true })
      .then(() => {
        console.log("Syncing dONe ");
      })
      .catch((err) => {
        console.log("Error >> SYncing ", err.toString());
      });

    //  fetch tables from the schema
    const accounts = this.connection.model("accounts");
    const permessions = this.connection.model("permessions");
    const configurations = this.connection.model("configurations");

    // create default account
    await accounts.create({
      username: "admin",
      nickname: "مدير المؤسسه",
      password: "admin",
      permessions: "*",
      role: "admin",
      email: "admin@omega.com",
    });

    //   create default permessions
    await permessions.bulkCreate(permessionsList);

    await configurations.create({});
  }
}

const test = new Sequelize();
test.defineTables();

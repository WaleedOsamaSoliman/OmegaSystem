const { Sequelize: S, DataTypes, DATE } = require("sequelize");
const settings = require("../config/settings");

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

  ping() {
    this.connection.authenticate().then(() => {
      this.tables();
      console.log("Tables has been created ...");
      this.connection
        .sync()
        .then(() => {
          console.log("Syncing dONe ");
        })
        .catch((err) => {
          console.log("Error >> SYncing ", err.toString());
        });
    });
  }

  async tables() {
    const accounts = this.connection.define(
      "accounts",
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            len: [3, 50],
          },
        },
        nickname: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            len: [3, 50],
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [3, 50],
          },
        },
        permessions: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: "?",
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: 1,
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "user",
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        gender: {
          type: DataTypes.STRING,
          defaultValue: "m",
          validate: {
            isIn: [["m", "f"]],
          },
        },
        age: {
          type: DataTypes.INTEGER,
          defaultValue: 20,
          validate: {
            isInt: true,
            min: 18,
            max: 99,
          },
        },
        creation_date: {
          type: DataTypes.DATE,
          defaultValue: S.NOW,
        },
        last_seen: {
          type: DataTypes.DATE,
          defaultValue: S.NOW,
        },
        total_sales: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          validate: {
            isFloat: true,
          },
        },
        receites_count: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          validate: {
            isFloat: true,
          },
        },
      },
      {
        tableName: "accounts",
        timestamps: false,
      }
    );
    accounts
      .create({
        username: "admin",
        nickname: "مدير المؤسسه",
        password: "admin",
        permessions: "*",
        role: "admin",
        email: "admin@omega.com",
      })
      .then(() => {
        console.log("Default user has been created ...");
      })
      .catch((err) => {
        console.log("Error in creation of default user >> ", err.toString());
      });
  }
}

const test = new Sequelize();
test.ping();

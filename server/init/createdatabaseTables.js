const { Sequelize: S, DataTypes, DATE } = require("sequelize");
const settings = require("../config/settings");
const mysql = require("mysql2/promise")

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

  async createDatabase() { 
    try { 
      const mainConnection =  await mysql.createConnection({
        host : settings.database.host , 
        port : settings.database.port , 
        user : settings.database.user , 
        password : settings.database.pass,
        database: "mysql"
      })
      await mainConnection.execute(`CREATE DATABASE IF NOT EXISTS ${settings.database.name}`);
      await mainConnection.end()
    }catch (err) { 
      console.log("Error While Creating Database : ", err.toString());
      // exit the app
      process.exit(1);
    }
 
  }
  async defineTables() {

    // create the database First 
    await this.createDatabase()
    // automatic define all table

    const tablesNames = Object.keys(dbTables);
    tablesNames.map((item) => {
      return this.connection.define(item, dbTables[item], {
        tableName: item,
        timestamps: false,
      });
    });

    // تعريف العلاقات بين الجداول
    const accounts = this.connection.model("accounts");
    const permessions = this.connection.model("permessions");
    
    // تعريف العلاقة Many-to-Many
    accounts.belongsToMany(permessions, {
      through: {
        model : "UserPermessions" , 
        timestamps : false
      },
      as: "userPermessions"
    });
    
    permessions.belongsToMany(accounts, {
      through: {
        model : "UserPermessions" , 
        timestamps : false
      },
      as: "permessionUsers"
    });

    console.log("All tables has been defined ...");

    await this.start();
  }

  async start() {
    // sync the schema to apply the edits
    await this.connection
      .sync({ force: true , alter : true })
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

    // get all permessions ids 
    const all_permessions =(await permessions.findAll()).map((item)=>{
      return item.id;
    });
    
    
      // العلاقة تم تعريفها مسبقاً قبل sync
    const adminAccount  =  await accounts.findOne({
      where : {username : "admin"}
    })
    //  add all Permessions to the admin account 
    await adminAccount.addUserPermession(all_permessions);
    

  }
}

const test = new Sequelize();
test.defineTables();

module.exports = test

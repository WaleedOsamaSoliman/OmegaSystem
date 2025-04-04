const mysql = require("mysql2/promise");
const settings = require("../config/settings.js");

class Database {
  constructor({ host = "", user = "", pass = "", database = "", port = 3306 }) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.pass = pass;
    this.database = database;
    this._cursor = null;
  }

  async isConnected() {
    let connection;
    try {
      connection = await mysql.createConnection({
        host: this.host,
        port: this.port,
        user: this.user,
        password: this.pass,
        database: this.database,
      });
      const ping = await connection.ping();
      return {
        state: true,
      };
    } catch (err) {
      return {
        state: false,
        reason: err.toString(),
      };
    } finally {
      if (connection) {
        await connection.end();
      }
    }
  }

  // make the cursor parameter private === not updated from outside
  get cursor() {
    return this._cursor;
  }
  async createPool() {
    console.log(this.database);
    if (!this.cursor) {
      try {
        this._cursor = await mysql.createPool({
          host: this.host,
          port: this.port,
          user: this.user,
          password: this.pass,
          database: this.database,
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });
      } catch (err) {
        this._cursor = null;
      }
    }
    return this._cursor;
  }

  async query(query, params) {
    const pool = await this.createPool();
    const [results, a] = await pool.execute(query, params);
    return results;
  }
}

const connection = new Database({
  user: settings.database.user,
  pass: settings.database.pass,
  host: settings.database.host,
  port: settings.database.port,
  database: settings.database.name,
});
module.exports = connection;

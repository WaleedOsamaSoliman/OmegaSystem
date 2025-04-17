const config = {
  mode: "dev",
  backend: {
    port: 3000,
    api: {
      path: "api/v1",
    },
  },
  database: {
    type: "mysql",
    name: "omega",
    host: "localhost",
    port: 3306,


    // modify user and password of mysql server .... 
    user: "omega",
    pass: "123123",
  },
};
module.exports = config;

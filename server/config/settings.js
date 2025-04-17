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


    user: "omega", // add your mysql user here
    pass: "123123", // add your mysql password here
  },
};
module.exports = config;

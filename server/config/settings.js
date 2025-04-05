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
    name: "test",
    host: "localhost",
    port: 3306,
    user: "omega",
    pass: "123123",
  },
};
module.exports = config;

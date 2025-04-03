const config = {
  mode: "dev",
  backend: {
    port: 3000,
    api: {
      path: "api/v1",
    },
  },
  database: {
    name: "omega_system",
    host: "localhost",
    port: 3306,
    user: "omega",
    pass: "omegaisthebest",
  },
};
module.exports = config;

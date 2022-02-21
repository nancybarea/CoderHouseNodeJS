const knex = require("knex");

const conex = knex({
  client: "mysql",
  connection: {
    //host: "0.0.0.0",
    host: "127.0.0.1",
    //user: "root",
    //password: "root",
    database: "autos",
    port: 3307,
  },
  pool: { min: 0, max: 7 },
});

module.exports = conex;
const knex = require("knex");

const conex = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "bdproductos",
    port: 3307,
  },
  pool: { min: 0, max: 7 },
});

module.exports = conex;
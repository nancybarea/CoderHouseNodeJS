const options = {
  client: "sqlite3",
  connection: {
    filename: "./DB/mydb.sqlite",
  },
  userNullAsDefault: true
};

module.exports = { options } ;
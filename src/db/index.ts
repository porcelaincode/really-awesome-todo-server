const db = require("./connect");
const TodoModel = require("./model");
const todos = require("./dbUtils");

module.exports = {
  db,
  TodoModel,
  todos,
};

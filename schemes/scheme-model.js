const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};
function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes").where("id", id).first();
}
function findSteps() {}
function add() {}
function update() {}
function remove() {}
function addStep() {}

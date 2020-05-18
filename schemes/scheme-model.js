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
function findSteps(id) {
  return db("steps")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .join("schemes as schemes", "steps.scheme_id", "schemes.id")
    .where("schemes.id", id)
    .orderBy("steps.step_number", "asc");
}
function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then((ids) => {
      const [id] = ids;
      return findById(id);
    });
}
function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id })
    .then(() => {
      return findById(id);
    });
}
function remove(id) {
  return db("schemes").del().where({ id });
}
function addStep(step, schemeId) {
  step.scheme_id = schemeId;
  return db("steps")
    .insert(step, "id")
    .then((ids) => {
      const [id] = ids;
      return db("steps").where({ id }).first();
    });
}

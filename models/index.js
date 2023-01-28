// This is the index.js file for the models directory. It is used to export all
// of the model files in the models directory. This allows the API to access the
// model files when they are needed.

const User = require("./User");
const Thought = require("./Thought");
const Reaction = require("./Reaction");

module.exports = {
  User,
  Thought,
  Reaction
};

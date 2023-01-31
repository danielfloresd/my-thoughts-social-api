const {Schema, model, Types} = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./Reaction");
const {User, UserSchema} = require("./User");

const ThoughtSchema = new Schema({
  thoughtText : {
    type : String,
    required : true,
    minLength : 1,
    maxLength : 280,
  },
  createdAt : {
    type : Date,
    default : Date.now,
    get : (createdAtVal) =>
        moment(createdAtVal).format("MM/DD/YYYY HH:mm:ss Z"),
  },
  username : {
    type : String,
    required : true,
  },
  reactions : [ reactionSchema ],
},
                                 {
                                   toJSON : {
                                     virtuals : true,
                                     getters : true,
                                   },
                                   id : false,
                                 });

// Create a virtual called reactionCount that retrieves the length of the
// thought's reactions array field on query.
ThoughtSchema.virtual("reactionCount")
    .get(function() { return this.reactions.length; });

const Thought = model("Thought", ThoughtSchema);

module.exports = {
  Thought,
  ThoughtSchema,
};

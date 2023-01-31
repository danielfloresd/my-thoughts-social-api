const {Schema, model, Types} = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionId : {
    type : Schema.Types.ObjectId,
    default : () => new Types.ObjectId(),
  },
  reactionBody : {
    type : String,
    required : true,
    maxLength : 280,
  },
  username : {
    type : String,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now,
    get : (createdAtVal) =>
        moment(createdAtVal).format("MM/DD/YYYY HH:mm:ss Z"),
  },
},
                                  {
                                    toJSON : {
                                      getters : true,
                                    },
                                    id : false,
                                  });

// const Reaction = model("Reaction", reactionSchema);

module.exports = reactionSchema;

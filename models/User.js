const {Schema, model} = require("mongoose");
const Thought = require("./Thought");

const UserSchema = new Schema({
  username : {
    type : String,
    required :
        true, // adding validation/ will require data to exist for that field
    trim : true,
    unique : true,
  },
  email : {
    type : String,
    unique : true,
    required : true,
    match : [ /.+@.+\..+/, "Please enter a valid e-mail address" ],
  },
  thoughts : [
    {
      type : Schema.Types.ObjectId,
      ref : "Thought",
    },
  ],
  friends : [
    {
      type : Schema.Types.ObjectId,
      ref : "User",
    },
  ],
},
                              {
                                toJSON : {
                                  virtuals : true,
                                },
                                id : false,
                              });

UserSchema.virtual("friendCount")
    .get(function() { return this.friends.length; });

UserSchema.pre("remove", async function(next) {
  // Delete all thoughts associated with the user
  console.log("this.thoughts", this.thoughts);
  await Thought.deleteMany({_id : {$in : this.thoughts}});
  next();
});

const User = model("User", UserSchema);

module.exports = {
  User,
  UserSchema,
};

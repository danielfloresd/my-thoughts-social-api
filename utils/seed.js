const connection = require("../config/connection");
const {User, UserSchema} = require("../models/User");
const {Thought, ThoughtSchema} = require("../models/Thought");
const {
  getRandomName,
  getRandomThought,
  getRandomReaction,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  const numUsers = 2;
  // Loop 20 times -- add users to the users array
  for (let i = 0; i < numUsers; i++) {
    const fullName = getRandomName();
    const first = fullName.split(" ")[0].toLowerCase();
    const last = fullName.split(" ")[1].toLowerCase();
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
    const username = `${first}.${last}`;
    const email = `${first}.${last}@email.com`;

    users.push({username, email});
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add 3 random friends to the each user
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const username = user.username;

    const thoughts = [];

    for (let j = 0; j < 5; j++) {
      const thoughtText = getRandomThought();
      let though = {
        thoughtText,
        username,
      };

      // Create 3 reactions for each thought
      let reactions = [];
      for (let k = 0; k < 3; k++) {
        const reactionBody = getRandomReaction();

        reactions.push({
          reactionBody,
          username,
        });
      }
      though.reactions = reactions;
      thoughts.push(though);
    }

    await Thought.collection.insertMany(thoughts);
    await User.updateOne({_id : user._id}, {$set : {thoughts}});

    const friends = [];
    for (let j = 0; j < 3; j++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      if (randomUser.username !== user.username) {
        if (!friends.includes(randomUser._id))
          friends.push(randomUser._id);
      }
    }

    await User.updateOne({_id : user._id}, {$set : {friends}});
  }
  // Log out the seed data to indicate what should appear in the database
  console.table(users);

  // console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});

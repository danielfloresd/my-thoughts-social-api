const { Thought } = require("../models/Thought");
const { User } = require("../models/User");

const userController = {
  getAllUser(req, res) {
    User.find({})
      // .populate({
      //   path: "thoughts", // User also populates Thoughts
      //   select: "-__v", // The minus sign - in front of the field indicates
      //   // that we don't want it to be returned.
      // })
      .select("-__v") // this put the sort in DESC order by the _id value
      .sort({ _id: -1 })
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one User by id  Get http://localhost:3001/api/Users/<User-id-here>
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts", // User also populates Thoughts
        select: "-__v", // The minus sign - in front of the field indicates
        // that we don't want it to be returned.
      })
      .select("-__v") //  //this put the sort in DESC order by the _id value
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // createUser   Post http://localhost:3001/api/users
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => {
        res.status(200).json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // update User by id  Put http://localhost:3001/api/users/<User-id-here>
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.status(200).json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete User Delete and thoughts localhost:3001/api/Users/<user-id-here
  deleteUser({ params }, res) {
    // Delete all the thoughts associated with the User

    User.findOneAndDelete({ _id: params.id }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No User found with this id!" });
        return;
      }

      Thought.deleteMany({ _id: { $in: dbUserData.thoughts } }).then(
        (dbThoughtData) => {
          if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!" });
            return;
          }
        }
      );
      res.json(dbUserData);
    });
  },

  //***------ user/friends----------------------
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { friends: params.friendsId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendsId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = userController;

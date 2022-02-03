const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  completedeleteUser,
} = require("../../controllers/user-controller");

// displays all users and creates a new user with JSON {username: , email:}
// api/users
router.route("/").get(getAllUsers).post(createUser);

// displays only one user, updates only one user and performs a simple delete user
// api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// adds a friend and deletes a friend
// api/users/userId/friends/friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// complete removal of a user includign all associated thougths
// api/users/userID/complete  deletes users and thoughts
router.route("/:id/complete").delete(completedeleteUser);

module.exports = router;

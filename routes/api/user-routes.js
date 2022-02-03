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

// /users
router.route("/").get(getAllUsers).post(createUser);

// users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// users/userId/friends/friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// users/userID/complete  deletes users and thoughts
router.route("/:id/complete").delete(completedeleteUser);

module.exports = router;

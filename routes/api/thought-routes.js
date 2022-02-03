const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// lists all thoughts
// api/thoughts
router.route("/").get(getAllThoughts);

// posts a new thought to a specified user
// api/thoughts/:id
router.route("/:userId").post(addThought);

// view one thought by thought is, update the thought and remove the thought
// api/thoughts/:id
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// add a reaction to a specific thought
  // /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// delete a specific reaction from a specific thought
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

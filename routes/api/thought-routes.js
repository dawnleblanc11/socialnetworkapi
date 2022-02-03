const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /thoughts
router
  .route('/')
  .get(getAllThoughts)

router.route('/:userId')
  .post(addThought);

// /thoughts/:id
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
// do we need to update reaction
// do we need to get reactions- since they show in thoughts
    .delete(removeReaction);


module.exports = router;

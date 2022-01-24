const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const thoughtRoutes = require('./thought-routes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
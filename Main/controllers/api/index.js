const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require("./apis/index")

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
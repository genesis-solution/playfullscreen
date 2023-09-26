const express = require('express');
const videosController = require('./../controllers/videos-controller.js');
let { verifySession } = require("supertokens-node/recipe/session/framework/express");

const router = express.Router();

router.get('/live', videosController.getLives);
router.get('/archive', videosController.getArchives);
router.get('/upcoming', videosController.getUpcomings);
router.get('/home', videosController.getHomes);
router.post('/broadcaster', videosController.getBroadcasterVideos);
router.post('/team', videosController.getTeamVideos);
router.post('/getStreamInfo', verifySession(), videosController.getStreamInfo);
router.post('/getArchiveInfo', verifySession(), videosController.getArchiveInfo);
router.post('/getPackageInfo', verifySession(), videosController.getPackageInfo);

// Export router
module.exports = router;
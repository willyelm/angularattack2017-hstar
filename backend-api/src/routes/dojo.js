const router = Router();
const dojoBiz = require('./../bizs/dojoBiz');

// 项目相关Start
// router.get('/get-my-codes', dojoBiz.getMyCodes);
// router.get('/get-square-codes', dojoBiz.getSquareCodes);
// router.post('/new', dojoBiz.saveProject);
// router.post('/like/:projId', dojoBiz.likeProject);
// router.post('/unlike/:projId', dojoBiz.unLikeProject);
// router.post('/:projId/:version', dojoBiz.updateProject);
// router.delete('/:projId', dojoBiz.deleteProject);
// router.get('/:projId/:version/preview/:file?', dojoBiz.getFileContent);
// router.get('/:projId/:version', dojoBiz.getProject);
// 项目相关End

module.exports = {
  router,
  priority: 0,
  prefix: '/project'
};
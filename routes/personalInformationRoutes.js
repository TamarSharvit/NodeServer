var express = require('express');
var router = express.Router();
var personalInformationController = require('../controllers/personalInformationController.js');

/*
 * GET
 */
router.get('/', personalInformationController.list);

/*
 * GET
 */
router.get('/:id', personalInformationController.show);

/*
 * POST
 */
router.post('/', personalInformationController.create);

/*
 * PUT
 */
router.put('/:id', personalInformationController.update);

/*
 * DELETE
 */
router.delete('/:id', personalInformationController.remove);

module.exports = router;

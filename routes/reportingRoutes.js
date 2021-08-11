var express = require('express');
var router = express.Router();
var reportingController = require('../controllers/reportingController.js');

/*
 * GET
 */
router.get('/', reportingController.list);

/*
 * GET
 */
router.get('/:id', reportingController.show);

/*
 * POST
 */
router.post('/', reportingController.create);

/*
 * PUT
 */
router.put('/:id', reportingController.update);

/*
 * DELETE
 */
router.delete('/:id', reportingController.remove);

module.exports = router;

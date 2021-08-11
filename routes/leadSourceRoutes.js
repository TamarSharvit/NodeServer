var express = require('express');
var router = express.Router();
var leadSourceController = require('../controllers/leadSourceController.js');

/*
 * GET
 */
router.get('/', leadSourceController.list);

/*
 * GET
 */
router.get('/:id', leadSourceController.show);

/*
 * POST
 */
router.post('/', leadSourceController.create);

/*
 * PUT
 */
router.put('/:id', leadSourceController.update);

/*
 * DELETE
 */
router.delete('/:id', leadSourceController.remove);

module.exports = router;

var express = require('express');
var router = express.Router();
var kindOfReportController = require('../controllers/kindOfReportController.js');

/*
 * GET
 */
router.get('/', kindOfReportController.list);

/*
 * GET
 */
router.get('/:id', kindOfReportController.show);

/*
 * POST
 */
router.post('/', kindOfReportController.create);

/*
 * PUT
 */
router.put('/:id', kindOfReportController.update);

/*
 * DELETE
 */
router.delete('/:id', kindOfReportController.remove);

module.exports = router;

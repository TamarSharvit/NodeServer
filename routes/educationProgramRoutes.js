var express = require('express');
var router = express.Router();
var educationProgramController = require('../controllers/educationProgramController.js');

/*
 * GET
 */
router.get('/', educationProgramController.list);

/*
 * GET
 */
router.get('/:id', educationProgramController.show);

/*
 * POST
 */
router.post('/', educationProgramController.create);

/*
 * PUT
 */
router.put('/:id', educationProgramController.update);

/*
 * DELETE
 */
router.delete('/:id', educationProgramController.remove);

module.exports = router;

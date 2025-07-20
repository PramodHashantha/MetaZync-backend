const express = require('express');
const { getServices, createService } = require('../controllers/serviceController');
const { updateService, deleteService } = require('../controllers/serviceController');
const router = express.Router();
const adminOnly = require('../middleware/adminMiddleware');
const auth = require('../middleware/authMiddleware');

router.get('/', getServices);
router.post('/', auth, adminOnly, createService);
router.put('/:id', auth, adminOnly, updateService);
router.delete('/:id', auth, adminOnly, deleteService);

module.exports = router;

const { Router } = require('express');
const {
    createServicio,
    getServicio,
    getServicioById,
    updateServicio,
    deleteServicio,
} = require('../controllers/servicio');

const router = Router();

router.post('/', createServicio);
router.get('/', getServicio);
router.get('/:id', getServicioById);
router.put('/:id', updateServicio);
router.delete('/:id', deleteServicio);

module.exports = router;

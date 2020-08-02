const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, deleteUsers, updateUsers } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:name', deleteUsers);
router.put('/users/:id', updateUsers);

module.exports = router;


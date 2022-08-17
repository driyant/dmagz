const router = require('express').Router();
const Register = require('../controllers/Register');

router.get("/")
router.get("/", Register.index);
router.get("/register", Register.addProcess);


module.exports = router;
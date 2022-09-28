const express = require('express')
const router = express.Router()
const auth = require('../controllers/authentication')
router.get('/login', auth.login)
router.get('/register', auth.register)

router.post('/register-akun', auth.registerPost)
router.post('/login-akun', auth.loginPost)
module.exports = router

const {Router} = require('express')
const router = Router()

router.get('/register',(req, res) => {
    res.json({
        "login":"true"
    })
})
router.post('/login',)
router.put('/edit',)

module.exports = router
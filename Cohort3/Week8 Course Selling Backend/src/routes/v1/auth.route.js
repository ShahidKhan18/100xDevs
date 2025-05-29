const { Router } = require('express')
const { UserController } = require('../../controllers')
const { UserTypes } = require('../../types')
const { ValidateRequest } = require('../../middlewares')

const router = Router()

router.post("/register", ValidateRequest(UserTypes.createUserSchema), UserController.create)
router.post("/login", ValidateRequest(UserTypes.loginUserSchema), UserController.logIn)
router.get("/demo", (req, res) => {
    res.json({
        message: "This is a demo route"
    })
})

module.exports = router
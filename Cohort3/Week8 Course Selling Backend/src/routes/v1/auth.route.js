const { Router } = require('express')
const { UserController } = require('../../controllers')
const { UserTypes } = require('../../types')
const { ValidateRequest, AuthMiddleware } = require('../../middlewares')

const router = Router()

router.post("/register", ValidateRequest(UserTypes.createUserSchema), UserController.create)
router.post("/login", ValidateRequest(UserTypes.loginUserSchema), UserController.logIn)
router.get("/logout", AuthMiddleware.userAuthenticate, UserController.logout)
router.get("/demo", AuthMiddleware.userAuthenticate, (req, res) => {

    res.json({
        message: "This is a demo route",
        user: req.user
    })
})

module.exports = router
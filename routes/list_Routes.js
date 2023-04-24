const router = require('express').Router();

const userController = require('../controller/list_controller');


    
router.route("/").post(userController.createUser);
router.route("/id").get(userController.getUser);
 router.route("/id").put(userController.updateUser);
 router.route("/id").delete(userController.DeleteUser);


module.exports = router;
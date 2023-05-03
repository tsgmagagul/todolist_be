const router = require('express').Router();

const userController = require('../controller/list_controller');


    
router.route("/").post(userController.createList);
router.route("/id").get(userController.getList);
 router.route("/id").put(userController.updateList);
 router.route("/id").delete(userController.DeleteList);


module.exports = router;
const express = require("express");
const { admin_Controller } = require("../../controller");
const { admin_Validation } = require("../../validations");

const router = express.Router();

router.post(
    "/create-admin",
    //controller
    admin_Validation.create_admin_V,
    admin_Controller.create_admin
);
router.get(
    "/get-admin",
    //controller
    admin_Controller.get_admin
);

module.exports = router;

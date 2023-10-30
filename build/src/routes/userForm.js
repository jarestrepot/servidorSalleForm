"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userFormController_1 = require("../controllers/userFormController");
const userFormValidation_1 = require("../validations/userFormValidation");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Welcome to server').json({ msg: 'Welcome to server' });
});
router.post('/form', userFormValidation_1.validateFormuser, userFormController_1.postUserForm);
exports.default = router;

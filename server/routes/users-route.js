const express = require('express')
const usersController = require('./../controllers/users-controller.js')
let { verifySession } = require("supertokens-node/recipe/session/framework/express");

const router = express.Router()

router.get('/', usersController.usersGetAll)
router.get('/getUserByPhoneOrEmail', usersController.getUserByPhoneOrEmail)
router.post('/getUserById', verifySession(), usersController.getUserById)
router.post('/updateUser', verifySession(), usersController.updateUser)
router.post('/topUpBalance', verifySession(), usersController.topUpBalance)
router.get('/purchaseHistory', verifySession(), usersController.getPurchaseHistory)
router.get('/admissionHistory', verifySession(), usersController.getAdmissionHistory)
router.post('/stripe/getSession', verifySession(), usersController.getStripeSession)
router.post('/stripe/saveCheckoutDetail', verifySession(), usersController.saveCheckoutDetail)

router.post('/lightning/createInvoice', verifySession(), usersController.createInvoice)
router.post('/lightning/login', verifySession(), usersController.coinosLogin);
router.post('/lightning/pay', verifySession(), usersController.coinosPay);
router.post('/lightning/checkPaid', verifySession(), usersController.coinosCheckInvoice);
router.get('/lightning/getExchangeRates', verifySession(), usersController.getExchangeRates);

// From Coinos api when user paid by Invoice
router.post('/lightning/paid', usersController.coinosPaid);

// Export router
module.exports = router;
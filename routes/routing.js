/* eslint-disable no-unused-vars */
const express = require('express');
 const router = express.Router();
 const services = require('../controller/services.js');
 router.get('/getPackage',services.getPackageDetails);
 router.post('/addPackage',services.addPackageDetails);
 router.patch('/updatePackage/:packageId',services.updatePackageDetails);
 router.delete('/deletePackage/:packageId',services.deletePackageDetails);
 router.all('*',services.invalid);
 module.exports = router ;
var express = require('express');
const { create, getData, getDataById, upDateData, deleteData } = require("../controllers/crud");
var router = express.Router();

/* GET users listing. */
router.post('/create', create);
router.get('/get', getData);
router.get('/get/:id', getDataById);
router.delete('/delete/:id', deleteData);
router.put('/update/:id', upDateData);

module.exports = router;

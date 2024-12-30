const express = require('express');
const router = express.Router();
const Arts = require('../controller/ArtikelController');

router.get('/', Arts.getArtikel); //view all artikel
router.get('/:id', Arts.getIDArtikel); // view by id
router.post('/',Arts.createArtikel);//new artikel
router.put('/:id',Arts.UpdateArtikel);//update Artikel
router.delete('/:id', Arts.DeleteArtikel);//delete artikel

module.exports = router;
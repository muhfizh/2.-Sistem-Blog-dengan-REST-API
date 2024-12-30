const Art = require('../model/ArtikelModel');

//View all Artikel
exports.getArtikel = function(req, res) {
    Art.getArtikel((err, Arts) => {
        if (err) throw err;
        res.json(Arts);
    });
};

//View By ID
exports.getIDArtikel = function(req, res) {
    Art.getIDArtikel(req.params.id, (err, Arts) => {
        if (err) throw err;
        res.json(Arts);
    });
};

// New Artikel
exports.createArtikel = function(req,res) {
    const Dat_Art = {
        Name_Artikel: req.body.Name_Artikel, 
Type_Artikel: req.body.Type_Artikel, 
Writer: req.body.Writer, 
Date: req.body.Date, 
Created_User: req.body.Created_User,
Created_Date: req.body.Created_Date,
Updated_User: req.body.Updated_User,
Updated_Date: req.body.Updated_Date
    };

    Art.createArtikel(Dat_Art, (err, result) => {
        if (err) throw err;
        res.json({message: "Sukses buat data artikel"});
    });
};

//Update Artikel
exports.UpdateArtikel = function(req, res) {
    const Dat_Art = {
        Name_Artikel: req.body.Name_Artikel, 
Type_Artikel: req.body.Type_Artikel, 
Writer: req.body.Writer, 
Date: req.body.Date, 
Created_User: req.body.Created_User,
Created_Date: req.body.Created_Date,
Updated_User: req.body.Updated_User,
Updated_Date: req.body.Updated_Date
    };
    exports.UpdateArtikel(req.params.id, Dat_Art, (err, result) => {
        if (err) throw err;
        res.json({message: "Sukses Update Data Artikel"});
    });
};

//delete artikel
exports.DeleteArtikel = function(req, res) {
    exports.DeleteArtikel(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({message: "Sukses Delete Data Artikel"});
    })
}
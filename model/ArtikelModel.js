const DT_Art = require('../config/database');

//View All Artikel
exports.getArtikel = function(callback){
    DT_Art.query("SELECT * FROM artikel_tabs", callback);
}

//View By ID
exports.getIDArtikel = function(id, callback){
    DT_Art.query("SELECT * FROM artikel_tabs where id = ?", [id], callback);
}

//New Artikel
exports.createArtikel = function(newId, callback){
    DT_Art.query("INSERT INTO artikel_tabs SET ?", [newId], callback);
}

//Update Artikel
exports.UpdateArtikel = function(id, Update, callback){
    DT_Art.query("UPDATE artikel_tabs SET ? where id = ?", [Update,id], callback);
}

//Delete Artikel
exports.DeleteArtikel = function(id, callback){
    DT_Art.query("DELETE FROM artikel_tabs where id = ?", [id], callback);
}
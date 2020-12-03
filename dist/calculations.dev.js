"use strict";

/* Helpers */
var _c = function _c(t) {
  return Number(t ? t : 0);
};

var _s = function _s(n) {
  return document.querySelector(n);
};

function _ro(n) {
  return +(Math.round(n + "e+2") + "e-2");
}
/* Selecting Inputs */


var i_gesamt = _s("#gesamt");

var i_nach = _s("#nach");

var i_zoll = _s("#zoll");

var i_eust = _s("#eust");

var i_qi = _s("#qi");

var i_produk = _s("#produk");
/* Selecting Text */


var t_zollwert = _s("#zollwert");

var t_zoll = _s("#zoll-r");

var t_eust = _s("#eust-r");

var t_gesamt_r = _s("#gesamt-r");

var t_einheit_r = _s("#einheit-r");

var t_eust_einheit_r = _s("#eust-einheit-r");
/* Selecting Inputs - for amazon */


var i_verk = _s("#verk");

var i_verkauf = _s("#verkauf");

var i_versand = _s("#versand");
/* Selecting Text - for amazon */


var t_enthaltene = _s("#enthaltene");

var t_gebuhren = _s("#gebuhren");

var t_kosten = _s("#kosten");

var t_spreis = _s("#spreis");

var t_differenz = _s("#differenz");

var t_retour = _s("#retour");
/* Event Listener */


var _get_updated = function _get_updated(e) {
  _update_warenimport();
};

var _update_warenimport = function _update_warenimport() {
  var value_igesamt = _c(i_gesamt.value);

  var value_inach = _c(i_nach.value);

  var value_tzollwert = value_igesamt + value_inach;
  t_zollwert.textContent = _ro(value_tzollwert);

  var value_izoll = _c(i_zoll.value);

  var value_ieust = _c(i_eust.value);

  var value_tzoll = value_izoll / 100 * value_tzollwert;
  t_zoll.textContent = _ro(value_tzoll);
  var value_teust = (value_tzoll + value_tzollwert) * (value_ieust / 100);
  t_eust.textContent = _ro(value_teust);

  var value_iqi = _c(i_qi.value);

  var value_tgesamtr = value_iqi + value_tzoll + value_tzollwert;
  t_gesamt_r.textContent = _ro(value_tgesamtr);

  var value_iproduk = _c(i_produk.value);

  var value_teinheitr = value_tgesamtr / value_iproduk;
  t_einheit_r.textContent = _ro(value_teinheitr);
  var value_teusteinheitr = value_teust / value_iproduk;
  t_eust_einheit_r.textContent = _ro(value_teusteinheitr);

  var value_iverk = _c(i_verk.value);

  var value_tenthaltene = value_iverk * value_ieust / (100 + value_ieust);
  t_enthaltene.textContent = _ro(value_tenthaltene);

  var value_iverkauf = _c(i_verkauf.value);

  var value_gebuhren = value_iverkauf / 100 * value_iverk;
  t_gebuhren.textContent = _ro(value_gebuhren);

  var value_iversand = _c(i_versand.value);

  t_kosten.textContent = _ro(value_iversand);
  t_spreis.textContent = _ro(value_teinheitr);

  var value_differenz = _ro(value_tenthaltene - value_teusteinheitr);

  t_differenz.textContent = value_differenz;
  console.log(_c(i_verkauf.value));
  var value_retour = (value_iverk - value_gebuhren - _c(i_versand.value) - value_teinheitr - value_differenz) * 0.9;
  t_retour.textContent = _ro(value_retour);
};
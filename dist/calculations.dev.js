"use strict";

var _s = function _s(n) {
  return document.querySelector(n);
};
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
/* Helpers */


var _c = function _c(t) {
  return Number(t ? t : 0);
};
/* Event Listener */


var _get_updated = function _get_updated(e) {
  _update_warenimport();
};

var _update_warenimport = function _update_warenimport() {
  var value_igesamt = _c(i_gesamt.value);

  var value_inach = _c(i_nach.value);

  var value_tzollwert = value_igesamt + value_inach;
  t_zollwert.textContent = value_tzollwert;

  var value_izoll = _c(i_zoll.value);

  var value_ieust = _c(i_eust.value);

  var value_tzoll = value_izoll / 100 * value_tzollwert;
  t_zoll.textContent = value_tzoll;
  var value_teust = (value_tzoll + value_tzollwert) * (value_ieust / 100);
  t_eust.textContent = value_teust;

  var value_iqi = _c(i_qi.value);

  var value_tgesamtr = value_iqi + value_tzoll + value_tzollwert;
  t_gesamt_r.textContent = value_tgesamtr;

  var value_iproduk = _c(i_produk.value);

  var value_teinheitr = value_tgesamtr / value_iproduk;
  t_einheit_r.textContent = value_teinheitr;
  var value_eusteinheitr = value_teust / value_iproduk;
  t_eust_einheit_r.textContent = value_eusteinheitr;
};
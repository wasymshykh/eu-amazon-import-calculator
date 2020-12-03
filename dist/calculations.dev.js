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
/* Selecting Inputs - for amazon */


var i_verk = _s("#verk");

var i_verkauf = _s("#verkauf");

var i_versand = _s("#versand");
/* Selecting Text - for amazon */


var t_enthaltene = _s("#enthaltene");

var t_netto = _s("#netto");

var t_gebuhren = _s("#gebuhren");

var t_kosten = _s("#kosten");

var t_spreis = _s("#spreis");

var t_retour = _s("#retour");
/* Selecting Inputs - for gewinn */


var i_amtag = _s("#amtag");

var i_var_kosten_1 = _s("#var-kosten-i-1");

var i_var_kosten_2 = _s("#var-kosten-i-2");

var i_var_kosten_3 = _s("#var-kosten-i-3");

var i_var_kosten_4 = _s("#var-kosten-i-4");
/* Selecting Text - for gewinn */


var t_immonat = _s("#immonat");

var t_promonat = _s("#promonat");

var t_promonat2 = _s("#promonat2");

var t_nettogewinn = _s("#nettogewinn");
/* Event Listener */


var calulate_percentage = function calulate_percentage(b25, b13) {
  if (b25 / b13 * 100 > 90) {
    // b25 is higher than 90%
    t_retour.parentElement.classList.add('make-green');
    t_retour.parentElement.classList.remove('make-red');
  } else {
    // b25 is lower than 90%
    t_retour.parentElement.classList.add('make-red');
    t_retour.parentElement.classList.remove('make-green');
  }

  console.log();
};

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

  var value_iverk = _c(i_verk.value);

  var value_tenthaltene = value_iverk * value_ieust / (100 + value_ieust);
  t_enthaltene.textContent = _ro(value_tenthaltene);
  var value_tnetto = value_iverk - value_tenthaltene;
  t_netto.textContent = _ro(value_tnetto);

  var value_iverkauf = _c(i_verkauf.value);

  var value_gebuhren = value_iverkauf / 100 * value_iverk;
  t_gebuhren.textContent = _ro(value_gebuhren);

  var value_iversand = _c(i_versand.value);

  t_kosten.textContent = _ro(value_iversand);
  t_spreis.textContent = _ro(value_teinheitr);
  var value_retour = (value_tnetto - value_gebuhren - _c(i_versand.value) - value_teinheitr) * 0.9;
  t_retour.textContent = _ro(value_retour);

  var value_iamtag = _c(i_amtag.value);

  var value_immonat = value_iamtag * 30;
  t_immonat.textContent = _ro(value_immonat);
  var value_promonat = value_iamtag * value_retour * 30;
  t_promonat.textContent = _ro(value_promonat);
  t_promonat2.textContent = _ro(value_promonat);

  var value_ivarkosten1 = _c(i_var_kosten_1.value);

  var value_ivarkosten2 = _c(i_var_kosten_2.value);

  var value_ivarkosten3 = _c(i_var_kosten_3.value);

  var value_ivarkosten4 = _c(i_var_kosten_4.value);

  var value_nettogewinn = value_promonat - value_ivarkosten1 - value_ivarkosten2 - value_ivarkosten3 - value_ivarkosten4;
  t_nettogewinn.textContent = _ro(value_nettogewinn);
  calulate_percentage(value_retour, value_teinheitr);
};

_update_warenimport();
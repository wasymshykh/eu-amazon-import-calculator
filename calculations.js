const _s = (n) => {
    return document.querySelector(n);
}

/* Selecting Inputs */

const i_gesamt = _s("#gesamt");
const i_nach = _s("#nach");

const i_zoll = _s("#zoll");
const i_eust = _s("#eust");

const i_qi = _s("#qi");

const i_produk = _s("#produk");

/* Selecting Text */

const t_zollwert = _s("#zollwert");

const t_zoll = _s("#zoll-r");
const t_eust = _s("#eust-r");

const t_gesamt_r = _s("#gesamt-r");
const t_einheit_r = _s("#einheit-r");
const t_eust_einheit_r = _s("#eust-einheit-r");

/* Helpers */

const _c = (t) => {
    return Number(t ? t : 0);
}

/* Event Listener */

const _get_updated = (e) => {
    
    _update_warenimport();

}

const _update_warenimport = () => {
    let value_igesamt = _c(i_gesamt.value);
    let value_inach = _c(i_nach.value);
    let value_tzollwert = value_igesamt + value_inach;
    t_zollwert.textContent = value_tzollwert;

    let value_izoll = _c(i_zoll.value);
    let value_ieust = _c(i_eust.value);
    let value_tzoll = (value_izoll/100)*value_tzollwert;
    t_zoll.textContent = value_tzoll;

    let value_teust = (value_tzoll + value_tzollwert)*(value_ieust/100);
    t_eust.textContent = value_teust;

    let value_iqi = _c(i_qi.value);
    let value_tgesamtr = value_iqi + value_tzoll + value_tzollwert;

    t_gesamt_r.textContent = value_tgesamtr;

    let value_iproduk = _c(i_produk.value);

    let value_teinheitr = value_tgesamtr/value_iproduk;
    t_einheit_r.textContent = value_teinheitr;

    let value_eusteinheitr = value_teust/value_iproduk;
    t_eust_einheit_r.textContent = value_eusteinheitr;
}

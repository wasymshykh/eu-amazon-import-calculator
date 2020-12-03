/* Helpers */

const _c = (t) => {
    return Number(t ? t : 0);
}

const _s = (n) => {
    return document.querySelector(n);
}

function _ro(n) {    
    return +(Math.round(n + "e+2")  + "e-2");
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

/* Selecting Inputs - for amazon */

const i_verk = _s("#verk");
const i_verkauf = _s("#verkauf");
const i_versand = _s("#versand");

/* Selecting Text - for amazon */

const t_enthaltene = _s("#enthaltene");
const t_gebuhren = _s("#gebuhren");
const t_kosten = _s("#kosten");
const t_spreis = _s("#spreis");
const t_differenz = _s("#differenz");
const t_retour = _s("#retour");


/* Event Listener */

const _get_updated = (e) => {
    
    _update_warenimport();

}

const _update_warenimport = () => {
    let value_igesamt = _c(i_gesamt.value);
    let value_inach = _c(i_nach.value);
    let value_tzollwert = value_igesamt + value_inach;
    t_zollwert.textContent = _ro(value_tzollwert);

    let value_izoll = _c(i_zoll.value);
    let value_ieust = _c(i_eust.value);
    
    let value_tzoll = (value_izoll/100)*value_tzollwert;
    t_zoll.textContent = _ro(value_tzoll);

    let value_teust = (value_tzoll + value_tzollwert)*(value_ieust/100);
    t_eust.textContent = _ro(value_teust);

    let value_iqi = _c(i_qi.value);
    let value_tgesamtr = value_iqi + value_tzoll + value_tzollwert;

    t_gesamt_r.textContent = _ro(value_tgesamtr);

    let value_iproduk = _c(i_produk.value);

    let value_teinheitr = value_tgesamtr/value_iproduk;
    t_einheit_r.textContent = _ro(value_teinheitr);

    let value_teusteinheitr = value_teust/value_iproduk;
    t_eust_einheit_r.textContent = _ro(value_teusteinheitr);

    let value_iverk = _c(i_verk.value);

    let value_tenthaltene = value_iverk*value_ieust/(100+value_ieust);
    t_enthaltene.textContent = _ro(value_tenthaltene);
    
    let value_iverkauf = _c(i_verkauf.value);

    let value_gebuhren = value_iverkauf/100*value_iverk;
    t_gebuhren.textContent = _ro(value_gebuhren);

    let value_iversand = _c(i_versand.value);
    t_kosten.textContent = _ro(value_iversand);

    t_spreis.textContent = _ro(value_teinheitr);

    let value_differenz = _ro(value_tenthaltene - value_teusteinheitr);
    t_differenz.textContent = value_differenz;

    console.log(_c(i_verkauf.value));
    let value_retour = (value_iverk - value_gebuhren - _c(i_versand.value) - value_teinheitr - value_differenz)*0.9;
    t_retour.textContent = _ro(value_retour);

}

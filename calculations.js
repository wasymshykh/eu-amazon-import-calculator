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

/* Selecting Inputs - for amazon */

const i_verk = _s("#verk");
const i_verkauf = _s("#verkauf");
const i_versand = _s("#versand");
const i_touren = _s("#touren");

/* Selecting Text - for amazon */

const t_enthaltene = _s("#enthaltene");
const t_netto = _s("#netto");
const t_gebuhren = _s("#gebuhren");
const t_kosten = _s("#kosten");
const t_spreis = _s("#spreis");
const t_retour = _s("#retour");
const t_nachretour = _s("#nachretour");

/* Selecting Inputs - for gewinn */

const i_amtag = _s("#amtag");
const i_var_kosten_1 = _s("#var-kosten-i-1");
const i_var_kosten_2 = _s("#var-kosten-i-2");
const i_var_kosten_3 = _s("#var-kosten-i-3");
const i_var_kosten_4 = _s("#var-kosten-i-4");

/* Selecting Text - for gewinn */

const t_immonat = _s("#immonat");
const t_promonat = _s("#promonat");
const t_promonat2 = _s("#promonat2");
const t_nettogewinn = _s("#nettogewinn");

/* Selecting Inputs - for bestellmenge plannen */

const i_pdptage = _s("#pdptage");
const i_vndtage = _s("#vndtage");
const i_valtage = _s("#valtage");
const i_vptag = _s("#vptag");

/* Selecting Text - for bestellmenge plannen */

const t_outofstock = _s("#outofstock");
const t_empfohmind = _s("#empfohmind");
const t_empfohsich = _s("#empfohsich");


/* Event Listener */

const calulate_percentage = (b25, b13) => {
    if (((b25/b13) * 100) > 90) {
        // b25 is higher than 90%
        t_retour.parentElement.classList.add('make-green');
        t_retour.parentElement.classList.remove('make-red');
    } else {
        // b25 is lower than 90%
        t_retour.parentElement.classList.add('make-red');
        t_retour.parentElement.classList.remove('make-green');
    }
}

const calulate_percentage_more = (b26, b13) => {
    if (((b26/b13) * 100) > 90) {
        // b26 is higher than 90%
        t_nachretour.parentElement.classList.add('make-green');
        t_nachretour.parentElement.classList.remove('make-red');
    } else {
        // b26 is lower than 90%
        t_nachretour.parentElement.classList.add('make-red');
        t_nachretour.parentElement.classList.remove('make-green');
    }
}

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

    let value_iverk = _c(i_verk.value);

    let value_tenthaltene = value_iverk*value_ieust/(100+value_ieust);
    t_enthaltene.textContent = _ro(value_tenthaltene);

    let value_tnetto = value_iverk - value_tenthaltene;
    t_netto.textContent = _ro(value_tnetto);
    
    let value_iverkauf = _c(i_verkauf.value);

    let value_gebuhren = value_iverkauf/100*value_iverk;
    t_gebuhren.textContent = _ro(value_gebuhren);

    let value_iversand = _c(i_versand.value);
    t_kosten.textContent = _ro(value_iversand);

    t_spreis.textContent = _ro(value_teinheitr);

    let value_retour = (value_tnetto - value_gebuhren - _c(i_versand.value) - value_teinheitr);
    t_retour.textContent = _ro(value_retour);

    let value_itouren = _c(i_touren.value);
    let value_tnachretour = value_retour - (value_retour*value_itouren/100);
    t_nachretour.textContent = _ro(value_tnachretour);
    
    let value_iamtag = _c(i_amtag.value);

    let value_immonat = value_iamtag *30;
    t_immonat.textContent = _ro(value_immonat);

    let value_promonat = value_iamtag*value_tnachretour*30;
    t_promonat.textContent = _ro(value_promonat);
    t_promonat2.textContent = _ro(value_promonat);

    
    let value_ivarkosten1 = _c(i_var_kosten_1.value);
    let value_ivarkosten2 = _c(i_var_kosten_2.value);
    let value_ivarkosten3 = _c(i_var_kosten_3.value);
    let value_ivarkosten4 = _c(i_var_kosten_4.value);
    
    let value_nettogewinn = value_promonat - value_ivarkosten1 - value_ivarkosten2 - value_ivarkosten3 - value_ivarkosten4;
    t_nettogewinn.textContent = _ro(value_nettogewinn);

    calulate_percentage(value_retour, value_teinheitr);
    calulate_percentage_more(value_tnachretour, value_teinheitr);
}
_update_warenimport();


const _get_updated_more = (e) => {
    let value_pdptage = _c(i_pdptage.value);
    let value_vndtage = _c(i_vndtage.value);
    let value_valtage = _c(i_valtage.value);
    let value_vptag = _c(i_vptag.value);
    
    let value_outofstock = (value_pdptage+value_vndtage+value_valtage)*value_vptag;
    t_outofstock.textContent = _ro(value_outofstock);

    t_empfohmind.textContent = _ro(value_outofstock*1.5);
    t_empfohsich.textContent = _ro(value_outofstock*1.8);
}
_get_updated_more();


const i_wechusd = _s("#wechusd");
const i_wertdollar = _s("#wertdollar");
const t_werteuro = _s("#werteuro");

const _get_exchanged = (e) => {
    let value_wechusd = _c(i_wechusd.value);
    let value_wertdollar = _c(i_wertdollar.value);

    let value_werteuro = value_wechusd * value_wertdollar;
    t_werteuro.textContent = _ro(value_werteuro);
}

_get_exchanged();

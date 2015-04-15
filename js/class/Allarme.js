/**
 * Created by Comunico on 14/04/2015.
 */
/*jslint browser: true */
/*global jQuery, moment, performance, console*/

(function closure() {
    "use strict";

    var AteArgo, Allarme;

    AteArgo = this;

    Allarme = (AteArgo.classes.Allarme = function Allarme() {
        var allarme = this;

        if (!(allarme instanceof Allarme)) {
            console.warn("WARNING: CodaAllarmi: call with the 'new' operator.");
            allarme = new Allarme();
        }

        Array.prototype.forEach.call(arguments, function (arg) {
            if (arg && typeof arg === 'object') {
                allarme.tipoAllarme = arg.tipoAllarme || allarme.tipoAllarme;
                allarme.data = arg.data || allarme.data;
                allarme.ora = arg.ora || allarme.ora;
                allarme.supercodice = arg.supercodice || allarme.supercodice;
                allarme.codice = arg.codice || allarme.codice;
                allarme.descrizione = arg.descrizione || allarme.descrizione;
                allarme.dettagli = arg.dettagli || allarme.dettagli;
                allarme.operatore = arg.operatore || allarme.operatore;
            }
        });

        return allarme;
    });

    Allarme.prototype.tipoAllarme = "Undefined";
    Allarme.prototype.data = "00-00-0000";
    Allarme.prototype.ora = "00:00";
    Allarme.prototype.supercodice = "";
    Allarme.prototype.codice = "";
    Allarme.prototype.descrizione = "";
    Allarme.prototype.dettagli = "";
    Allarme.prototype.operatore = "";
    Allarme.prototype.toDate = function toString() {
        return Utilities.strToDate(this.data + " " + this.ora);
    }
}).call(window.AteArgo);
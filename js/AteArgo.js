/**
 * Created by Comunico on 15/04/2015.
 */
/*jslint browser: true */
/*global jQuery, moment, performance, console*/

(function closure() {
    "use strict";

    var AteArgo, Allarme, CodaAllarmi;

    AteArgo = (window.AteArgo = (function new_namespace() {
        var AteArgo;

        AteArgo = function AteArgo() {
            this.classes = {};
            this.codaAllarmi = null;
        };

        AteArgo.prototype.version = "1.0";
        AteArgo.prototype.toString = function toString() {
            return "AteArgo v" + this.version;
        };
        AteArgo.prototype.init = function init(i) {
            if(this.classes.Allarme && this.classes.CodaAllarmi) {
                Allarme = this.classes.Allarme;
                CodaAllarmi = this.classes.CodaAllarmi;

                this.codaAllarmi = new CodaAllarmi();
                this.codaAllarmi.init();
            } else {
                throw new Error("AteArgo classes not found");
            }
        };

        return new AteArgo();
    }()));

    AteArgo.mergeDate = function mergeDate(strDate, strTime) {
        var date = moment(strDate, "DD-MM-YYYY"), time = strTime.split(":");

        date.add(parseInt(time[0], 10), 'hours');
        date.add(parseInt(time[1], 10), 'minutes');

        return date.toDate();
    };

    AteArgo.randomAlarm = function randomAlarm() {
        var r;
        r = Utilities.randDate();

        return new Allarme({
            tipoAllarme: [
                "AllarmiIngresso",
                "MancatoInserimento",
                "MancatoDisinserimento",
                "Sopravvivenza",
                "CadutaLink",
                "SorveglianzaRete",
                "CadutaLinkSorveglianzaRete",
                "SuperamentoChiamateAllarmiGiornalieri",
                "SuperamentoChiamate",
                "AllarmiGiornalieri",
                "AllarmiDiSistema",
                "AllarmiPersistenti",
                "Selezione",
                "IngressoVariato",
                "IngressoSegnalato",
                "IngressoRipristinato",
                "IngressoAllarmato",
                "Undefined"
            ].random(),
            data: r.date,
            ora: r.time,
            supercodice: [
                "MVIGGI1",
                "MVIGGI",
                "MVI12399",
                "P1"
            ].random(),
            codice: [
                "RBA1",
                "RBA12"
            ].random(),
            descrizione: [
                "TEST",
                "VIGGI",
                "BANCA DI CREDITO",
                "MI- PROVA TEST",
                "PERIFERICA CENTRALINA"
            ].random(),
            dettagli: Math.floor(Math.random() * 9824895).toString(),
            operatore: [
                "davidex",
                "mviggi1",
                "t.ricci"
            ].random()
        });
    };
}());
/**
 * Created by Comunico on 13/04/2015.
 */
/*jslint browser: true */
/*global jQuery, moment, performance, console, AteArgo*/

(function closure($, w, d) {
    "use strict";

    var main, Allarme, creaAllarmi, start, end, CodaAllarmi;

    creaAllarmi = function creaAllarmi() {
        var i, allarmi;

        allarmi = [];

        start = performance.now();
        for (i = 0; i < 2000; i += 1) {
            allarmi[i] = AteArgo.randomAlarm();
        }
        end = performance.now();

        return allarmi;
    };

    main = function main() {
        var allarmi, codaAllarmi;

        AteArgo.init();
        codaAllarmi = AteArgo.codaAllarmi;

        allarmi = creaAllarmi();
        codaAllarmi.add(allarmi);
    };

    $(d).ready(function docready() {
        $(w).ready(function windowready() {
            main();
        });
    });
}(jQuery, window, document));
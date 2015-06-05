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
        for (i = 0; i < 1000; i += 1) {
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
        console.dir(allarmi);
        codaAllarmi.add(allarmi);

        //window.allarmi = codaAllarmi.allarmi;
        //window.codiceIndex = function() {
        //    return codaAllarmi.codiceIndex.apply(codaAllarmi, arguments);
        //};
        //window.randomAlarm = AteArgo.randomAlarm;

        (function verifyOrdered() {
            var i, bo;

            for(i = 1, bo = true; i < 1000; i += 1) {
                if(codaAllarmi[i] < codaAllarmi[i - 1]) {
                    bo = false;
                }
            }

            if(bo) {
                console.log("ordered correctly");
            } else {
                console.log("order error");
            }
        }());

    };

    $(main);
}(jQuery, window, document));
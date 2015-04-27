/**
 * Created by Comunico on 14/04/2015.
 */
/*jslint browser: true */
/*global jQuery, moment, performance, console*/

(function closure() {
    "use strict";

    var AteArgo, Allarme, CodaAllarmi, codiceIndex, supercodiceIndex;

    AteArgo = this;

    CodaAllarmi = (AteArgo.classes.CodaAllarmi = function CodaAllarmi() {
        var codaAllarmi = this;

        if (!(codaAllarmi instanceof CodaAllarmi)) {
            console.warn("WARNING: CodaAllarmi: call with the 'new' operator.");
            codaAllarmi = new CodaAllarmi();
        }

        codaAllarmi.allarmi = [];
        codaAllarmi.parentList = [];

        return codaAllarmi;
    });

    CodaAllarmi.prototype.init = function init() {
        Allarme = AteArgo.classes.Allarme;
    };

    CodaAllarmi.prototype.spostaCodici = function spostaCodici() {
        ;//@TODO
    };

    supercodiceIndex = function supercodiceIndex(parentList, x) {
        //@TODO: usare lista di date contenenti i supercodici di quella data (ultime 24h)
    };

    //supercodiceIndex = function supercodiceIndex(parentList, x) {
    //    var a, low, high, len, mid, date1, date2, found;
    //
    //    a = parentList;
    //    len = a.length;
    //    low = 0;
    //    mid = 0;
    //    high = (len > 0) ? len - 1 : 0;
    //    found = -1;
    //
    //    if(len === 0) {
    //        return 0;
    //    }
    //
    //    while (low <= high) {
    //        mid = Math.floor((low + high) / 2);
    //        date1 = x.toDate();
    //        date2 = a[mid].toDate();
    //
    //        if(x.supercodice.toUpperCase() === a[mid].supercodice.toUpperCase()) {
    //            found = mid;
    //            break;
    //        } else if (x.supercodice.toUpperCase() > a[mid].supercodice.toUpperCase()) {
    //            high = mid - 1;
    //        } else if (x.supercodice.toUpperCase() < a[mid].supercodice.toUpperCase()) {
    //            low = mid + 1;
    //        }
    //    }
    //
    //    if (found >= 0) {
    //        if(a[found].toDate() >= x.toDate()) {
    //            return -1; // Do not insert
    //        } else {
    //            a.remove(found);
    //        }
    //    }
    //
    //    low = 0;
    //    mid = 0;
    //    len = a.length;
    //    high = (len > 0) ? len - 1 : 0;
    //
    //    while (low <= high) {
    //        mid = Math.floor((low + high) / 2);
    //
    //        if (x.toDate() >= a[mid].toDate()) {
    //            high = mid - 1;
    //        } else {
    //            low = mid + 1;
    //        }
    //    }
    //
    //    return low;
    //};

    codiceIndex = function codiceIndex(a, x) {
        var low, high, len, mid;

        len = a.length;
        low = 0;
        mid = 0;
        high = (len > 0) ? len - 1 : 0;

        if(len === 0) {
            return 0;
        }

        while (low <= high) {
            mid = Math.floor((low + high) / 2);

            if (x.toDate() >= a[mid].toDate()) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return low;
    };

    CodaAllarmi.prototype.add = function add(args) {
        var self, index, insert;

        self = this;
        insert = function insert(alarm) {
            index = supercodiceIndex(self.parentList, alarm);
            if(index >= 0) {
                self.parentList.insert(index, alarm);
            }
            //index = codiceIndex(self.allarmi, alarm);
            //self.allarmi.insert(index, alarm);
        };

        if (args instanceof Array) {
            //@TODO: change for-each loop and call codiceIndex 1 time only. Sort the args array first
            Array.prototype.forEach.call(args, function forEach(alarm) {
                if(alarm instanceof Allarme) {
                    insert(alarm);
                }
            });
        } else if (args instanceof Allarme) {
            insert(alarm);
        }
    };
}).call(window.AteArgo);
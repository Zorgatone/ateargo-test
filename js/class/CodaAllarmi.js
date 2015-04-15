/**
 * Created by Comunico on 14/04/2015.
 */
/*jslint browser: true */
/*global jQuery, moment, performance, console*/

(function closure() {
    "use strict";

    var AteArgo, Allarme, CodaAllarmi;

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

    };
    CodaAllarmi.prototype.insertIndex = function insertIndex(x) {
        var a, low, high, len, mid;

        a = this.allarmi;
        len = a.length;
        low = 0;
        mid = 0;
        high = len - 1;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);

            if (x.toDate() >= a[mid].toDate()) {
                return mid - 1;
            } else {
                high = mid - 1;
            }
        }

        return mid;
    };
    CodaAllarmi.prototype.add = function add(args) {
        var self, index;
        if (args instanceof Array) {
            self = this;

            //@TODO: change for-each loop and call insertIndex 1 time only. Sort the args array first
            Array.prototype.forEach.call(args, function forEach(alarm) {
                if(alarm instanceof Allarme) {
                    index = self.insertIndex(alarm);
                    self.allarmi.insert(index, alarm);
                }
            });
        } else if (args instanceof Allarme) {
            index = this.insertIndex(alarm);
            this.allarmi.insert(index, allarme);
        }
    };
}).call(window.AteArgo);
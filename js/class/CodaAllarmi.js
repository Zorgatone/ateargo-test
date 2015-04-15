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
    CodaAllarmi.prototype.insertIndex = function insertIndex(alarm) {
        //
    };
    CodaAllarmi.prototype.add = function add(args) {
        var self;
        if (args instanceof Array) {
            self = this;
            Array.prototype.forEach.call(args, function forEach(alarm) {
                var index;

                if(alarm instanceof Allarme) {
                    index = self.insertIndex(alarm);
                    self.allarmi.insert(index, alarm);
                }
            });
        } else if (args instanceof Allarme) {
            this.allarmi.push(allarme);
        }
    };
}).call(window.AteArgo);
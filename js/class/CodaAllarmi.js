/**
 * Created by Comunico on 14/04/2015.
 */
/*jslint browser: true */
/*global jQuery, moment, performance, console*/

(function closure() {
    "use strict";

    var AteArgo, Allarme, CodaAllarmi, ParentList, Row, codiceIndex, supercodiceIndex;

    AteArgo = this;

    Row = (AteArgo.classes.Row = function Row(alarm) {
        var key;

        this.index = null;
        this.visible = true;
        this.cells = [];

        if(alarm instanceof(AteArgo.classes.Allarme)) {
            this.alarm = alarm;

            for(key in alarm) {
                if(alarm.hasOwnProperty(key)) {
                    this.cells.push({name: key, value: alarm[key]});
                }
            }
        } else {
            this.alarm = null;
        }
    });
    ParentList = (AteArgo.classes.ParentList = function ParentList() {});
    ParentList.prototype.add = function add(alarm) {
        var parent, supercodice, data1, data2, ora1, ora2;

        if(alarm instanceof(AteArgo.classes.Allarme)) {
            supercodice = alarm.supercodice;
            data2 = alarm.data;
            ora2 = alarm.ora;

            if(typeof(supercodice) === 'string') {
                parent = this[supercodice];

                if(parent instanceof(AteArgo.classes.Allarme) && parent.supercodice === supercodice) {
                    data1 = parent.data;
                    ora1 = parent.ora;

                    if(typeof(data1) === 'string' && typeof(data2) === 'string' && typeof(ora1) === 'string' && typeof(ora2) === 'string') {
                        data1 = AteArgo.mergeDate(data1, ora1);
                        data2 = AteArgo.mergeDate(data2, ora2);
                    }

                    if(data1 instanceof(Date) && data2 instanceof(Date)) {
                        if(data2 >= data1) {
                            return (this[supercodice] = alarm);
                        } else {
                            return parent;
                        }
                    } else {
                        console.error("Date error");
                    }
                } else {
                    return this[supercodice] = alarm;
                }
            } else {
                console.error("Invalid Supercodice");
            }
        } else {
            console.error("Argument is not instance of Allarme");
        }
    };

    CodaAllarmi = (AteArgo.classes.CodaAllarmi = function CodaAllarmi() {
        var codaAllarmi = this;

        if (!(codaAllarmi instanceof CodaAllarmi)) {
            console.warn("WARNING: CodaAllarmi: call with the 'new' operator.");
            codaAllarmi = new CodaAllarmi();
        }

        codaAllarmi.allarmi = [];
        codaAllarmi.parentList = new ParentList();

        return codaAllarmi;
    });

    CodaAllarmi.prototype.init = function init() {
        Allarme = AteArgo.classes.Allarme;
    };

    CodaAllarmi.prototype.spostaCodici = function spostaCodici() {
        ;//@TODO
    };

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
            var row = new Row(alarm);
            self.parentList.add(alarm);
            //index = supercodiceIndex(self.parentList, alarm);
            //if(index >= 0) {
            //    console.log('insert');
            //    self.parentList.insert(index, alarm);
            //}
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
            insert(args);
        }
    };
}).call(window.AteArgo);
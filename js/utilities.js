/**
 * Created by Comunico on 15/04/2015.
 */

(function utilities() {
    "use strict";

    var Utilities;

    moment.locale("it");
    Array.prototype.random = Array.prototype.random || function random() {
        return this[Math.floor(Math.random() * this.length)];
    };
    Array.prototype.insert = Array.prototype.insert || function insert(index) {
        this.splice.apply(this, [index, 0].concat(
            Array.prototype.slice.call(arguments, 1)));
        return this;
    };

    Utilities = (window.Utilities = (function new_namespace() {
        var Utilities

        Utilities = function Utilities() {
        };

        Utilities.prototype.version = "1.0";
        Utilities.prototype.strToDate = function strToDate(str) {
            var data = /(\d{2})-(\d{2})-(\d{4})\s(\d{2}):(\d{2})/.exec(str);

            return new Date(
                parseInt(data[3], 10),
                parseInt(data[1], 10) - 1,
                parseInt(data[2], 10),
                parseInt(data[4], 10),
                parseInt(data[5], 10)
            );
        };
        Utilities.prototype.randDate = function randDate() {
            var m = moment().seconds(0).milliseconds(0).subtract(Math.floor(Math.random() * 6000), 'minutes');
            return {
                date: m.format("MM-DD-YYYY"),
                time: m.format("HH:mm")
            };
        };

        return new Utilities();
    }()));
}());
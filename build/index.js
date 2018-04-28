"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = __importDefault(require("rxjs/Rx"));
// or
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
Rx_1.default.Observable.of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
Observable_1.Observable.of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
//# sourceMappingURL=index.js.map
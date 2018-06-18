(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enable {\r\n    background-color: yellow;\r\n}\r\n.disabled {\r\n    background-color: gray;\r\n}\r\n#form {\r\n    display: -ms-inline-grid !important;\r\n    display: inline-grid !important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n        Welcome to {{ title }}!\r\n    </h1>\r\n    <img width=\"300\" alt=\"Angular Logo\" \r\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n\r\n<form id=\"form\">\r\n    <label for=\"startDate\">Date:</label>\r\n    <input type=\"text\" name=\"startDate\" [(ngModel)]=\"date\" placeholder=\"yyyy/MM/dd\">\r\n    <label for=\"numberOfDays\">Number of days:</label>\r\n    <input type=\"text\" name=\"numberOfDays\" [(ngModel)]=\"numberOfDays\">\r\n    <label for=\"countryCode\">Country Code:</label>\r\n    <input type=\"text\" name=\"countryCode\"  [(ngModel)]=\"countryCode\">\r\n    <br>\r\n    <input type=\"button\" value=\"Calendar\" (click)=\"createCalendar()\">\r\n</form>\r\n\r\n<section>\r\n    <ng-container *ngFor=\"let month of calendarList\">\r\n        <table>\r\n            <th colspan=\"7\">{{listOfMonths[month.month]}}</th>\r\n            <tr>\r\n                <td *ngFor=\"let days of listOfDays\">\r\n                    {{days}}\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let week of month.listOfWeeks\">\r\n                <ng-container *ngFor=\"let day of week.daysOfWeek\">\r\n                    <td [ngClass]=\"{'enable': day.enable, 'disabled': !day.enable}\">\r\n                        <span>{{day.day > 0? day.day: ''}}</span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n            </tr>\r\n        </table>\r\n    </ng-container>\r\n    <table>\r\n\r\n    </table>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-const */ "./src/app/global-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Calendar web';
        this.listOfMonths = _global_const__WEBPACK_IMPORTED_MODULE_1__["GlobalConst"].months;
        this.listOfDays = _global_const__WEBPACK_IMPORTED_MODULE_1__["GlobalConst"].days;
        this.startDate = new Date(2018, 5, 18);
        this.numberOfDays = 15;
        this.calendarList = [];
        this.counterOfDays = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.createCalendar();
    };
    AppComponent.prototype.createCalendar = function () {
        this.counterOfDays = 0;
        this.calendarList = [];
        if (this.date && this.date.split('/').length > 1) {
            var inputYear = Number(this.date.split('/')[0]);
            var inputMonth = Number(this.date.split('/')[1]);
            var inputDay = Number(this.date.split('/')[2]);
            this.startDate = new Date(inputYear, inputMonth - 1, inputDay);
        }
        var monthCalendar = this.getInitialMonth(this.startDate);
        while (this.counterOfDays <= this.numberOfDays) {
            this.fillMonth(monthCalendar);
        }
        console.log('calendar', this.calendarList);
    };
    AppComponent.prototype.getInitialDate = function () {
    };
    AppComponent.prototype.getInitialMonth = function (date) {
        return date.getUTCMonth();
    };
    AppComponent.prototype.getInitialDay = function (date) {
        return date.getUTCDay();
    };
    AppComponent.prototype.fillMonth = function (monthCalendar) {
        var calendar = {};
        calendar.month = monthCalendar;
        calendar.listOfWeeks = [];
        var startDayOfWeek = this.getInitialDay(this.startDate);
        var lastDayOfMonth = new Date(this.startDate.getUTCFullYear(), monthCalendar + 1, 0).getDate();
        var initialDate = this.startDate.getDate();
        for (var f = 0; f < 6; f++) {
            var daysOfWeek = {};
            var listDays = [];
            for (var d = 0; d < 7; d++) {
                var day = {};
                if (d >= startDayOfWeek || f > 0) {
                    // hasValue
                    day.day = initialDate;
                    day.enable = true;
                    this.counterOfDays++;
                    initialDate++;
                }
                else {
                    day.day = 0;
                    day.enable = false;
                }
                listDays.push(day);
                if (initialDate > lastDayOfMonth) {
                    break;
                }
            }
            daysOfWeek.week = f + 1;
            daysOfWeek.daysOfWeek = listDays;
            calendar.listOfWeeks.push(daysOfWeek);
            if (initialDate > lastDayOfMonth) {
                // create new month
                this.calendarList.push(calendar);
                this.startDate = new Date(this.startDate.getUTCFullYear(), monthCalendar + 1, 1);
                var newMonthCalendar = this.getInitialMonth(this.startDate);
                this.fillMonth(newMonthCalendar);
                break;
            }
            if (this.counterOfDays > this.numberOfDays) {
                // leave week
                console.log('break weeks');
                this.calendarList.push(calendar);
                break;
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/global-const.ts":
/*!*********************************!*\
  !*** ./src/app/global-const.ts ***!
  \*********************************/
/*! exports provided: GlobalConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConst", function() { return GlobalConst; });
var GlobalConst = /** @class */ (function () {
    function GlobalConst() {
    }
    GlobalConst.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    GlobalConst.days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return GlobalConst;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\calendar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extras-timeline-timeline-module"],{

/***/ "./src/app/pages/extras/timeline/timeline.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/extras/timeline/timeline.module.ts ***!
  \**********************************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline.page */ "./src/app/pages/extras/timeline/timeline.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]
    }
];
var TimelinePageModule = /** @class */ (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]]
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());



/***/ }),

/***/ "./src/app/pages/extras/timeline/timeline.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/extras/timeline/timeline.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.extras.timeline.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ul class=\"timeline\">\n\n\t\t<li *ngFor=\"let item of items\">\n\t\t\t<div [class]=\"item.dir\">\n\t\t\t\t<div class=\"flag-wrapper\">\n\t\t\t\t\t<span class=\"flag\"><ion-text color=\"dark\">{{item.title}}</ion-text></span>\n\t\t\t\t\t<span class=\"time-wrapper\"><span class=\"time\">{{item.time.subtitle}} {{item.time.title}}</span></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"desc\"><ion-text color=\"primary\">{{item.content}}</ion-text></div>\n\t\t\t</div>\n\t\t</li>\n\n\t</ul>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/extras/timeline/timeline.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/extras/timeline/timeline.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary))\n    ; }\n\n.timeline {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 1em 0;\n  list-style-type: none; }\n\n.timeline:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: ' ';\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: rgba(var(--ion-color-secondary-rgb), 1);\n  background: linear-gradient(to bottom, rgba(var(--ion-color-secondary-rgb), 0) 0%, rgba(var(--ion-color-secondary-rgb), 1) 8%, rgba(var(--ion-color-secondary-rgb), 1) 92%, rgba(var(--ion-color-secondary-rgb), 0) 100%);\n  z-index: 5; }\n\n.timeline li {\n  padding: 1em 0; }\n\n.timeline li:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden; }\n\n.direction-l {\n  position: relative;\n  width: 300px;\n  float: left;\n  text-align: right; }\n\n.direction-r {\n  position: relative;\n  width: 300px;\n  float: right; }\n\n.flag-wrapper {\n  position: relative;\n  display: inline-block;\n  text-align: center; }\n\n.flag {\n  position: relative;\n  display: inline;\n  background: #f8f8f8;\n  padding: 6px 10px;\n  border-radius: 5px;\n  font-weight: 600;\n  text-align: left; }\n\n.direction-l .flag {\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15); }\n\n.direction-r .flag {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15); }\n\n.direction-l .flag:before,\n.direction-r .flag:before {\n  position: absolute;\n  top: 50%;\n  right: -40px;\n  content: ' ';\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-top: -10px;\n  background: #fff;\n  border-radius: 10px;\n  border: 4px solid var(--ion-color-primary);\n  z-index: 10; }\n\n.direction-r .flag:before {\n  left: -40px; }\n\n.direction-l .flag:after {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-left-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none; }\n\n.direction-r .flag:after {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none; }\n\n.time-wrapper {\n  display: inline;\n  line-height: 1em;\n  font-size: 0.66666em;\n  color: var(--ion-color-primary);\n  vertical-align: middle; }\n\n.direction-l .time-wrapper {\n  float: left; }\n\n.direction-r .time-wrapper {\n  float: right; }\n\n.time {\n  display: inline-block;\n  padding: 4px 6px;\n  background: #f8f8f8; }\n\n.desc {\n  margin: 1em 0.75em 0 0;\n  font-size: 1.5rem;\n  font-style: italic;\n  line-height: 1.5em;\n  border-radius: .5rem; }\n\n.direction-r .desc {\n  margin: 1em 0 0 0.75em; }\n\n@media screen and (max-width: 660px) {\n  .timeline {\n    width: 100%;\n    padding: 4em 0 1em 0; }\n  .timeline li {\n    padding: 2em 0; }\n  .direction-l,\n  .direction-r {\n    float: none;\n    width: 100%;\n    text-align: center; }\n  .flag-wrapper {\n    text-align: center; }\n  .flag {\n    background: white;\n    z-index: 15; }\n  .direction-l .flag:before,\n  .direction-r .flag:before {\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    content: ' ';\n    display: block;\n    width: 12px;\n    height: 12px;\n    margin-left: -9px;\n    background: #fff;\n    border-radius: 10px;\n    border: 4px solid var(--ion-color-primary);\n    z-index: 10; }\n  .direction-l .flag:after,\n  .direction-r .flag:after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: -8px;\n    height: 0;\n    width: 0;\n    margin-left: -8px;\n    border: solid transparent;\n    border-bottom-color: white;\n    border-width: 8px;\n    pointer-events: none; }\n  .time-wrapper {\n    display: block;\n    position: relative;\n    margin: 4px 0 0 0;\n    z-index: 14; }\n  .direction-l .time-wrapper {\n    float: none; }\n  .direction-r .time-wrapper {\n    float: none; }\n  .desc {\n    position: relative;\n    margin: 1em 0 0 0;\n    padding: 1rem;\n    background: whitesmoke;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n    z-index: 15; }\n  .direction-l .desc,\n  .direction-r .desc {\n    position: relative;\n    margin: 1em 1em 0 1em;\n    padding: 1em;\n    z-index: 15; } }\n"

/***/ }),

/***/ "./src/app/pages/extras/timeline/timeline.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/extras/timeline/timeline.page.ts ***!
  \********************************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelinePage = /** @class */ (function () {
    function TimelinePage() {
        this.items = [
            {
                title: 'Confirm payment',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus vitae nostrum eligendi quaerat dolore reprehenderit.',
                icon: 'calendar',
                dir: 'direction-r',
                time: { subtitle: '1/16/2018', title: '21:30' }
            },
            {
                title: 'Hotel Booked!',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus vitae nostrum eligendi quaerat dolore reprehenderit.',
                icon: 'calendar',
                dir: 'direction-l',
                time: { subtitle: 'January', title: '29' }
            },
            {
                title: 'Travel Agent Contact',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus vitae nostrum eligendi quaerat dolore reprehenderit.',
                icon: 'calendar',
                dir: 'direction-r',
                time: { title: 'Short Text' }
            }
        ];
    }
    TimelinePage.prototype.ngOnInit = function () {
    };
    TimelinePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.page.html */ "./src/app/pages/extras/timeline/timeline.page.html"),
            styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/pages/extras/timeline/timeline.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TimelinePage);
    return TimelinePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-extras-timeline-timeline-module.js.map
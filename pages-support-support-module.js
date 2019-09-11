(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"],{

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/support/support.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]
    }
];
var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());



/***/ }),

/***/ "./src/app/pages/support/support.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Support</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n\n  <div class=\"bg-profile\" text-center>\n    <img src=\"assets/img/support-app.jpg\">\n  </div>\n\n  <ion-card class=\"bg-white\" no-margin>\n    <ion-card-content>\n\n      <ion-list>\n        <ion-item href=\"tel:1111\">\n          <ion-icon name=\"call\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>\n            <p><ion-text color=\"primary\">Call to General Support</ion-text></p>\n            <h2><ion-text color=\"dark\">+1 (123) 456-7890</ion-text></h2>\n          </ion-label>\n        </ion-item>\n        <ion-item href=\"tel:1111\">\n          <ion-icon name=\"call\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>\n            <p><ion-text color=\"primary\">Call to Lease & Sale Support</ion-text></p>\n            <h2><ion-text color=\"dark\">+1 (123) 456-7890</ion-text></h2>\n          </ion-label>\n        </ion-item>\n        <ion-item href=\"mailto:support@ionbooking2.ionic\">\n          <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>\n            <p><ion-text color=\"primary\">Email</ion-text></p>\n            <h2><ion-text color=\"dark\">support@ionbooking2.ionic</ion-text></h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/support/support.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n"

/***/ }),

/***/ "./src/app/pages/support/support.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
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

var SupportPage = /** @class */ (function () {
    function SupportPage() {
    }
    SupportPage.prototype.ngOnInit = function () {
    };
    SupportPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.page.html */ "./src/app/pages/support/support.page.html"),
            styles: [__webpack_require__(/*! ./support.page.scss */ "./src/app/pages/support/support.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SupportPage);
    return SupportPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-support-support-module.js.map
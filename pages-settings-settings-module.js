(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>App Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"bg-profile\">\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/avatar.jpeg\" class=\"user-avatar\">\n    </ion-avatar>\n    <ion-label>\n      <ion-text color=\"light\">\n        <h2>\n          <strong>João Firmino</strong>\n        </h2>\n      </ion-text>\n      <ion-text color=\"tertiary\">\n        <h3>\n          firminoata@gmail.com\n        </h3>\n      </ion-text>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"dark\" (click)=\"editProfile()\">\n        <ion-icon name=\"contact\"></ion-icon>\n        Edit Profile\n      </ion-button>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"secondary\" (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n        Logout\n      </ion-button>\n    </ion-label>\n  </ion-item>\n\n  <ion-list no-border>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>General</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"settings\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">App Language</ion-label>\n      <ion-select [(ngModel)]=\"lang\">\n        <ion-select-option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\"> Enable notifications </ion-label>\n      <ion-toggle [(ngModel)]=\"enableNotifications\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Currency</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"card\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Payment Method</ion-label>\n      <ion-select [(ngModel)]=\"paymentMethod\">\n        <ion-select-option *ngFor=\"let method of paymentMethods\" [value]=\"method\">{{method}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"logo-usd\" slot=\"start\" color=\"dark\"></ion-icon>\n      <ion-label color=\"primary\">Currency</ion-label>\n      <ion-select [(ngModel)]=\"currency\">\n        <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency\">{{currency}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Other</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\">Enable Promotions</ion-label>\n      <ion-toggle [(ngModel)]=\"enablePromo\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\">Enable History</ion-label>\n      <ion-toggle [(ngModel)]=\"enableHistory\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n\nion-avatar {\n  width: 68px;\n  height: 68px; }\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.languages = ['English', 'Portuguese', 'French'];
        this.paymentMethods = ['Paypal', 'Credit Card'];
        this.currencies = ['USD', 'BRL', 'EUR'];
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.editProfile = function () {
        this.navCtrl.navigateForward('edit-profile');
    };
    SettingsPage.prototype.logout = function () {
        this.navCtrl.navigateRoot('login');
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map
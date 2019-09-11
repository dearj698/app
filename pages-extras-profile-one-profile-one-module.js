(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extras-profile-one-profile-one-module"],{

/***/ "./src/app/pages/extras/profile-one/profile-one.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/profile-one/profile-one.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfileOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOnePageModule", function() { return ProfileOnePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _profile_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-one.page */ "./src/app/pages/extras/profile-one/profile-one.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _profile_one_page__WEBPACK_IMPORTED_MODULE_6__["ProfileOnePage"]
    }
];
var ProfileOnePageModule = /** @class */ (function () {
    function ProfileOnePageModule() {
    }
    ProfileOnePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_one_page__WEBPACK_IMPORTED_MODULE_6__["ProfileOnePage"]]
        })
    ], ProfileOnePageModule);
    return ProfileOnePageModule;
}());



/***/ }),

/***/ "./src/app/pages/extras/profile-one/profile-one.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/profile-one/profile-one.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.extras.profileone.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <div class=\"profile-bg\" [ngStyle]=\"{'background-image': 'url(' + imageUrl +')'}\"></div>\n  <ion-card class=\"bg-white\">\n    <ion-card-content class=\"content\">\n      <div class=\"profile-info\">\n        <img class=\"profile-image\" src=\"assets/img/avatar.jpeg\">\n        <h3 class=\"profile-name\">João Firmino</h3>\n        <span class=\"profile-description\">Traveler, geek and animal lover.</span>\n        <p>Follow my <a href=\"https://twitter.com/ionicframework\">@facebook</a> and\n          <a href=\"https://twitter.com/driftyco\">@twitter</a> accounts.</p>\n      </div>\n      <ion-list>\n        <ion-item no-margin no-padding *ngFor=\"let post of posts\">\n          <img class=\"post-profile-image\" src=\"assets/img/avatar.jpeg\"> {{post.text}}\n          <div class=\"post-time\">{{post.created_at}} something</div>\n          <div class=\"post-options\">\n            <ion-icon name=\"undo\"></ion-icon>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/extras/profile-one/profile-one.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/profile-one/profile-one.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary))\n    ; }\n\n.profile-bg {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 20%;\n  text-align: center; }\n\n.content {\n  position: relative;\n  margin-top: 80px;\n  background-color: #fff;\n  padding-top: 200px; }\n\n.profile-info {\n  position: absolute;\n  top: -95px;\n  width: 90%;\n  z-index: 2;\n  text-align: center; }\n\n.profile-name {\n  color: #444;\n  font-size: 26px; }\n\n.profile-description {\n  font-size: 15px;\n  color: #888; }\n\n.profile-description a {\n  color: #888; }\n\n.profile-image {\n  display: block;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 128px;\n  height: 128px;\n  margin: 30px auto 0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7); }\n\n.list-item-content {\n  padding: 5px; }\n\n.list-item {\n  color: #666666; }\n\n.post {\n  color: #444; }\n\n.post-time {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 11px;\n  color: #888; }\n\n.post-profile-image {\n  display: inline-block;\n  vertical-align: top;\n  width: 48px;\n  height: 48px;\n  margin-right: 10px; }\n\n.post-options {\n  position: absolute;\n  font-size: 16px;\n  right: 5px;\n  bottom: 5px;\n  color: #888; }\n"

/***/ }),

/***/ "./src/app/pages/extras/profile-one/profile-one.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/extras/profile-one/profile-one.page.ts ***!
  \**************************************************************/
/*! exports provided: ProfileOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOnePage", function() { return ProfileOnePage; });
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

var ProfileOnePage = /** @class */ (function () {
    function ProfileOnePage() {
        this.posts = [];
        this.imageUrl = 'assets/img/webapp-bg.jpg';
        for (var i = 0; i < 10; i++) {
            this.posts[i] = {
                text: 'Post text ' + i,
                created_at: (i + 1),
            };
        }
    }
    ProfileOnePage.prototype.ngOnInit = function () {
    };
    ProfileOnePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-one',
            template: __webpack_require__(/*! ./profile-one.page.html */ "./src/app/pages/extras/profile-one/profile-one.page.html"),
            styles: [__webpack_require__(/*! ./profile-one.page.scss */ "./src/app/pages/extras/profile-one/profile-one.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ProfileOnePage);
    return ProfileOnePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-extras-profile-one-profile-one-module.js.map
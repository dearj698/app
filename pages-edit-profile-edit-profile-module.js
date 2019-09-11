(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.editprofile.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card no-margin>\n    <ion-card-content class=\"bg-profile\">\n      <img src=\"assets/img/avartar.jpg\">\n      <h1 class=\"fw500\">{{name}}</h1>\n      <h2 color=\"light\" margin-bottom>{{email}}</h2>\n      <ion-button icon-left color=\"secondary\">\n        <ion-icon name=\"photos\"></ion-icon> \n        {{ 'app.label.edit' | translate }} / {{ 'app.label.insertavatar' | translate }}\n      </ion-button>\n    </ion-card-content>\n  \n    <ion-grid fixed no-padding>\n      <ion-row>\n        <ion-col size=\"12\" padding>\n\n          <ion-list margin-bottom>\n            <ion-list-header color=\"light\">\n              <ion-label class=\"fw700\">{{ 'app.label.userdata' | translate }}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.fullname' | translate }}:</ion-label>\n              <ion-input inputmode=\"text\" placeholder=\"Ex..: Joe Doe\"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.email' | translate }}:</ion-label>\n              <ion-input inputmode=\"email\" placeholder=\"Ex.: joe@doe.com\"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.address' | translate }}:</ion-label>\n              <ion-input inputmode=\"text\" placeholder=\"Ex.: 680 wonderland rd\"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\">{{ 'app.label.city' | translate }}</ion-label>\n              <ion-select>\n                <ion-select-option value=\"nes\">New York</ion-select-option>\n                <ion-select-option value=\"n64\">Los Angeles</ion-select-option>\n                <ion-select-option value=\"ps\">London</ion-select-option>\n                <ion-select-option value=\"genesis\">Paris</ion-select-option>\n                <ion-select-option value=\"saturn\">São Paulo</ion-select-option>\n                <ion-select-option value=\"snes\">Tokyo</ion-select-option>\n                <ion-select-option value=\"snes\">New Delhi</ion-select-option>\n              </ion-select>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\">{{ 'app.label.state' | translate }}</ion-label>\n              <ion-select>\n                <ion-select-option value=\"nes\">NY</ion-select-option>\n                <ion-select-option value=\"n64\">CA</ion-select-option>\n                <ion-select-option value=\"ps\">Greater London</ion-select-option>\n                <ion-select-option value=\"genesis\">Paris</ion-select-option>\n                <ion-select-option value=\"saturn\">SP</ion-select-option>\n                <ion-select-option value=\"snes\">Kantō</ion-select-option>\n                <ion-select-option value=\"snes\">Delhi</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n          <ion-list>\n            <ion-radio-group>\n              <ion-list-header color=\"light\">\n                <ion-label class=\"fw700\">{{ 'app.label.usertype' | translate }}</ion-label>\n              </ion-list-header>\n          \n              <ion-item>\n                <ion-label color=\"primary\">Patient</ion-label>\n                <ion-radio slot=\"start\" value=\"customer\" checked></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label color=\"primary\">Doctor</ion-label>\n                <ion-radio slot=\"start\" value=\"agent\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n              \n          </ion-list>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-button size=\"large\" expand=\"full\" color=\"dark\" (click)=\"sendData()\">{{ 'app.label.edit' | translate }}</ion-button>\n  </ion-card>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff; }\n\n.profile ion-card ion-card-content {\n    padding: 32px;\n    background-color: var(--ion-color-primary);\n    color: #fff;\n    text-align: center; }\n\n.profile ion-card ion-card-content img {\n      height: 128px;\n      width: 128px;\n      border-radius: 50%;\n      border: solid 4px #fff;\n      display: inline;\n      box-shadow: 0 0 28px rgba(255, 255, 255, 0.65); }\n\n.profile ion-card ion-card-content h1 {\n      margin-top: .5rem; }\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary); }\n\n.profile ion-buttom button {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
    }
    EditProfilePage.prototype.ngOnInit = function () {
        this.name = localStorage.getItem('firstname');
        this.email = localStorage.getItem('email');
    };
    EditProfilePage.prototype.sendData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 2000
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        loader.onWillDismiss().then(function (l) { return __awaiter(_this, void 0, void 0, function () {
                            var toast;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                                            showCloseButton: true,
                                            cssClass: 'bg-profile',
                                            message: 'Your Data was Edited!',
                                            duration: 3000,
                                            position: 'bottom'
                                        })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        this.navCtrl.navigateForward('/home');
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.page.html */ "./src/app/pages/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module.js.map
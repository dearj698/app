(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extras-authentication-authentication-module"],{

/***/ "./src/app/pages/extras/authentication/authentication.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/extras/authentication/authentication.module.ts ***!
  \**********************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.page */ "./src/app/pages/extras/authentication/authentication.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]
    }
];
var AuthenticationPageModule = /** @class */ (function () {
    function AuthenticationPageModule() {
    }
    AuthenticationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]]
        })
    ], AuthenticationPageModule);
    return AuthenticationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/extras/authentication/authentication.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/extras/authentication/authentication.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding class=\"animated fadeIn login auth-page\">\n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal margin-bottom text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n        <ion-text color=\"light\">\n          {{ 'app.name' | translate }}\n          <ion-text color=\"secondary\" class=\"fw700\"> {{ 'app.version' | translate }}</ion-text>\n        </ion-text>\n      </h4>\n    </div>\n\n    <ion-segment [(ngModel)]=\"authSegment\" color=\"light\">\n      <ion-segment-button value=\"login\">\n        Login\n      </ion-segment-button>\n      <ion-segment-button value=\"register\">\n        Register\n      </ion-segment-button>\n    </ion-segment>\n    \n    <div [ngSwitch]=\"authSegment\">\n      <div *ngSwitchCase=\"'login'\">\n        <!-- Login form -->\n        <form [formGroup]=\"onLoginForm\" class=\"list-form\">\n            <ion-item no-padding class=\"animated fadeInUp\">\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" item-start></ion-icon>\n                {{ 'app.label.email' | translate }}\n              </ion-label>\n              <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('email').touched && onLoginForm.get('email').hasError('required')\">\n              <ion-text color=\"danger\">\n                {{ 'app.label.errors.field' | translate }}\n              </ion-text>\n            </p>\n      \n            <ion-item no-padding class=\"animated fadeInUp\">\n              <ion-label position=\"floating\">\n                <ion-icon name=\"lock\" item-start></ion-icon>\n                {{ 'app.label.password' | translate }}\n              </ion-label>\n              <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <p ion-text color=\"danger\" class=\"text08\" *ngIf=\"onLoginForm.get('password').touched && onLoginForm.get('password').hasError('required')\">\n              <ion-text color=\"danger\">\n                {{ 'app.label.errors.field' | translate }}\n              </ion-text>\n              </p>\n          </form>\n      \n          <p text-right tappable (click)=\"forgotPass()\" class=\"paz\">\n            <ion-text color=\"light\">\n              <strong>{{ 'app.pages.login.label.forgot' | translate }}</strong>\n            </ion-text>\n          </p>\n      \n          <div>\n            <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" [disabled]=\"!onLoginForm.valid\" tappable (click)=\"login()\">\n              <ion-icon name=\"log-in\"></ion-icon>\n              {{ 'app.button.signin' | translate }}\n            </ion-button>\n      \n            <p text-center>\n              <ion-text color=\"light\">\n                Or {{ 'app.button.signin' | translate }} with:\n              </ion-text>\n            </p>\n      \n            <ion-grid class=\"btn-group\">\n              <ion-row>\n                <ion-col size=\"4\">\n                  <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      \n          </div>\n      \n          <!-- Other links -->\n          <div text-center margin-top>\n            <span class=\"paz\" tappable>\n              <ion-text color=\"light\">\n                New here? <strong>{{ 'app.button.signup' | translate }}</strong>\n              </ion-text>\n            </span>\n          </div>\n      </div>\n      <div *ngSwitchCase=\"'register'\">\n        <!-- Register form -->\n        <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n            <ion-item no-padding class=\"animated fadeInUp\">\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" item-start></ion-icon>\n                Last Name\n              </ion-label>\n              <ion-input color=\"secondary\" type=\"text\" formControlName=\"LastName\"></ion-input>\n            </ion-item>\n            <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('LastName').touched  && onRegisterForm.get('LastName').hasError('required')\">\n              <ion-text color=\"danger\">\n                This field is required\n              </ion-text>\n            </p>\n            <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"mail\" item-start></ion-icon>\n                    First Name\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"text\" formControlName=\"FirstName\"></ion-input>\n            </ion-item>\n            <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('FirstName').touched  && onRegisterForm.get('FirstName').hasError('required')\">\n                <ion-text color=\"danger\">\n                    This field is required\n                </ion-text>\n            </p>\n            <ion-item no-padding class=\"animated fadeInUp\">\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" item-start></ion-icon>\n                Email\n              </ion-label>\n              <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n              <ion-text color=\"danger\">\n                This field is required\n              </ion-text>\n            </p>\n      \n            <ion-item no-padding class=\"animated fadeInUp\">\n              <ion-label position=\"floating\">\n                <ion-icon name=\"lock\" item-start></ion-icon>\n                Password\n              </ion-label>\n              <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <p ion-text color=\"danger\" class=\"text08\" *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n              <ion-text color=\"danger\">\n                This field is required\n              </ion-text>\n            </p>\n          </form>\n      \n          <div margin-top>\n            <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" [disabled]=\"!onRegisterForm.valid\"\n              (click)=\"register()\" tappable>\n              <ion-icon name=\"log-in\"></ion-icon>\n              Sign Up\n            </ion-button>\n      \n            <p text-center>\n              <ion-text color=\"light\">\n                Or Sign Up with:\n              </ion-text>\n            </p>\n      \n            <ion-grid class=\"btn-group\">\n              <ion-row>\n                <ion-col size=\"4\">\n                  <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      \n          </div>\n      \n          <!-- Other links -->\n          <div text-center margin-top>\n            <span tappable>\n              <ion-text color=\"light\">\n                <strong>I have an account!</strong>\n              </ion-text>\n            </span>\n          </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/extras/authentication/authentication.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/extras/authentication/authentication.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)); }\n\n.paz {\n  position: relative;\n  z-index: 10; }\n"

/***/ }),

/***/ "./src/app/pages/extras/authentication/authentication.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/extras/authentication/authentication.page.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
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






var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, translate, formBuilder, router, Userclient) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.router = router;
        this.Userclient = Userclient;
        this.authSegment = 'login';
    }
    AuthenticationPage.prototype.ngOnInit = function () {
        this.onLoginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
        this.onRegisterForm = this.formBuilder.group({
            'FirstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'LastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose(([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]))],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    };
    AuthenticationPage.prototype.login = function () {
        this.Userclient.checkUser(this.onLoginForm.get('email').value, this.onLoginForm.get('password').value);
    };
    AuthenticationPage.prototype.register = function () {
        // tslint:disable-next-line:max-line-length
        this.Userclient.updateUser(this.onRegisterForm.get('password').value, this.onRegisterForm.get('LastName').value, this.onRegisterForm.get('FirstName').value, this.onRegisterForm.get('email').value);
    };
    AuthenticationPage.prototype.forgotPass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translate.get('app.pages.login.label.forgot'),
                            message: this.translate.get('app.pages.login.text.forgot'),
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'email',
                                    placeholder: this.translate.get('app.label.email')
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
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
                                                                        message: this.translate.get('app.pages.login.text.sended'),
                                                                        duration: 3000,
                                                                        position: 'bottom'
                                                                    })];
                                                                case 1:
                                                                    toast = _a.sent();
                                                                    toast.present();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.page.html */ "./src/app/pages/extras/authentication/authentication.page.html"),
            styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/pages/extras/authentication/authentication.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-extras-authentication-authentication-module.js.map
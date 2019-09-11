(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookcase-bookcase-module"],{

/***/ "./src/app/bookcase/bookcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookcase/bookcase.module.ts ***!
  \*********************************************/
/*! exports provided: BookcasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookcasePageModule", function() { return BookcasePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _bookcase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookcase.page */ "./src/app/bookcase/bookcase.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _bookcase_page__WEBPACK_IMPORTED_MODULE_6__["BookcasePage"]
    }
];
var BookcasePageModule = /** @class */ (function () {
    function BookcasePageModule() {
    }
    BookcasePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"]],
            declarations: [_bookcase_page__WEBPACK_IMPORTED_MODULE_6__["BookcasePage"]]
        })
    ], BookcasePageModule);
    return BookcasePageModule;
}());



/***/ }),

/***/ "./src/app/bookcase/bookcase.page.html":
/*!*********************************************!*\
  !*** ./src/app/bookcase/bookcase.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n    <ion-title color=\"dark\">bookcase</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"onBookForm\">\n    <ion-card>\n        <ion-card-content>\n            <ion-card-subtitle color=\"dark\">Time</ion-card-subtitle>\n            <ion-item lines=\"inset\">\n                <ion-label class=\"my-label\" color=\"dark\">Date</ion-label>\n                <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DDDD MMMM YYYY\" placeholder=\"today's date\" formControlName=\"date\"></ion-datetime> \n            </ion-item>\n            <ion-item lines=\"inset\">\n                <ion-label stacked color=\"dark\" class=\"my-label\"> Operation</ion-label>\n                <ion-input placeholder=\"                    \" formControlName=\"operationType\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"inset\">\n                <ion-label stacked color=\"dark\" class=\"my-label\"> hour</ion-label>\n                <ion-datetime display-format=\"HH:mm:ss\" picker-format=\"HH:mm:ss\" placeholder=\"total time\" formControlName=\"period\"></ion-datetime>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-content>\n            <ion-card-subtitle color=\"dark\">Surgeon</ion-card-subtitle>\n                    <ion-item button lines=\"none\" (click)=\"go()\">\n                        <ion-icon name=\"contact\" color=\"dark\"></ion-icon>\n                        <ion-label stacked color=\"dark\" class=\"my-label\">Surgeon Name</ion-label>\n                        <ion-text color='secondary'>{{nameSelected}}</ion-text>\n                    </ion-item>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-card-subtitle color=\"dark\">Priority</ion-card-subtitle>\n            <ion-item lines=\"none\">\n                <ion-range min=\"1\" max=\"4\" step=\"1\" snaps=\"true\" ticks=\"false\" color=\"dark\"  formControlName=\"prioritySelected\" (ionChange)=\"show(onBookForm.get('prioritySelected').value)\"></ion-range>\n                <ion-icon color=\"dark\" size=\"small\" slot=\"start\" name=\"warning\"></ion-icon>\n                <ion-icon color=\"dark\" slot=\"end\" name=\"warning\"></ion-icon>\n                <ion-text color=\"secondary\">{{priority}}</ion-text>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-card-subtitle color=\"dark\">Equipment</ion-card-subtitle>\n            <ion-item lines=\"none\">\n                <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" formControlName=\"equipment\"></ion-textarea>\n            </ion-item>\n            <ion-card-subtitle color=\"dark\">Anatheria</ion-card-subtitle>\n            <ion-item lines=\"none\">\n                <ion-textarea rows=\"2\" cols=\"4\" placeholder=\"Enter any notes here...\" formControlName=\"anatheria\"></ion-textarea>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n    </form>\n    <ion-button align=\"center\" class=\"buttonNext\" expand=\"block\" color=\"secondary\"   (click)=\"nextPage()\" [disabled]=\"!onBookForm.valid\">Next</ion-button>\n    <ion-button color=\"dark\" align=\"center\" class=\"buttonNext\" expand=\"block\"    (click)=\"gotoList()\" *ngIf=\"showBtn\">send</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bookcase/bookcase.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookcase/bookcase.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selector {\n  color: #d9d9dc; }\n\n.my-label {\n  font-size: auto;\n  font: bold; }\n\n.buttonNext {\n  width: 278px;\n  margin-left: auto;\n  margin-right: auto; }\n"

/***/ }),

/***/ "./src/app/bookcase/bookcase.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookcase/bookcase.page.ts ***!
  \*******************************************/
/*! exports provided: BookcasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookcasePage", function() { return BookcasePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _list_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list.page */ "./src/app/list/list.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _preview_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../preview/preview.page */ "./src/app/preview/preview.page.ts");
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







var BookcasePage = /** @class */ (function () {
    function BookcasePage(router, nativePageTransitions, modalcontrol, formBuilder, alertController, toastCtrl, loadingCtrl) {
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.modalcontrol = modalcontrol;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showBtn = false;
        this.userCase = {
            date: ' ',
            operationType: ' ',
            period: ' ',
            name: ' ',
            priority: ' ',
            equipment: ' ',
            anatheria: ' ',
        };
        this.options = {
            direction: 'left',
            duration: 100,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 50,
            androiddelay: 100,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
    }
    BookcasePage.prototype.ngOnInit = function () {
        this.onBookForm = this.formBuilder.group({
            'date': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])],
            'operationType': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])],
            'period': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])],
            'equipment': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])],
            'anatheria': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])],
            'prioritySelected': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([])]
        });
    };
    BookcasePage.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontrol.create({
                            component: _list_list_page__WEBPACK_IMPORTED_MODULE_4__["ListPage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var sample = data;
                            console.log(JSON.stringify(sample));
                            _this.nameSelected = sample.data.result;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BookcasePage.prototype.show = function (priority) {
        this.priority = priority;
        console.log(priority);
    };
    BookcasePage.prototype.nextPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userCase.date = this.onBookForm.get('date').value;
                        this.userCase.anatheria = this.onBookForm.get('anatheria').value;
                        this.userCase.equipment = this.onBookForm.get('equipment').value;
                        this.userCase.name = this.nameSelected;
                        this.userCase.operationType = this.onBookForm.get('operationType').value;
                        this.userCase.period = this.onBookForm.get('period').value;
                        this.userCase.priority = this.priority.toString();
                        return [4 /*yield*/, this.modalcontrol.create({
                                component: _preview_preview_page__WEBPACK_IMPORTED_MODULE_6__["PreviewPage"],
                                componentProps: { userCase: this.userCase }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            console.log('load data back: ' + JSON.stringify(data));
                            if (data.data.userCase === 'true') {
                                _this.showBtn = true;
                            }
                        });
                        console.log('created usercase: ' + JSON.stringify(this.userCase));
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BookcasePage.prototype.gotoList = function () {
        this.alertSuccess();
        this.router.navigate(['booking-list']);
    };
    BookcasePage.prototype.alertSuccess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success',
                            subHeader: 'Book successful',
                            buttons: [{
                                    text: 'OK'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookcasePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookcase',
            template: __webpack_require__(/*! ./bookcase.page.html */ "./src/app/bookcase/bookcase.page.html"),
            styles: [__webpack_require__(/*! ./bookcase.page.scss */ "./src/app/bookcase/bookcase.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], BookcasePage);
    return BookcasePage;
}());



/***/ })

}]);
//# sourceMappingURL=bookcase-bookcase-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extras-extras-module"],{

/***/ "./src/app/pages/extras/extras.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/extras/extras.module.ts ***!
  \***********************************************/
/*! exports provided: ExtrasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPageModule", function() { return ExtrasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _extras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras.page */ "./src/app/pages/extras/extras.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _extras_page__WEBPACK_IMPORTED_MODULE_6__["ExtrasPage"]
    }
];
var ExtrasPageModule = /** @class */ (function () {
    function ExtrasPageModule() {
    }
    ExtrasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_extras_page__WEBPACK_IMPORTED_MODULE_6__["ExtrasPage"]]
        })
    ], ExtrasPageModule);
    return ExtrasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/extras/extras.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/extras/extras.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.extras.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-list class=\"bg-primary\" [@staggerIn]='listExtras.length'>\n    <ion-item [routerDirection]=\"[extra.direct]\" [routerLink]=\"[extra.url]\" color=\"primary\" *ngFor=\"let extra of listExtras; let i = index\">\n      <ion-icon slot=\"start\" [name]=\"extra.icon\"></ion-icon>\n      <ion-label>\n        {{extra.title}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/extras/extras.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/extras/extras.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary))\n  ; }\n"

/***/ }),

/***/ "./src/app/pages/extras/extras.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/extras/extras.page.ts ***!
  \*********************************************/
/*! exports provided: ExtrasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPage", function() { return ExtrasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtrasPage = /** @class */ (function () {
    function ExtrasPage(navCtrl, translate) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.listExtras = [
            {
                title: 'Profile 1',
                url: '/extras/profile-one',
                direct: 'forward',
                icon: 'person'
            },
            {
                title: 'Profile 2',
                url: '/extras/profile-two',
                direct: 'forward',
                icon: 'person'
            },
            {
                title: 'Timeline',
                url: '/extras/timeline',
                direct: 'forward',
                icon: 'clock'
            },
            {
                title: 'Authentication (Login + Register)',
                url: '/extras/authentication',
                direct: 'forward',
                icon: 'lock'
            },
            {
                title: 'PopUp Menu',
                url: '/extras/popupmenu',
                direct: 'forward',
                icon: 'apps'
            },
            {
                title: 'Charts',
                url: '/extras/charts',
                direct: 'forward',
                icon: 'pie'
            },
            {
                title: 'Blog post',
                url: '/extras/post',
                direct: 'forward',
                icon: 'document'
            }
        ];
    }
    ExtrasPage.prototype.ngOnInit = function () {
    };
    ExtrasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extras',
            template: __webpack_require__(/*! ./extras.page.html */ "./src/app/pages/extras/extras.page.html"),
            styles: [__webpack_require__(/*! ./extras.page.scss */ "./src/app/pages/extras/extras.page.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _providers__WEBPACK_IMPORTED_MODULE_2__["TranslateProvider"]])
    ], ExtrasPage);
    return ExtrasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-extras-extras-module.js.map
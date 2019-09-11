(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                    }
                ]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
                })
            ],
            providers: [
                _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"],
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"light\">\n        <ion-menu-button color=\"dark\" slot=\"start\"></ion-menu-button>\n        <ion-title>\n            <ion-text color=\"dark\">\n                <!-- [placeholder]=\"translate.get('userlist.search')\" -->\n                <!-- {{ 'app.name' | translate }} -->\n                Hos<ion-text color=\"secondary\" class=\"fw700\">Tream</ion-text>\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"whitesmoke\">\n    <ion-slides [options]=\"slideOpts\">\n        <ion-slide>\n            <ion-card style=\"width: 400px ; height: 300px\">            \n                <ion-img no-margin  class=\"displayed\"   src=\"assets/img/img1.jpg\"></ion-img>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card style=\"width: 400px ; height: 300px\">\n                <ion-card-header color=\"dark\">TODO\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-item *ngFor=\"let todo of todos\">\n                        <ion-icon slot=\"start\" name=\"arrow-dropright\"></ion-icon>\n                        <ion-label>{{todo.content}}</ion-label>\n                        <ion-text color=\"secondary\">by {{todo.duedate}}</ion-text>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                        <ion-input placeholder=\"todo:\"></ion-input>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-grid [fixed]=\"true\">\n        <ion-row>\n            <ion-col>\n                <ion-item tappable=\"\" lines=\"none\">\n                    <img src=\"assets/img/doctor.png\"  (click)=\"go()\" class=\"call_img\">\n                </ion-item>\n                <ion-text color=\"dark\" class=\"textTitle\">OR list</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-item tappable=\"\" lines=\"none\">\n                   <img src=\"assets/img/wait.png\" (click)=\"goBookcase()\" class=\"call_img\">\n                </ion-item>\n                <ion-text color=\"dark\" class=\"textTitle2\">Bookcase</ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item tappable=\"\" lines=\"none\">\n                    <img src=\"assets/img/emerg.png\"  class=\"call_img\">\n                \n                </ion-item>\n                <ion-text color=\"dark\" class=\"textTitle2\">Emergency</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-item tappable=\"\" lines=\"none\">\n                    <img src=\"assets/img/call.png\" class=\"call_img\">\n                </ion-item>\n                <ion-text color=\"dark\" class=\"textTitle\">Contact</ion-text>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer class=\"animated fadeIn\">\n    <ion-toolbar color=\"light\">\n        <ion-grid no-padding>\n            <ion-row>\n                <ion-col size=\"4\" no-padding>\n                    <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"dark\" routerLink=\"/home\">\n                        <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n                        home\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"4\" no-padding>\n                    <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"dark\" routerLink=\"/booking-list\">\n                        <ion-icon slot=\"start\" name=\"beer\"></ion-icon>\n                        bookings\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"4\" no-padding>\n                    <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"dark\" routerLink=\"/about\">\n                        <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\n                        {{ 'app.pages.menu.settings' | translate }}\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".call_img {\n  margin-top: 30px;\n  margin-left: 30px;\n  size: 30cm; }\n\n.slogan {\n  margin-top: 0%; }\n\n.emer_img {\n  margin-top: 23px;\n  margin-left: 30px;\n  size: 30cm; }\n\n.logo {\n  width: 70%;\n  height: 70%; }\n\n.bg {\n  color: whitesmoke; }\n\nion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n; }\n\n.textTitle {\n  margin-left: 60px;\n  margin-top: auto;\n  size: auto; }\n\n.textTitle2 {\n  margin-left: 55px;\n  margin-top: auto;\n  size: auto; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(nav, router, nativePageTransitions) {
        this.nav = nav;
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 50,
            androiddelay: 100,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.items = [
            {
                name: 'one',
                slides: [{
                        title: 'Dreams Adventure',
                        imageUrl: 'assets/img/img1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'For the Weekend',
                        imageUrl: 'assets/img/img1.jpg',
                        songs: 4,
                        private: false
                    },
                    {
                        title: 'Family Time',
                        imageUrl: 'assets/img/img1.jpg',
                        songs: 5,
                        private: true
                    },
                    {
                        title: 'My Trip',
                        imageUrl: 'assets/img/img1.jpg',
                        songs: 12,
                        private: true
                    }]
            },
        ];
    }
    HomePage.prototype.ngOnInit = function () {
        this.todos = [
            { content: 'todo first',
                duedate: '6/1'
            },
            { content: 'todo second',
                duedate: '6/2'
            },
            { content: 'todo third',
                duedate: '6/3'
            },
            { content: 'todo fourth',
                duedate: '6/4'
            }
        ];
    };
    HomePage.prototype.go = function () {
        this.nativePageTransitions.slide(this.options);
        this.router.navigate(['boardlist']);
    };
    HomePage.prototype.goBookcase = function () {
        this.nativePageTransitions.slide(this.options);
        this.router.navigate(['bookcase']);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map
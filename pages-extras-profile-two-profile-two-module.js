(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extras-profile-two-profile-two-module"],{

/***/ "./src/app/pages/extras/profile-two/profile-two.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/profile-two/profile-two.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfileTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTwoPageModule", function() { return ProfileTwoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _profile_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-two.page */ "./src/app/pages/extras/profile-two/profile-two.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _profile_two_page__WEBPACK_IMPORTED_MODULE_6__["ProfileTwoPage"]
    }
];
var ProfileTwoPageModule = /** @class */ (function () {
    function ProfileTwoPageModule() {
    }
    ProfileTwoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_two_page__WEBPACK_IMPORTED_MODULE_6__["ProfileTwoPage"]]
        })
    ], ProfileTwoPageModule);
    return ProfileTwoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/extras/profile-two/profile-two.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/profile-two/profile-two.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.extras.profiletwo.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <div class=\"profile-bg\" [ngStyle]=\"{'background-image': 'url(' + user.coverImage +')'}\"></div>\n  <div class=\"content\">\n    <div class=\"profile-info\" padding>\n      <img class=\"profile-image\" [src]=\"user.profileImage\">\n      <ion-card class=\"bg-dark\" no-margin>\n        <ion-card-content>\n          <h3 class=\"profile-name\">\n            <ion-text color=\"light\">\n              {{user.name}}\n            </ion-text>\n          </h3>\n          <p>\n            <ion-text color=\"secondary\">\n              {{user.occupation}} &bull; {{user.location}}\n            </ion-text>\n          </p>\n          <p class=\"profile-description\">\n            <ion-text color=\"light\">\n              {{user.description}}\n            </ion-text>\n          </p>\n          <ion-button *ngIf=\"!following\" size=\"small\" color=\"tertiary\">Follow</ion-button>\n          <ion-button *ngIf=\"following\" class=\"follow-button\" size=\"small\" color=\"tertiary\">Following<ion-icon\n              name=\"checkmark\"></ion-icon>\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <ion-row class=\"profile-numbers\">\n      <ion-col size=\"4\" class=\"bg-primary\">\n        <p>\n          <ion-text color=\"secondary\">\n            Followers\n          </ion-text>\n        </p>\n        <h1 no-margin>\n          <ion-text color=\"light\">\n            {{user.followers}}\n          </ion-text>\n        </h1>\n      </ion-col>\n      <ion-col size=\"4\" class=\"bg-primary\">\n        <p>\n          <ion-text color=\"secondary\">\n            Following\n          </ion-text>\n        </p>\n        <h1 no-margin>\n          <ion-text color=\"light\">\n            {{user.following}}\n          </ion-text>\n        </h1>\n      </ion-col>\n      <ion-col size=\"4\" class=\"bg-primary\">\n        <p>\n          <ion-text color=\"secondary\">\n            Posts\n          </ion-text>\n        </p>\n        <h1 no-margin>\n          <ion-text color=\"light\">\n            {{user.posts}}\n          </ion-text>\n        </h1>\n      </ion-col>\n    </ion-row>\n    <div class=\"posts\">\n      <ion-card class=\"bg-white\" *ngFor=\"let post of posts\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img [src]=\"user.profileImage\">\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"sticky\">{{user.name}}</h2>\n            <p>{{post.date}}</p>\n          </ion-label>\n        </ion-item>\n        <img [src]=\"post.postImageUrl\">\n        <ion-card-content>\n          <p>{{post.text}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-button color=\"primary\" size=\"small\" icon-left>\n              <ion-icon name='thumbs-up'></ion-icon>\n              {{post.likes}} Likes\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-button color=\"secondary\" size=\"small\" icon-left>\n              <ion-icon name='text'></ion-icon>\n              {{post.comments}} Comments\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" align-self-center text-center>\n            <p>\n              {{post.timestamp}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/extras/profile-two/profile-two.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/profile-two/profile-two.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary))\n  ; }\n\n.profile-bg {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin-top: -16px;\n  height: 160px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center; }\n\n.content {\n  position: relative;\n  margin-top: -145px;\n  padding-top: 200px;\n  text-align: center; }\n\n.profile-image {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 100px;\n  margin: 20px auto 20px;\n  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5); }\n\n.profile-info {\n  width: 100%;\n  z-index: 2;\n  text-align: center; }\n\n.profile-name {\n  color: #444;\n  font-size: 26px; }\n\n.profile-description {\n  font-size: 15px;\n  color: #888; }\n\n.follow-button {\n  text-transform: none;\n  border-radius: 3px !important; }\n\n.follow-button ion-icon {\n    font-weight: bold;\n    padding-left: 5px;\n    font-size: 2.5rem; }\n\n.profile-numbers p {\n  color: #444;\n  font-size: medium;\n  margin-bottom: 3px; }\n\n.profile-numbers span {\n  font-weight: bold;\n  font-size: 2.4rem;\n  color: #34354c; }\n\n.posts {\n  text-align: justify; }\n"

/***/ }),

/***/ "./src/app/pages/extras/profile-two/profile-two.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/extras/profile-two/profile-two.page.ts ***!
  \**************************************************************/
/*! exports provided: ProfileTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTwoPage", function() { return ProfileTwoPage; });
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

var ProfileTwoPage = /** @class */ (function () {
    function ProfileTwoPage() {
        this.following = false;
        this.user = {
            name: 'João Firmino',
            profileImage: 'assets/img/avatar.jpeg',
            coverImage: 'assets/img/webapp-bg.jpg',
            occupation: 'Designer',
            location: 'Seattle, WA',
            description: 'A wise man once said: The more you do something, the better you will become at it.',
            followers: 456,
            following: 1052,
            posts: 35
        };
        this.posts = [
            {
                postImageUrl: 'assets/img/webapp-bg.jpg',
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
                date: 'November 5, 2016',
                likes: 12,
                comments: 4,
                timestamp: '11h ago'
            },
            {
                postImageUrl: 'assets/img/webapp-bg.jpg',
                text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
                date: 'October 23, 2016',
                likes: 30,
                comments: 64,
                timestamp: '30d ago'
            },
            {
                postImageUrl: 'assets/img/webapp-bg.jpg',
                date: 'June 28, 2016',
                likes: 46,
                text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
                comments: 66,
                timestamp: '4mo ago'
            },
        ];
    }
    ProfileTwoPage.prototype.ngOnInit = function () {
    };
    ProfileTwoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-two',
            template: __webpack_require__(/*! ./profile-two.page.html */ "./src/app/pages/extras/profile-two/profile-two.page.html"),
            styles: [__webpack_require__(/*! ./profile-two.page.scss */ "./src/app/pages/extras/profile-two/profile-two.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ProfileTwoPage);
    return ProfileTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-extras-profile-two-profile-two-module.js.map
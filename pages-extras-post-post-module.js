(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extras-post-post-module"],{

/***/ "./src/app/pages/extras/post/post.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/extras/post/post.module.ts ***!
  \**************************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/pages/extras/post/post.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]
    }
];
var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
        })
    ], PostPageModule);
    return PostPageModule;
}());



/***/ }),

/***/ "./src/app/pages/extras/post/post.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/extras/post/post.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.extras.post.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"post.postImageUrl\">\n\n  <ion-card class=\"bg-white\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.profileImage\">\n        </ion-avatar>\n        <ion-label>\n          <h2 class=\"sticky\">{{user.name}}</h2>\n          <p>{{post.date}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-card-content>\n        <h1>\n          <ion-text color=\"primary\">\n            {{post.title}}\n          </ion-text>\n        </h1>\n        <p>{{post.text}}</p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" size=\"full\" icon-left>\n            <ion-icon name='thumbs-up'></ion-icon>\n            {{post.likes}} Likes\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"secondary\" size=\"full\" icon-left>\n            <ion-icon name='text'></ion-icon>\n            {{post.comments}} Comments\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/extras/post/post.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/extras/post/post.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)); }\n\nion-card {\n  margin-top: -60px; }\n"

/***/ }),

/***/ "./src/app/pages/extras/post/post.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/extras/post/post.page.ts ***!
  \************************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
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

var PostPage = /** @class */ (function () {
    function PostPage() {
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
        this.post = {
            postImageUrl: 'assets/img/webapp-bg.jpg',
            title: 'Lorem Ipsum Donor',
            text: 'I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and I believe in miracles.',
            date: 'November 5, 2016',
            likes: 12,
            comments: 4,
            timestamp: '11h ago'
        };
    }
    PostPage.prototype.ngOnInit = function () {
    };
    PostPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.page.html */ "./src/app/pages/extras/post/post.page.html"),
            styles: [__webpack_require__(/*! ./post.page.scss */ "./src/app/pages/extras/post/post.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PostPage);
    return PostPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-extras-post-post-module.js.map
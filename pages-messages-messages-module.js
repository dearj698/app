(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./src/app/pages/messages/messages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.module.ts ***!
  \***************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/messages/messages.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" margin-bottom>\n        <ion-card *ngIf=\"!messages.length\" class=\"bg-white\" margin-top>\n          <ion-card-content>\n            <p text-center>\n              <ion-text color=\"primary\">You have no messages.</ion-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n  \n        <ion-list>\n          <ion-item-sliding *ngFor=\"let message of messages\">\n            <ion-item tappable routerLink=\"/message/{{message.id}}\">\n              <ion-label>\n                <h2 [ngClass]=\"{'fw700 text-white': !message.read}\">\n                  <ion-icon name=\"mail\" slot=\"start\" color=\"dark\" *ngIf=\"!message.read\"></ion-icon>\n                  <ion-icon name=\"mail-open\" slot=\"start\" color=\"primary\" *ngIf=\"message.read\"></ion-icon>\n                  <ion-text color=\"primary\">{{message.title}}</ion-text>\n                </h2>\n                <p [ngClass]=\"{'text-light': !message.read}\">\n                  <ion-text color=\"dark\">{{message.senderName}} ∙ {{message.date | date: 'MM/dd/yyyy'}}</ion-text>\n                </p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"deleteItem(message)\">Remove</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/messages/messages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n"

/***/ }),

/***/ "./src/app/pages/messages/messages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/messages/messages.page.ts ***!
  \*************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/message/message.service */ "./src/app/providers/message/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesPage = /** @class */ (function () {
    function MessagesPage(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    MessagesPage.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessagesPage.prototype.deleteItem = function (message) {
        this.messageService.delMessage(message);
    };
    MessagesPage.prototype.getMessages = function () {
        this.messages = this.messageService.getMessages();
    };
    MessagesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.page.html */ "./src/app/pages/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/messages/messages.page.scss")],
        }),
        __metadata("design:paramtypes", [_providers_message_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module.js.map
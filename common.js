(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic-native/native-page-transitions/ngx/index.js ***!
  \*************************************************************************/
/*! exports provided: NativePageTransitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativePageTransitions", function() { return NativePageTransitions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NativePageTransitions = /** @class */ (function (_super) {
    __extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativePageTransitions.prototype.slide = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "slide", {}, arguments); };
    NativePageTransitions.prototype.flip = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "flip", {}, arguments); };
    NativePageTransitions.prototype.fade = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "fade", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.drawer = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "drawer", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.curl = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "curl", { "platforms": ["iOS"] }, arguments); };
    NativePageTransitions.prototype.executePendingTransition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "executePendingTransition", {}, arguments); };
    NativePageTransitions.prototype.cancelPendingTransition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "cancelPendingTransition", {}, arguments); };
    NativePageTransitions.pluginName = "NativePageTransitions";
    NativePageTransitions.plugin = "com.telerik.plugins.nativepagetransitions";
    NativePageTransitions.pluginRef = "plugins.nativepagetransitions";
    NativePageTransitions.repo = "https://github.com/Telerik-Verified-Plugins/NativePageTransitions";
    NativePageTransitions.platforms = ["Android", "iOS", "Windows Phone 8"];
    NativePageTransitions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NativePageTransitions);
    return NativePageTransitions;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1wYWdlLXRyYW5zaXRpb25zL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNFN0IseUNBQWlCOzs7O0lBTzFELHFDQUFLLGFBQUMsT0FBZ0M7SUFVdEMsb0NBQUksYUFBQyxPQUFnQztJQVVyQyxvQ0FBSSxhQUFDLE9BQWdDO0lBV3JDLHNDQUFNLGFBQUMsT0FBZ0M7SUFXdkMsb0NBQUksYUFBQyxPQUFnQztJQVNyQyx3REFBd0I7SUFTeEIsdURBQXVCOzs7Ozs7SUFuRVoscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0F2RWxDO0VBdUUyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMge1xuICBkaXJlY3Rpb24/OiBzdHJpbmc7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBzbG93ZG93bmZhY3Rvcj86IG51bWJlcjtcbiAgc2xpZGVQaXhlbHM/OiBudW1iZXI7XG4gIGlvc2RlbGF5PzogbnVtYmVyO1xuICBhbmRyb2lkZGVsYXk/OiBudW1iZXI7XG4gIHdpbnBob25lZGVsYXk/OiBudW1iZXI7XG4gIGZpeGVkUGl4ZWxzVG9wPzogbnVtYmVyO1xuICBmaXhlZFBpeGVsc0JvdHRvbT86IG51bWJlcjtcbiAgYWN0aW9uPzogc3RyaW5nO1xuICBvcmlnaW4/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgTmF0aXZlIFBhZ2UgVHJhbnNpdGlvbnNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIE5hdGl2ZSBQYWdlIFRyYW5zaXRpb25zIHBsdWdpbiB1c2VzIG5hdGl2ZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gdG8gYW5pbWF0ZSB5b3VyIHRyYW5zaXRpb25zIGJldHdlZW4gdmlld3MuIFlvdSBoYXZlIGNvbXBsZXRlIGNvbnRyb2wgb3ZlciB0aGUgdHlwZSBvZiB0cmFuc2l0aW9uLCB0aGUgZHVyYXRpb24sIGFuZCBkaXJlY3Rpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXRpdmVQYWdlVHJhbnNpdGlvbnMsIE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtcGFnZS10cmFuc2l0aW9ucy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlUGFnZVRyYW5zaXRpb25zOiBOYXRpdmVQYWdlVHJhbnNpdGlvbnMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyBleGFtcGxlIG9mIGFkZGluZyBhIHRyYW5zaXRpb24gd2hlbiBhIHBhZ2UvbW9kYWwgY2xvc2VzXG4gKiBpb25WaWV3V2lsbExlYXZlKCkge1xuICpcbiAqICBsZXQgb3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMgPSB7XG4gKiAgICAgZGlyZWN0aW9uOiAndXAnLFxuICogICAgIGR1cmF0aW9uOiA1MDAsXG4gKiAgICAgc2xvd2Rvd25mYWN0b3I6IDMsXG4gKiAgICAgc2xpZGVQaXhlbHM6IDIwLFxuICogICAgIGlvc2RlbGF5OiAxMDAsXG4gKiAgICAgYW5kcm9pZGRlbGF5OiAxNTAsXG4gKiAgICAgZml4ZWRQaXhlbHNUb3A6IDAsXG4gKiAgICAgZml4ZWRQaXhlbHNCb3R0b206IDYwXG4gKiAgICB9XG4gKlxuICogIHRoaXMubmF0aXZlUGFnZVRyYW5zaXRpb25zLnNsaWRlKG9wdGlvbnMpXG4gKiAgICAudGhlbihvblN1Y2Nlc3MpXG4gKiAgICAuY2F0Y2gob25FcnJvcik7XG4gKlxuICogfVxuICpcbiAqXG4gKiAvLyBleGFtcGxlIG9mIGFkZGluZyBhIHRyYW5zaXRpb24gd2hlbiBwdXNoaW5nIGEgbmV3IHBhZ2VcbiAqIG9wZW5QYWdlKHBhZ2U6IGFueSkge1xuICpcbiAqICAgdGhpcy5uYXRpdmVQYWdlVHJhbnNpdGlvbnMuc2xpZGUob3B0aW9ucyk7XG4gKiAgIHRoaXMubmF2Q3RybC5wdXNoKHBhZ2UpO1xuICpcbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVQYWdlVHJhbnNpdGlvbnMnLFxuICBwbHVnaW46ICdjb20udGVsZXJpay5wbHVnaW5zLm5hdGl2ZXBhZ2V0cmFuc2l0aW9ucycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMubmF0aXZlcGFnZXRyYW5zaXRpb25zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvTmF0aXZlUGFnZVRyYW5zaXRpb25zJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVBhZ2VUcmFuc2l0aW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBzbGlkZSBhbmltYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzbGlkZShvcHRpb25zOiBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBmbGlwIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlVHJhbnNpdGlvbk9wdGlvbnN9IE9wdGlvbnMgZm9yIHRoZSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZsaXAob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgZmFkZSBhbmltYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSB9KVxuICBmYWRlKG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgc2xpZGUgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10gfSlcbiAgZHJhd2VyKG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgc2xpZGUgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGN1cmwob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIHBlbmRpbmcgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGVjdXRlUGVuZGluZ1RyYW5zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHBlbmRpbmcgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-68ea58b8.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-68ea58b8.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var iosTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 162).then(__webpack_require__.bind(null, /*! ./ios.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js"))},mdTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 163).then(__webpack_require__.bind(null, /*! ./md.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/md.transition.js"))};function transition(e){return new Promise(function(n,i){e.queue.write(function(){beforeTransition(e),runTransition(e).then(function(i){i.animation&&i.animation.destroy(),afterTransition(e),n(i)},function(n){afterTransition(e),i(n)})})})}function beforeTransition(e){var n=e.enteringEl,i=e.leavingEl;setZIndex(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),setPageHidden(n,!1),i&&setPageHidden(i,!1)}function runTransition(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(e)];case 1:return[2,(n=i.sent())?animation(n,e):noAnimation(e)]}})})}function afterTransition(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function getAnimationBuilder(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})}function animation(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,waitForReady(n,!0)];case 1:return t.sent(),[4,n.animationCtrl.create(e,n.baseEl,n)];case 2:return i=t.sent(),fireWillEvents(n.enteringEl,n.leavingEl),[4,playTransition(i,n)];case 3:return t.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&fireDidEvents(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return n=e.enteringEl,i=e.leavingEl,[4,waitForReady(e,!1)];case 1:return t.sent(),fireWillEvents(n,i),fireDidEvents(n,i),[2,{hasCompleted:!0}]}})})}function waitForReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return i=(void 0!==e.deepWait?e.deepWait:n)?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e?[4,e(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(e,n){var i=n.progressCallback,t=new Promise(function(n){return e.onFinish(n)});return i?(e.progressStart(),i(e)):e.play(),t}function fireWillEvents(e,n){lifecycle(n,"ionViewWillLeave"),lifecycle(e,"ionViewWillEnter")}function fireDidEvents(e,n){lifecycle(e,"ionViewDidEnter"),lifecycle(n,"ionViewDidLeave")}function lifecycle(e,n){if(e){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function shallowReady(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function deepReady(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function setZIndex(e,n,i){void 0!==e&&(e.style.zIndex="back"===i?"99":"101"),void 0!==n&&(n.style.zIndex="100")}

/***/ }),

/***/ "./src/app/providers/message/message.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/message/message.service.ts ***!
  \******************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-messages */ "./src/app/providers/message/mock-messages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageCounter = 0;
        this.messages = _mock_messages__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    MessageService.prototype.findById = function (id) {
        return Promise.resolve(this.messages[id - 1]);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    MessageService.prototype.getItem = function (id) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === parseInt(id)) {
                return this.messages[i];
            }
        }
        return null;
    };
    MessageService.prototype.delMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/providers/message/mock-messages.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/message/mock-messages.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var messages = [
    {
        id: 1,
        title: "New Offer 25% OFF",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 2,
        senderName: "Caroline Broker",
        email: "caroline@ionbooking.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    },
    {
        id: 2,
        title: "New Offer 15% OFF!",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@ionbooking.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 3,
        title: "New Cruises coming!",
        date: "2017-10-20T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@ionbooking.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 4,
        title: "Your New Trip",
        date: "2017-10-09T00:00:00.000-0300",
        senderId: 5,
        senderName: "Jessica Stevens",
        email: "jessica@ionbooking.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    }
];
/* harmony default export */ __webpack_exports__["default"] = (messages);


/***/ })

}]);
//# sourceMappingURL=common.js.map
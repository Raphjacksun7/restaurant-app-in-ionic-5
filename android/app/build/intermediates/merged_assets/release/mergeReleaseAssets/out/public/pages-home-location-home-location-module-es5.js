(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-location-home-location-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-location/home-location.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-location/home-location.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content padding class=\"animated fadeIn fast\" class=\"bg-light\">\r\n  <div class=\"theme-bg\"></div>\r\n  <ion-row class=\"scape-top\">\r\n    <ion-col class=\"center\">\r\n            <ion-img class=\"img\" src=\"assets/imgs/log1.jpeg\">\r\n            </ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"position-b\">\r\n    <ion-col>\r\n      <ion-button expand=\"block\" size=\"medium\" color=\"dark\" (click)=\"goToHomeResults()\">\r\n        <ion-text color=\"light\">{{ 'app.pages.homelocation.label.mylocation' | translate }}</ion-text>\r\n      </ion-button>    \r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home-location/home-location.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-location/home-location.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLocationPageModule", function() { return HomeLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-location.page */ "./src/app/pages/home-location/home-location.page.ts");








var routes = [
    {
        path: '',
        component: _home_location_page__WEBPACK_IMPORTED_MODULE_7__["HomeLocationPage"]
    }
];
var HomeLocationPageModule = /** @class */ (function () {
    function HomeLocationPageModule() {
    }
    HomeLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_home_location_page__WEBPACK_IMPORTED_MODULE_7__["HomeLocationPage"]]
        })
    ], HomeLocationPageModule);
    return HomeLocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-location/home-location.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-location/home-location.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n}\n:host ion-list.list-md {\n  padding: 0;\n}\n.center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  justify-content: center;\n  align-content: stretch;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.theme-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n  background-color: #fff;\n  background-position: center center;\n}\n.scape-top {\n  margin-top: 100px;\n}\n.position-b {\n  bottom: 1%;\n  right: 5%;\n  left: 5%;\n  position: absolute;\n}\n.img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvaG9tZS1sb2NhdGlvbi9ob21lLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1sb2NhdGlvbi9ob21lLWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNGQUFBO0FDQUo7QURHUTtFQUNJLFVBQUE7QUNEWjtBREtBO0VBQ0Usb0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0EsaUJBQUE7RUFDQSx3QkFBQTtFQUlBLHVCQUFBO0VBR0Esc0JBQUE7RUFDQSx5QkFBQTtFQUlBLG1CQUFBO0FDRkY7QURNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUNIRjtBRE1BO0VBQ0UsaUJBQUE7QUNIRjtBRE1BO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1sb2NhdGlvbi9ob21lLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKTtcclxuICB9XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgJi5saXN0LW1kIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGhlbWUtYmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY2FwZS10b3Age1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4ucG9zaXRpb24tYiB7XHJcbiAgYm90dG9tOiAxJTtcclxuICByaWdodDogNSU7XHJcbiAgbGVmdDogNSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xufVxuOmhvc3QgaW9uLWxpc3QubGlzdC1tZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGhlbWUtYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnNjYXBlLXRvcCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4ucG9zaXRpb24tYiB7XG4gIGJvdHRvbTogMSU7XG4gIHJpZ2h0OiA1JTtcbiAgbGVmdDogNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home-location/home-location.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-location/home-location.page.ts ***!
  \***********************************************************/
/*! exports provided: HomeLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLocationPage", function() { return HomeLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var HomeLocationPage = /** @class */ (function () {
    function HomeLocationPage(navCtrl, menuCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.menuCtrl.enable(false);
    }
    HomeLocationPage.prototype.goToHomeResults = function () {
        this.navCtrl.navigateRoot('/restaurant-list/');
    };
    HomeLocationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] }
    ]; };
    HomeLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-location',
            template: __webpack_require__(/*! raw-loader!./home-location.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-location/home-location.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./home-location.page.scss */ "./src/app/pages/home-location/home-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]])
    ], HomeLocationPage);
    return HomeLocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-location-home-location-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'app.pages.editprofile.title.header' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"profile\">\r\n  <ion-card no-margin>\r\n    <ion-card-content class=\"bg-profile\">\r\n      <img src=\"assets/imgs/log1.jpeg\">\r\n      <h1 class=\"fw500\">Nom de l'utilisateur</h1>\r\n      <ion-button icon-left color=\"secondary\">\r\n        <ion-icon name=\"photos\"></ion-icon> \r\n        {{ 'app.label.edit' | translate }} / {{ 'app.label.insertavatar' | translate }}\r\n      </ion-button>\r\n    </ion-card-content>\r\n  \r\n    <ion-grid fixed no-padding>\r\n      <ion-row>\r\n        <ion-col size=\"12\" padding>\r\n\r\n          <ion-list margin-bottom>\r\n            <ion-list-header color=\"light\">\r\n              <ion-label class=\"fw700\">Paramètre de votre compte </ion-label>\r\n            </ion-list-header>\r\n\r\n            <ion-item>\r\n              <ion-label color=\"dark\" position=\"stacked\">Nom complet </ion-label>\r\n              <ion-input inputmode=\"text\" placeholder=\"Ex..: User\" value=\"username\"></ion-input>\r\n            </ion-item>\r\n    \r\n            <ion-item>\r\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.email' | translate }}:</ion-label>\r\n              <ion-input inputmode=\"email\" placeholder=\"Ex.: xyz@example.com\" value=\"xyz@xyz.com\"></ion-input>\r\n            </ion-item>\r\n    \r\n            <ion-item>\r\n              <ion-label color=\"dark\" position=\"stacked\">Numéro de téléphone</ion-label>\r\n              <ion-input inputmode=\"number\" placeholder=\"+229 90 00 00 48\"></ion-input>\r\n            </ion-item>\r\n    \r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"dark\" routerLink=\"/restaurant-list/\">Changez de mot de passe</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n  \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-button size=\"large\" expand=\"full\" color=\"dark\" (click)=\"sendData()\" no-margin>Enregistrer</ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");








var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0ZBQUE7QUNBSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRko7O0FER0k7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNETjs7QURJTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQ0hSOztBRE1NO0VBRUUsa0JBQUE7QUNMUjs7QURrQkk7RUFDRSxrREFBQTtBQ2hCTjs7QURxQkk7RUFDRSxTQUFBO0FDbkJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LDI1NSwyNTUsIC42NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICAvLyBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG5cclxuICAgIC8vICAgaDMge1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9tIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSkgO1xufVxuXG4ucHJvZmlsZSBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGUgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgd2lkdGg6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm94LXNoYWRvdzogMCAwIDI4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaDEge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ucHJvZmlsZSBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbi5wcm9maWxlIGlvbi1idXR0b20gYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");




var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.sendData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 2000
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        loader.onWillDismiss().then(function (l) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                                        this.navCtrl.navigateForward('/home-location');
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] }
    ]; };
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\r\n  <div class=\"theme-bg\"></div>\r\n  <div class=\"auth-content\">\r\n\r\n    <!-- Logo -->\r\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n      <div class=\"logo\"></div>\r\n      <h4 no-margin>\r\n          <ion-text color=\"secondary\">Connexion</ion-text>\r\n      </h4>\r\n    </div>\r\n\r\n    <!-- Login form -->\r\n    <form [formGroup]=\"onLoginForm\" #form=\"ngForm\"  method=\"post\" class=\"list-form\">\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"mail\" item-start></ion-icon>\r\n            Email\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" [(ngModel)]=\"email\" type=\"email\"  formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('email').touched && onLoginForm.get('email').hasError('required')\">\r\n        <ion-text color=\"warning\">\r\n          {{ 'app.label.errors.field' | translate }}\r\n        </ion-text>\r\n      </p>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"lock\" item-start></ion-icon>\r\n          Mot de passe\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"password\" [(ngModel)]=\"password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <p ion-text color=\"warning\" class=\"text08\" *ngIf=\"onLoginForm.get('password').touched && onLoginForm.get('password').hasError('required')\">\r\n        <ion-text color=\"warning\">\r\n          {{ 'app.label.errors.field' | translate }}\r\n        </ion-text>\r\n        </p>\r\n    </form>\r\n\r\n    <p text-right tappable (click)=\"forgotPass()\" class=\"paz\">\r\n      <ion-text>\r\n        <strong>Mot de passe oublié ?</strong>\r\n      </ion-text>\r\n    </p>\r\n\r\n    <div>\r\n      <ion-button icon-left size=\"medium\" expand=\"full\" type=\"submit\" shape=\"round\" color=\"dark\" (click)=\"login()\" [disabled]=\"!onLoginForm.valid\" tappable>\r\n        <ion-icon name=\"log-in\"></ion-icon>\r\n        Valider\r\n      </ion-button>\r\n\r\n      <p text-center>\r\n        <ion-text>\r\n            Connectez-vous avec:\r\n        </ion-text>\r\n      </p>\r\n\r\n      <ion-grid class=\"btn-group\">\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\r\n              <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\r\n              <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\r\n              <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </div>\r\n\r\n    <!-- Other links -->\r\n    <div text-center margin-top>\r\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\r\n        <ion-text>\r\n          Noveau ? <strong>Inscrivez-vous</strong>\r\n        </ion-text>\r\n      </span>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: #fff;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLnRoZW1lLWJnIHtcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIHotaW5kZXg6IDA7XHJcbi8vICAgICBvcGFjaXR5OiAuNDsgLy8uMTJcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Zvb2Rpb25pYzItYmcuanBnXCIpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyB9XHJcblxyXG4ucGF6IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wYXoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, authService, translate, formBuilder, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.onLoginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Veuillez-vous partinentez s'l vous plait",
                            spinner: 'crescent',
                            duration: 4000
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        this.authService.usertoken(this.email, this.password)
                            .subscribe(function (data) {
                            console.log(data.content);
                            _this.authService.login(data.content.token).subscribe(function (data) {
                                console.log(data);
                                loader.onWillDismiss().then(function () {
                                    _this.navCtrl.pop();
                                });
                                _this.alertService.presentToast("Bienvenue " + data.username);
                            }, function (err) {
                                _this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous");
                                console.log(err);
                                return;
                            });
                            console.log(data);
                        }, function (error) {
                            _this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous");
                            console.log(error);
                            return;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.forgotPass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Mot de passe oublié ?",
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
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
    // // //
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.navigateRoot('/register');
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _providers__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es5.js.map
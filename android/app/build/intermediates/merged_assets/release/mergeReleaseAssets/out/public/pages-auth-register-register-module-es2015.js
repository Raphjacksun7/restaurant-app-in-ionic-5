(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\r\n\r\n  <div class=\"auth-content\">\r\n    <!-- Logo -->\r\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n      <div class=\"logo\"></div>\r\n      <h3 no-margin>\r\n        <ion-text color=\"light\" class=\"fw700\">\r\n          <ion-text color=\"secondary\">Inscription</ion-text>\r\n        </ion-text>\r\n      </h3>\r\n    </div>\r\n\r\n    <!-- Register form -->\r\n    <form [formGroup]=\"onRegisterForm\" #form=\"ngForm\"  method=\"post\" class=\"list-form\">\r\n        <ion-grid>\r\n            <ion-row>\r\n              <ion-col>\r\n                  <ion-item no-padding class=\"animated fadeInUp\">\r\n                      <ion-label position=\"floating\">\r\n                        Nom\r\n                      </ion-label>\r\n                      <ion-input color=\"secondary\" [(ngModel)]=\"lastname\" formControlName=\"lName\"></ion-input>\r\n                    </ion-item>\r\n                    <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('lName').touched && onRegisterForm.get('lName').hasError('required')\">\r\n                      <ion-text color=\"warning\">\r\n                        {{ 'app.label.errors.field' | translate }}\r\n                      </ion-text>\r\n                    </p>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item no-padding class=\"animated fadeInUp\">\r\n                      <ion-label position=\"floating\">\r\n                        Prénom\r\n                      </ion-label>\r\n                      <ion-input color=\"secondary\" [(ngModel)]=\"firstname\" formControlName=\"fName\"></ion-input>\r\n                    </ion-item>\r\n                    <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('fName').touched && onRegisterForm.get('fName').hasError('required')\">\r\n                      <ion-text color=\"warning\">\r\n                        {{ 'app.label.errors.field' | translate }}\r\n                      </ion-text>\r\n                    </p>\r\n              </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"mail\" item-start></ion-icon>\r\n          Email\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"email\" [(ngModel)]=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\r\n        <ion-text color=\"warning\">\r\n          {{ 'app.label.errors.field' | translate }}\r\n        </ion-text>\r\n      </p>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n          <ion-label position=\"floating\">\r\n            <ion-icon ios=\"ios-call\" md=\"md-call\" item-start></ion-icon>\r\n            Telephone\r\n          </ion-label>\r\n          <ion-input color=\"secondary\" type=\"tel\" [(ngModel)]=\"tel\" formControlName=\"tel\"></ion-input>\r\n        </ion-item>\r\n        <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('tel').touched && onRegisterForm.get('tel').hasError('required')\">\r\n          <ion-text color=\"warning\">\r\n            {{ 'app.label.errors.field' | translate }}\r\n          </ion-text>\r\n        </p>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n          <ion-icon name=\"lock\" item-start></ion-icon>\r\n          {{ 'app.label.password' | translate }}\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"password\" [(ngModel)]=\"password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <p ion-text color=\"warning\" class=\"text08\" *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\r\n        <ion-text color=\"warning\">\r\n          {{ 'app.label.errors.field' | translate }}\r\n        </ion-text>\r\n      </p>\r\n    </form>\r\n\r\n    <div margin-top>\r\n      <ion-button icon-left size=\"medium\" type=\"submit\"  expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"register()\" [disabled]=\"!onRegisterForm.valid\"\r\n        tappable>\r\n        <ion-icon name=\"log-in\"></ion-icon>\r\n        Valider\r\n      </ion-button>\r\n\r\n      <p text-center>\r\n        <ion-text>\r\n          Connectez-vous avec:\r\n        </ion-text>\r\n      </p>\r\n\r\n      <ion-grid class=\"btn-group\">\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"tertiary\">\r\n              <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"tertiary\">\r\n              <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"tertiary\">\r\n              <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </div>\r\n\r\n    <!-- Other links -->\r\n    <div text-center margin-top>\r\n      <span (click)=\"goToLogin()\" tappable>\r\n        <ion-text>\r\n          <strong>J'ai déja un compte!</strong>\r\n        </ion-text>\r\n      </span>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");





let RegisterPage = class RegisterPage {
    constructor(navCtrl, menuCtrl, loadingCtrl, formBuilder, authService, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            'fName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'lName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'tel': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message: "Veuillez-vous partinentez s'l vous plait",
                spinner: 'crescent',
                duration: 3000
            });
            loader.present();
            let fullName = this.firstname + '  ' + this.lastname;
            this.authService.register(this.email, fullName, this.password, this.tel).subscribe(data => {
                console.log(data);
                this.authService.usertoken(this.email, this.password)
                    .subscribe(data => {
                    console.log(data.content);
                    this.authService.login(data.content.token).subscribe(data => {
                        console.log(data);
                        loader.onWillDismiss().then(() => {
                            this.navCtrl.pop();
                        });
                        this.alertService.presentToast("Bienvenue " + data.username);
                    }, err => {
                        this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous");
                        console.log(err);
                        return;
                    });
                    console.log(data);
                    return;
                }, error => {
                    this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous");
                    console.log(error);
                    return;
                });
            }, error => {
                console.log(error);
            });
        });
    }
    goToLogin() {
        this.navCtrl.navigateRoot('/login');
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-register-register-module-es2015.js.map
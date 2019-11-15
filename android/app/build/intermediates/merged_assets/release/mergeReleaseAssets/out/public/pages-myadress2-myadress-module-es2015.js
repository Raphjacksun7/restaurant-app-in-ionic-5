(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myadress2-myadress-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/myadress2/myadress.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/myadress2/myadress.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Adresse de livraison </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-padding-start\" color=\"bg-light\" tappable (click)=\"addAddress()\">\r\n      <ion-icon name=\"add\" slot=\"start\" ></ion-icon>\r\n      <ion-label>  Ajouter une nouvelle adresse</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"bg-light\">\r\n  \r\n  <div *ngIf=\"address?.length > 0\">\r\n    <ion-col *ngFor=\"let adr of address\" class=\"ion-padding-vertical\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n             {{ adr.adress }}\r\n          </ion-label>\r\n          <ion-icon slot=\"end\" ios=\"ios-create\" md=\"md-create\"  tappable routerLink=\"/update-address/{{adr.id}}\"></ion-icon>\r\n          <ion-icon slot=\"end\" name=\"done-all\" color=\"dark\" (click)=\"setDefault(adr.id , adr.quartier , adr.ville , adr.adress)\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer padding>\r\n  <ion-button size=\"default\" expand=\"block\" color=\"dark\"  (click)=\"goValidCommand()\">\r\n    <ion-text color=\"light\"> Suivant </ion-text>\r\n  </ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/myadress2/myadress.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/myadress2/myadress.module.ts ***!
  \****************************************************/
/*! exports provided: MyAdressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdressPageModule", function() { return MyAdressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _myadress_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myadress.page */ "./src/app/pages/myadress2/myadress.page.ts");








const routes = [
    {
        path: '',
        component: _myadress_page__WEBPACK_IMPORTED_MODULE_7__["MyAdressPage"]
    }
];
let MyAdressPageModule = class MyAdressPageModule {
};
MyAdressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_myadress_page__WEBPACK_IMPORTED_MODULE_7__["MyAdressPage"]]
    })
], MyAdressPageModule);



/***/ }),

/***/ "./src/app/pages/myadress2/myadress.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/myadress2/myadress.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n\n.profile .position {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvbXlhZHJlc3MyL215YWRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXlhZHJlc3MyL215YWRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FDQUo7O0FES0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREdJO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRE47O0FESU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUNIUjs7QURNTTtFQUVFLGtCQUFBO0FDTFI7O0FEa0JJO0VBQ0Usa0RBQUE7QUNoQk47O0FEcUJJO0VBQ0UsU0FBQTtBQ25CTjs7QUR1QkU7RUFDRSxTQUFBO0FDckJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXlhZHJlc3MyL215YWRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gcGFkZGluZy1ib3R0b206IDI4cHg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI4cHggcmdiYSgyNTUsMjU1LDI1NSwgLjY1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgLy8gICBoMyB7XHJcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAvLyAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1idXR0b20ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvc2l0aW9uIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSkgO1xufVxuXG4ucHJvZmlsZSBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGUgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgd2lkdGg6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm94LXNoYWRvdzogMCAwIDI4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaDEge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ucHJvZmlsZSBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbi5wcm9maWxlIGlvbi1idXR0b20gYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2ZpbGUgLnBvc2l0aW9uIHtcbiAgYm90dG9tOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/myadress2/myadress.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/myadress2/myadress.page.ts ***!
  \**************************************************/
/*! exports provided: MyAdressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdressPage", function() { return MyAdressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");






let MyAdressPage = class MyAdressPage {
    constructor(navCtrl, loadingCtrl, toastCtrl, service, auth, route, storage, translate) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.auth = auth;
        this.route = route;
        this.storage = storage;
        this.translate = translate;
        this.address = [];
    }
    ngOnInit() {
        this.getUserAddress();
        this.getOrders();
    }
    getOrders() {
        if (this.route.getCurrentNavigation().extras.state) {
            this.addressData = this.route.getCurrentNavigation().extras.state.orders;
            console.log(this.addressData);
        }
    }
    ionViewWillEnter() {
        this.getUserAddress();
    }
    getUserAddress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.auth.getToken().then(() => {
                if (this.auth.isLoggedIn) {
                    this.token = this.auth.token;
                }
            });
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                spinner: 'crescent',
                duration: 50000
            });
            yield loading.present();
            yield this.service.getUserAddress(this.token)
                .subscribe(res => {
                console.log(res);
                this.address = res.content;
                this.address = JSON.parse(JSON.stringify(this.address));
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    addAddress() {
        this.navCtrl.navigateForward('/add-address');
    }
    setDefault(id, quartier, ville, adress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.service.setDefaultAddress(id, this.token).subscribe(res => {
                console.log(res);
                this.storage.setItem('idDefault', id);
                this.storage.setItem('quartierDefault', quartier);
                this.storage.setItem('villeDefault', ville);
                this.storage.setItem('adressDefault', adress);
                this.getUserAddress();
            }, err => {
                console.log(err);
            });
        });
    }
    goValidCommand() {
        let navExtra = {
            state: {
                orders: this.addressData
            }
        };
        this.route.navigate(['validation'], navExtra);
    }
};
MyAdressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["AddressService"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] }
];
MyAdressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myadress',
        template: __webpack_require__(/*! raw-loader!./myadress.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/myadress2/myadress.page.html"),
        styles: [__webpack_require__(/*! ./myadress.page.scss */ "./src/app/pages/myadress2/myadress.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["AddressService"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]])
], MyAdressPage);



/***/ })

}]);
//# sourceMappingURL=pages-myadress2-myadress-module-es2015.js.map
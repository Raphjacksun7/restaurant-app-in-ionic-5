(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-address-add-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-address/add-address.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-address/add-address.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Ajouter une adresse de livraison</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content padding color=\"bg-light\" class=\"animated fadeIn\">\r\n\r\n  <!-- Add Address Form -->\r\n  <form [formGroup]=\"onAddAddressForm\" #form=\"ngForm\"  method=\"post\" class=\"list-form\">\r\n      <h2 ion-text margin>\r\n          Google Map\r\n      </h2>\r\n      <ion-button icon-left size=\"medium\" expand=\"block\" shape=\"round\" (click)=\"goToMap()\" color=\"dark\" tappable>\r\n          <ion-icon slot=\"start\" name=\"pin\" color=\"light\"></ion-icon>\r\n          <ion-text color=\"light\">Selectioner un emplacement</ion-text>\r\n      </ion-button>\r\n\r\n      <h2 ion-text margin>\r\n          Détail sur cette adresse\r\n      </h2>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            Quatier\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"text\" [(ngModel)]=\"distric\" formControlName=\"distric\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            Ville\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"text\" [(ngModel)]=\"city\" formControlName=\"city\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            Adresse\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"text\" [(ngModel)]=\"adresse\" formControlName=\"address\"></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            Entreprise (Optionel)\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"text\" [(ngModel)]=\"entreprise\"formControlName=\"entreprise\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item no-padding class=\"animated fadeInUp\">\r\n        <ion-label position=\"floating\">\r\n            Instruction (Optionel)\r\n        </ion-label>\r\n        <ion-input color=\"secondary\" type=\"text\" [(ngModel)]=\"institue\" formControlName=\"institue\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-padding no-margin>\r\n  <ion-button no-padding no-margin icon-left size=\"large\" expand=\"full\" (click)=\"SendAddress()\"  color=\"dark\" [disabled]=\"!onAddAddressForm.valid\" tappable>\r\n    <ion-text color=\"light\">Valider cette adresse</ion-text>\r\n  </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/add-address/add-address.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-address/add-address.module.ts ***!
  \*********************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-address.page */ "./src/app/pages/add-address/add-address.page.ts");








const routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_7__["AddAddressPage"]
    }
];
let AddAddressPageModule = class AddAddressPageModule {
};
AddAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_7__["AddAddressPage"]]
    })
], AddAddressPageModule);



/***/ }),

/***/ "./src/app/pages/add-address/add-address.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-address/add-address.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQ0FKOztBRElBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0RGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FESUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxyXG4gIH1cclxufVxyXG5cclxuI21hcF9jYW52YXMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiBcclxuIFxyXG4jYWRkcmVzcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIFxyXG4jbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuIFxyXG4ubWFwLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIFxyXG4gICNtYXBfY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gIH1cclxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn1cblxuI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/add-address/add-address.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-address/add-address.page.ts ***!
  \*******************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_map_map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/map/map.page */ "./src/app/pages/modal/map/map.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");








let AddAddressPage = class AddAddressPage {
    constructor(route, formBuilder, modalCtrl, address, toastController, auth, http) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.address = address;
        this.toastController = toastController;
        this.auth = auth;
        this.http = http;
    }
    ngOnInit() {
        this.onAddAddressForm = this.formBuilder.group({
            'distric': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            'city': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            'entreprise': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
            'institue': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])]
        });
    }
    ionViewWillEnter() {
        this.auth.getToken().then(() => {
            if (this.auth.isLoggedIn) {
                this.token = this.auth.token;
                this.userData = this.auth.userData;
            }
        });
    }
    SendAddress() {
        this.address.addAddress(this.distric, this.city, this.entreprise, this.location.latitude, this.location.longitude, this.adresse, this.institue, this.token)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data.content);
            const toast = yield this.toastController.create({
                message: 'Vous avez ajouter un nouvel adresse !',
                duration: 2000
            });
            toast.present();
        }), err => {
            console.log(err);
        });
    }
    goToMap() {
        this.modalCtrl.create({ component: _modal_map_map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"], componentProps: { location: this.location } })
            .then(modal => {
            modal.onDidDismiss().then(modalData => {
                if (!modalData.data)
                    return;
                console.log(modalData.data);
                this.location = {
                    latitude: modalData.data.lat,
                    longitude: modalData.data.lng
                };
            });
            modal.present();
        });
    }
};
AddAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_7__["AddressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AddAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-address',
        template: __webpack_require__(/*! raw-loader!./add-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-address/add-address.page.html"),
        styles: [__webpack_require__(/*! ./add-address.page.scss */ "./src/app/pages/add-address/add-address.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _providers__WEBPACK_IMPORTED_MODULE_7__["AddressService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], AddAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-address-add-address-module-es2015.js.map
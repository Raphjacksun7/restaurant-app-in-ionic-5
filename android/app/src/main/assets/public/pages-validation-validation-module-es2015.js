(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-validation-validation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/validation/validation.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/validation/validation.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons color=\"light\" slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>\r\n      Validation\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list no-margin no-padding>\r\n        <ion-item  no-padding-vertical no-margin class=\"bg-white\" lines=\"full\">\r\n            <ion-label text-wrap class=\"policeAndColorAndAlert\">\r\n                Vous serez livrer dans : <strong> {{ fsfs }} 1h</strong> si vous lancer la commande\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item  no-padding-vertical no-margin class=\"bg-white\" lines=\"full\">\r\n              <ion-label>\r\n                  <ion-grid class=\"filters\" no-padding >\r\n                      <ion-row>\r\n                        <ion-col  size=\"4\">\r\n                            <h2 class=\"left\">\r\n                              <img src=\"assets/imgs/map.jpg\">\r\n                            </h2>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                            <h2>\r\n                              <ion-text><strong>Lieu de la livraison :</strong><br>{{userAddress}}</ion-text>\r\n                            </h2>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                  </ion-grid>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item  no-padding-vertical no-margin class=\"bg-white\" lines=\"full\">\r\n                <ion-label>\r\n                    <ion-grid class=\"filters\" no-padding >\r\n                        <ion-row>\r\n                          <ion-text class=\"policeAndColor\">Numéro de télephone</ion-text>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                          <h2 class=\"right\">\r\n                             <ion-text> {{tel}} </ion-text>\r\n                          </h2>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                  </ion-label>\r\n              </ion-item>\r\n              <ion-item  no-padding-vertical no-margin class=\"bg-white\" lines=\"full\">\r\n                  <ion-label>\r\n                      <ion-grid class=\"filters\" no-padding >\r\n                          <ion-row>\r\n                            <ion-text class=\"policeAndColor\">Détails de paiement</ion-text>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <h2 class=\"right\">\r\n                               <ion-text> {{ commandData.panier_payement }} </ion-text>\r\n                            </h2>\r\n                          </ion-row>\r\n                      </ion-grid>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item  no-padding-vertical no-margin class=\"bg-white\" lines=\"full\">\r\n                        <ion-grid class=\"filters\" no-padding >\r\n                            <ion-row>\r\n                              <ion-text class=\"policeAndColor\">Détails de votre commande</ion-text>\r\n                            </ion-row>\r\n                            <ion-row padding-vertical *ngFor=\"let command of commande\">\r\n                                <ion-col size=\"6\">\r\n                                    <ion-label ion-text class=\"bold left\">\r\n                                        {{command.qte}}X  {{command.name}}\r\n                                    </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"6\">\r\n                                    <ion-label>\r\n                                      <ion-text class=\"right policeAndColor\"> {{command.price}} F CFA</ion-text>\r\n                                    </ion-label>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                             <ion-grid no-margin no-padding>\r\n                                <ion-item  no-margin no-padding lines=\"none\" class=\"bottoms\">\r\n                                    <ion-label no-margin no-padding ion-text class=\"left policeAndColor2\">\r\n                                        Sous-total:\r\n                                    </ion-label>\r\n                                    <ion-label no-margin no-padding>\r\n                                      <ion-text class=\"right policeAndColor2\"> {{ commandData.panier_ht }} F CFA</ion-text>\r\n                                    </ion-label>\r\n                                </ion-item>\r\n                                <ion-item  no-margin no-padding lines=\"none\">\r\n                                    <ion-label no-margin no-padding ion-text class=\"left policeAndColor2\">\r\n                                        Frais de livraison:\r\n                                    </ion-label>\r\n                                    <ion-label no-margin no-padding>\r\n                                      <ion-text class=\"right policeAndColor2\"> {{ fraisLivraison }} F CFA</ion-text>\r\n                                    </ion-label>\r\n                                </ion-item>\r\n                              </ion-grid>\r\n                        </ion-grid>\r\n                  </ion-item>\r\n              </ion-list>\r\n    </ion-content>\r\n    <ion-footer padding>\r\n        <ion-grid>\r\n            <ion-row size=\"12\">\r\n                <ion-col size=\"6\">\r\n                     <ion-label ion-text class=\"bold left\">\r\n                        Total:\r\n                    </ion-label>                                           \r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <ion-label>\r\n                     <ion-text class=\"right bold\"> {{ commandData.panier_ht + fraisLivraison }} F CFA</ion-text>\r\n                  </ion-label>                                          \r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <ion-button size=\"default\" expand=\"block\" color=\"dark\" (click)=\"commandes()\">\r\n          <ion-text color=\"light\"> Valider la commande </ion-text>\r\n        </ion-button>\r\n      </ion-footer>"

/***/ }),

/***/ "./src/app/pages/validation/validation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/validation/validation.module.ts ***!
  \*******************************************************/
/*! exports provided: ValidationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPageModule", function() { return ValidationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _validation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation.page */ "./src/app/pages/validation/validation.page.ts");








const routes = [
    {
        path: '',
        component: _validation_page__WEBPACK_IMPORTED_MODULE_7__["ValidationPage"]
    }
];
let ValidationPageModule = class ValidationPageModule {
};
ValidationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_validation_page__WEBPACK_IMPORTED_MODULE_7__["ValidationPage"]]
    })
], ValidationPageModule);



/***/ }),

/***/ "./src/app/pages/validation/validation.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/validation/validation.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: #fff;\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n.policeAndColor {\n  color: #747d70;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n.policeAndColor2 {\n  color: #747d70;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n.bottoms {\n  margin-bottom: -25px;\n}\n.policeAndColorAndAlert {\n  color: #198400;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7QURHSTtFQUNJLGdCQUFBO0VBQ0EsaURBQUE7QUNEUjtBRE9BO0VBQ0ksY0FBQTtFQUNBLDZFQUFBO0FDSko7QURNQTtFQUNJLGNBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7QUNISjtBREtBO0VBQ0ksb0JBQUE7QUNGSjtBRElBO0VBQ0ksY0FBQTtFQUNBLGdEQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92YWxpZGF0aW9uL3ZhbGlkYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcblxyXG4ucG9saWNlQW5kQ29sb3Ige1xyXG4gICAgY29sb3I6ICM3NDdkNzA7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucG9saWNlQW5kQ29sb3IyIHtcclxuICAgIGNvbG9yOiAjNzQ3ZDcwO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5ib3R0b21zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xyXG59XHJcbi5wb2xpY2VBbmRDb2xvckFuZEFsZXJ0IHtcclxuICAgIGNvbG9yOiAjMTk4NDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG5cclxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4ucG9saWNlQW5kQ29sb3Ige1xuICBjb2xvcjogIzc0N2Q3MDtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wb2xpY2VBbmRDb2xvcjIge1xuICBjb2xvcjogIzc0N2Q3MDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ib3R0b21zIHtcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG59XG5cbi5wb2xpY2VBbmRDb2xvckFuZEFsZXJ0IHtcbiAgY29sb3I6ICMxOTg0MDA7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/validation/validation.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/validation/validation.page.ts ***!
  \*****************************************************/
/*! exports provided: ValidationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPage", function() { return ValidationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! geolib */ "./node_modules/geolib/es/index.js");
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(geolib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ValidationPage = class ValidationPage {
    constructor(navCtrl, validationService, loadingCtrl, toastCtrl, authService, route, storage) {
        this.navCtrl = navCtrl;
        this.validationService = validationService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.route = route;
        this.storage = storage;
        this.commandData = [];
        this.gps_lat = 0;
        this.gps_long = 0;
        this.commande = [];
        this.getOrders();
    }
    ngOnInit() {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                this.token = this.authService.token;
                this.tel = this.authService.tel;
                console.log(this.tel);
            }
        });
        this.authService.getDistric().then(() => {
            if (this.authService.isLoggedIn) {
                this.userAddress = this.authService.userAddress;
            }
        });
        this.authService.getGpsLat().then(() => {
            if (this.authService.isLoggedIn) {
                this.gps_lat = this.authService.gps_lat;
            }
        });
        this.authService.getGpsLng().then(() => {
            if (this.authService.isLoggedIn) {
                this.gps_long = this.authService.gps_lng;
            }
        });
        this.getFraisLivraison();
        this.getOrders();
        this.getCommandes();
    }
    ionViewWillEnter() {
    }
    getOrders() {
        if (this.route.getCurrentNavigation().extras.state) {
            this.commandData = this.route.getCurrentNavigation().extras.state.orders;
            console.log(this.commandData);
            Object.assign(this.commandData, { "livraison_adresse": this.userAddress });
            Object.assign(this.commandData, { "tel": this.tel });
        }
    }
    getFraisLivraison() {
        this.fraisLivraison = ((geolib__WEBPACK_IMPORTED_MODULE_4__["getDistance"]({ latitude: this.gps_lat, longitude: this.gps_long }, { latitude: this.commandData.r_lat, longitude: this.commandData.r_lng })) * 100) / 1000;
    }
    // avocegamouraph@gmail.com
    getCommandes() {
        for (const cmd of this.commandData.panier_commande) {
            console.log(this.commandData.panier_commande);
            console.log(cmd.produit);
            // for(const c of cmd.produit) {
            //   console.log(cmd.produit)
            //   this.commande.push({
            //     qte:cmd.commande_qte,
            //     name:cmd.commande_tab_nom,
            //     price:c.produit_prix
            //   })
            // }
        }
        console.log(this.commande);
    }
    commandes() {
        this.commandData = JSON.stringify(this.commandData);
        this.validationService.validCommand(this.commandData, this.token)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            const toast = yield this.toastCtrl.create({
                message: 'Vous avez une commande en cours !',
                duration: 1500
            });
            toast.present();
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: "Une erreur s'est produit #403 ",
                duration: 3500
            });
            toast.present();
            console.log(err);
        }));
        this.navCtrl.navigateForward('restaurant-list/');
    }
};
ValidationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_5__["ValidationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
ValidationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validation',
        template: __webpack_require__(/*! raw-loader!./validation.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/validation/validation.page.html"),
        styles: [__webpack_require__(/*! ./validation.page.scss */ "./src/app/pages/validation/validation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers__WEBPACK_IMPORTED_MODULE_5__["ValidationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], ValidationPage);



/***/ })

}]);
//# sourceMappingURL=pages-validation-validation-module-es2015.js.map
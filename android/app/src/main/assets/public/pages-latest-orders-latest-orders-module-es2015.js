(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-latest-orders-latest-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/latest-orders/latest-orders.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/latest-orders/latest-orders.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Vos commandes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-card *ngIf=\"!lastOrders.length\" color=\"primary\" margin-top>\r\n    <ion-card-content>\r\n      <p text-center class=\"text-white\">{{ 'app.pages.latestorders.label.error' | translate }}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div>\r\n    <ion-card class=\"bg-white\" *ngFor=\"let order of lastOrders\">\r\n      <ion-card-header text-center color=\"dark\">\r\n        <h3 class=\"text12 fw300\" no-margin>\r\n          <ion-text color=\"light\">Order number: <span class=\"fw700\">#{{ order.onumber }}</span></ion-text>\r\n        </h3>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n\r\n        <ion-list *ngFor=\"let item of order.order\" no-margin margin-bottom>\r\n          <ion-item no-margin no-padding>\r\n            <ion-thumbnail slot=\"start\">\r\n                <img [src]=\"item.order.picture\"/>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n              <h2 class=\"fw700\">\r\n                <ion-text color=\"dark\">{{item.order.name}}</ion-text>\r\n              </h2>\r\n              <p>\r\n                <ion-text color=\"primary\">Quantity: <span class=\"fw700\">{{item.qtd}}</span></ion-text>\r\n              </p>\r\n            </ion-label>\r\n\r\n            <ion-badge color=\"primary\">{{ item.order.price * item.qtd | currency }}</ion-badge>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-grid no-padding margin-top>\r\n          <ion-row>\r\n            <ion-col no-padding>\r\n              <ion-card color=\"success\" no-margin text-center>\r\n                <ion-card-content no-paddin>\r\n                  <span ion-text class=\"text-white\">Total</span>\r\n                  <h2 ion-text no-margin class=\"fw700 text-white\">{{ order.total | currency }}</h2>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>    \r\n  </div> -->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/latest-orders/latest-orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/latest-orders/latest-orders.module.ts ***!
  \*************************************************************/
/*! exports provided: LatestOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestOrdersPageModule", function() { return LatestOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _latest_orders_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./latest-orders.page */ "./src/app/pages/latest-orders/latest-orders.page.ts");








const routes = [
    {
        path: '',
        component: _latest_orders_page__WEBPACK_IMPORTED_MODULE_7__["LatestOrdersPage"]
    }
];
let LatestOrdersPageModule = class LatestOrdersPageModule {
};
LatestOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_latest_orders_page__WEBPACK_IMPORTED_MODULE_7__["LatestOrdersPage"]]
    })
], LatestOrdersPageModule);



/***/ }),

/***/ "./src/app/pages/latest-orders/latest-orders.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/latest-orders/latest-orders.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvbGF0ZXN0LW9yZGVycy9sYXRlc3Qtb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGF0ZXN0LW9yZGVycy9sYXRlc3Qtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLG9DQUFBO0FDQU47QURJUTtFQUNJLGdCQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXRlc3Qtb3JkZXJzL2xhdGVzdC1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/latest-orders/latest-orders.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/latest-orders/latest-orders.page.ts ***!
  \***********************************************************/
/*! exports provided: LatestOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestOrdersPage", function() { return LatestOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let LatestOrdersPage = class LatestOrdersPage {
    constructor(navCtrl, ordersService) {
        this.navCtrl = navCtrl;
        this.ordersService = ordersService;
        this.lastOrders = [];
        this.getOrders();
    }
    getOrders() {
        this.ordersService.getOrders()
            .then(data => {
            this.lastOrders = data;
        });
    }
};
LatestOrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }
];
LatestOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-latest-orders',
        template: __webpack_require__(/*! raw-loader!./latest-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/latest-orders/latest-orders.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: `translate3d(100px,0,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./latest-orders.page.scss */ "./src/app/pages/latest-orders/latest-orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]])
], LatestOrdersPage);



/***/ })

}]);
//# sourceMappingURL=pages-latest-orders-latest-orders-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-restaurant-detail-restaurant-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/restaurant-detail/restaurant-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/restaurant-detail/restaurant-detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons color=\"light\" slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button size=\"small\" shape=\"round\" (click)=\"message()\">\r\n          <ion-icon ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"bg-light\">\r\n  <ion-grid no-padding no-margin *ngFor=\"let restaurant of restaurants\">\r\n      <ion-card no-margin no-padding class=\"bg-white\">\r\n          <div class=\"card-image\" [style.background-image]=\"'url(' + restaurant.img + ')'\"></div>\r\n          <ion-card-header>\r\n              <ion-badge class=\"float\" vertical=\"top\" horizontal=\"end\" edge>\r\n                  <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n                  <ion-text color=\"light\"> {{ restaurant.isClose ? 'Fermer' : 'Ouvert' }} </ion-text>\r\n              </ion-badge>\r\n              <ion-card-title margin-bottom>           \r\n                  <ion-text color=\"warning-contrast\">{{ restaurant.nom}}</ion-text>\r\n              </ion-card-title>\r\n              <ion-card-subtitle>       \r\n                <ion-text color=\"warning-contrast\">{{restaurant.speciality}}</ion-text>\r\n              </ion-card-subtitle>\r\n              <div margin-bottom>           \r\n                <ion-text color=\"warning-contrast\">{{ restaurant.detail }}</ion-text>\r\n              </div>\r\n          </ion-card-header>\r\n          <ion-card-content no-padding></ion-card-content>\r\n     </ion-card>\r\n  </ion-grid>\r\n\r\n\t<ion-grid no-padding>\r\n      <ion-row no-padding>\r\n        <ion-col>\r\n          <ion-toolbar mode=\"md\">\r\n            <ion-segment mode=\"md\" (ionChange)=\"segmentChanged()\" [(ngModel)]=\"segment\" color=\"primary\">\r\n              <ion-segment-button  *ngFor=\"let menu of menus; let i = index\" class=\"segment-button\" value=\"{{ i }}\">\r\n                  <ion-label>{{ menu.nom }}</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n          </ion-toolbar>\r\n\r\n          <ion-slides class=\"ion-slide\" #slides (ionSlideDidChange)=\"slideChanged()\" >\r\n              <ion-slide *ngFor=\"let menu of menus\">\r\n                  <ion-content color=\"bg-light\">\r\n                      <ion-row>\r\n                          <ion-col>\r\n                              <ion-card class=\"bg-white\" *ngFor=\"let produit of menu.produits\" (click)=\"dishDetail(produit.id,produit.supplements)\">\r\n                                  <ion-card-content no-padding>\r\n                                      <ion-item lines=\"none\">\r\n                                        <ion-label>\r\n                                          <h2 class=\"fw700 text08\">\r\n                                            <ion-text color=\"warning-contrast\">{{produit.nom}}</ion-text>\r\n                                          </h2>\r\n                                          \r\n                                            <ion-text text-wrap color=\"warning-contrast\" style=\"font-size: 14px;\">{{ produit.description }}</ion-text>\r\n                                       \r\n                                        </ion-label>\r\n                                        <ion-badge  color=\"success\">\r\n                                          <ion-text color=\"light\">{{ produit.prix }} F CFA</ion-text>\r\n                                        </ion-badge>\r\n                                      </ion-item>\r\n                                  </ion-card-content>\r\n                                </ion-card>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </ion-content>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button color=\"dark\" (click)=\"openCart()\">\r\n      <ion-icon name=\"cart\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/restaurant-detail/restaurant-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/restaurant-detail/restaurant-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: RestaurantDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailPageModule", function() { return RestaurantDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restaurant_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restaurant-detail.page */ "./src/app/pages/restaurant-detail/restaurant-detail.page.ts");









const routes = [
    {
        path: '',
        component: _restaurant_detail_page__WEBPACK_IMPORTED_MODULE_8__["RestaurantDetailPage"]
    }
];
let RestaurantDetailPageModule = class RestaurantDetailPageModule {
};
RestaurantDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
            })
        ],
        declarations: [_restaurant_detail_page__WEBPACK_IMPORTED_MODULE_8__["RestaurantDetailPage"]]
    })
], RestaurantDetailPageModule);



/***/ }),

/***/ "./src/app/pages/restaurant-detail/restaurant-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/restaurant-detail/restaurant-detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-segment {\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 0;\n  overflow-x: scroll;\n  height: 44px;\n}\n:host ion-segment::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  display: none;\n}\n:host ion-segment ion-segment-button.segment-button {\n  display: inline-block;\n  min-width: 115px;\n  width: auto;\n}\n:host ion-segment segment-button-checked {\n  background: #FFF;\n  color: var(--ion-color-dark);\n  border-bottom: 3px solid var(--ion-color-primary);\n}\nagm-map {\n  height: 180px;\n}\nagm-map .gmnoprint {\n  display: none !important;\n}\n.ion-slide {\n  height: calc(100vh - 140px);\n}\n.card-img-status {\n  width: 120px;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  top: 10px;\n  right: -30px;\n  z-index: 99;\n  text-align: center;\n}\n.card-img-status.closed {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.8);\n}\n.card-img-status.open {\n  background-color: rgba(var(--ion-color-success-rgb), 0.8);\n}\n.card-image {\n  width: 100%;\n  height: 40vw;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvcmVzdGF1cmFudC1kZXRhaWwvcmVzdGF1cmFudC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXN0YXVyYW50LWRldGFpbC9yZXN0YXVyYW50LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSO0FER0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RSO0FER1E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNEWjtBRElRO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUNIWjtBRFVVO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlEQUFBO0FDUlo7QURnQkE7RUFDSSxhQUFBO0FDYko7QURjSTtFQUNFLHdCQUFBO0FDWk47QURrQkE7RUFDSSwyQkFBQTtBQ2ZKO0FEbUJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRGlCSTtFQUNJLHlEQUFBO0FDZlI7QURpQkk7RUFDSSx5REFBQTtBQ2ZSO0FEbUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN0YXVyYW50LWRldGFpbC9yZXN0YXVyYW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgLy8gIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiAgXHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAuZ21ub3ByaW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiAgXHJcblxyXG5cclxuLmlvbi1zbGlkZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1pbWctc3RhdHVzIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAtMzBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJi5jbG9zZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgLjgpO1xyXG4gICAgfVxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIC44KTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24tc2VnbWVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGhlaWdodDogNDRweDtcbn1cbjpob3N0IGlvbi1zZWdtZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTE1cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuOmhvc3QgaW9uLXNlZ21lbnQgc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuYWdtLW1hcCAuZ21ub3ByaW50IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpO1xufVxuXG4uY2FyZC1pbWctc3RhdHVzIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogLTMwcHg7XG4gIHotaW5kZXg6IDk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1pbWctc3RhdHVzLmNsb3NlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC44KTtcbn1cbi5jYXJkLWltZy1zdGF0dXMub3BlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC44KTtcbn1cblxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZ3O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/restaurant-detail/restaurant-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/restaurant-detail/restaurant-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: RestaurantDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailPage", function() { return RestaurantDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_cart_cart_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../modal/cart/cart.page */ "./src/app/pages/modal/cart/cart.page.ts");
/* harmony import */ var _modal_dish_detail_dish_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../modal/dish-detail/dish-detail.page */ "./src/app/pages/modal/dish-detail/dish-detail.page.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _modal_message_message_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/message/message.page */ "./src/app/pages/modal/message/message.page.ts");










let RestaurantDetailPage = class RestaurantDetailPage {
    constructor(asCtrl, navCtrl, toastCtrl, modalCtrl, route, router, translate, cartService, restaurantService, dishService, loadingController) {
        this.asCtrl = asCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.cartService = cartService;
        this.restaurantService = restaurantService;
        this.dishService = dishService;
        this.loadingController = loadingController;
        this.segment = 0;
        this.qtd = 1;
        this.restaurants = [];
        this.restaurant = [];
        this.commandes = [];
        this.restaurantopts = 'menu';
        this.dishes = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getRestaurants();
        this.getRestaurantsById();
    }
    getRestaurantsById() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                spinner: 'crescent',
                duration: 10000
            });
            yield loading.present();
            yield this.restaurantService.getRestaurantsById(this.route.snapshot.paramMap.get('id'))
                .subscribe(res => {
                console.log(res);
                this.menus = res.content;
                this.menus = JSON.parse(JSON.stringify(this.menus));
                console.log(this.menus);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    getRestaurants() {
        this.restaurantService.getRestaurants()
            .subscribe(res => {
            this.restaurants = res.content;
            this.restaurants = this.restaurants.filter((resto) => resto.id === +this.route.snapshot.paramMap.get('id'));
            this.restaurants = JSON.parse(JSON.stringify(this.restaurants));
            console.log(this.restaurants);
        }, err => {
            console.log(err);
        });
    }
    dishDetail(dishId, supplements) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (supplements.length === 0) {
                this.restaurantService.getRestaurantsById(this.route.snapshot.paramMap.get('id'))
                    .subscribe(res => {
                    for (const dish of res.content) {
                        for (const produit of dish.produits) {
                            if (produit.id === +dishId) {
                                this.dish = dish.produits.filter((prod) => prod.id === +dishId);
                                this.dish = JSON.parse(JSON.stringify(this.dish));
                            }
                        }
                    }
                    console.log(this.dish);
                }, err => {
                    console.log(err);
                });
                this.cartService.addtoCart(this.dish, this.qtd, 0, []).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log(this.dish);
                    const toast = yield this.toastCtrl.create({
                        message: 'Plat ajouté au panier !',
                        duration: 1500,
                        position: 'top',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }));
                for (const order of this.dish) {
                    this.commandes.push({
                        commande_qte: this.qtd,
                        commande_tab_nom: order.nom,
                        commande_tab_pos: 0,
                        produit: {
                            produit_ref: "",
                            produit_nom: order.nom,
                            produit_desc: order.description,
                            produit_prix: order.prix,
                            option: [],
                        }
                    });
                }
                this.cartService.addCommandestoCart(this.commandes).then(data => {
                });
                this.commandes = [];
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: _modal_dish_detail_dish_detail_page__WEBPACK_IMPORTED_MODULE_5__["DishDetailPage"],
                    componentProps: { dishId: dishId, supplements: supplements, idMenu: this.route.snapshot.paramMap.get('id') }
                });
                return yield modal.present();
            }
        });
    }
    message() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_message_message_page__WEBPACK_IMPORTED_MODULE_8__["MessagePage"],
                componentProps: { restaurants: this.restaurants }
            });
            return yield modal.present();
        });
    }
    share() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.asCtrl.create({
                header: 'Share Restaurant on:',
                buttons: [{
                        text: 'Facebook',
                        role: 'facebook',
                        icon: 'logo-facebook',
                        handler: () => {
                            console.log('Facebook clicked');
                        }
                    }, {
                        text: 'Twitter',
                        icon: 'logo-twitter',
                        handler: () => {
                            console.log('Twitter clicked');
                        }
                    }, {
                        text: 'Instagram',
                        icon: 'logo-instagram',
                        handler: () => {
                            console.log('Instagram clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    range(n) {
        return new Array(n);
    }
    openCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (const detail of this.restaurants) {
                this.restoData = {
                    id: detail.id,
                    nameresto: detail.nom,
                    ttl: detail.ttl,
                    gps: detail.gps
                };
            }
            const modal = yield this.modalCtrl.create({
                component: _modal_cart_cart_page__WEBPACK_IMPORTED_MODULE_4__["CartPage"],
                componentProps: { restoData: this.restoData }
            });
            return yield modal.present();
        });
    }
    segmentChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
};
RestaurantDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_6__["RestaurantService"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_6__["DishService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], RestaurantDetailPage.prototype, "slider", void 0);
RestaurantDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurant-detail',
        template: __webpack_require__(/*! raw-loader!./restaurant-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/restaurant-detail/restaurant-detail.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./restaurant-detail.page.scss */ "./src/app/pages/restaurant-detail/restaurant-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _providers__WEBPACK_IMPORTED_MODULE_6__["TranslateProvider"],
        _providers__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _providers__WEBPACK_IMPORTED_MODULE_6__["RestaurantService"],
        _providers__WEBPACK_IMPORTED_MODULE_6__["DishService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], RestaurantDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-restaurant-detail-restaurant-detail-module-es2015.js.map
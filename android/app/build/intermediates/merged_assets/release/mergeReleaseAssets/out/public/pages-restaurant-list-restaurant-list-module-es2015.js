(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-restaurant-list-restaurant-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/restaurant-list/restaurant-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/restaurant-list/restaurant-list.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        <ion-text color=\"light\">\r\n          {{ 'app.name' | translate }} <ion-text color=\"secondary\" class=\"fw700\"> {{ 'app.version' | translate }}</ion-text>\r\n        </ion-text>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button size=\"small\" shape=\"round\" (click)=\"openCommandes()\">\r\n        <ion-icon name=\"list\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-searchbar [(ngModel)]=\"searchKey\" (ionInput)=\"onInput($event.target.value)\" ></ion-searchbar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"bg-light\">\r\n\r\n  <div no-margin *ngIf=\"restaurants?.length === 0\">\r\n        Oops ! Error Verifier votre connexion \r\n  </div>\r\n\r\n  <div no-margin *ngIf=\"restaurants?.length > 0\">\r\n\r\n      <ion-label>\r\n          <h2 color=\"secondary-contrast\">\r\n            <ion-text>Tous les restaurants</ion-text>\r\n          </h2>\r\n        </ion-label>\r\n\r\n    <ion-card class=\"bg-white\" *ngFor=\"let restaurant of restaurants\">\r\n      <div class=\"card-image\" [style.background-image]=\"'url(' + restaurant.img + ')'\" tappable *ngIf=\"!restaurant.isClose\" routerLink=\"/restaurant-detail/{{restaurant.id}}\"></div>\r\n      <div class=\"card-image\" [style.background-image]=\"'url(' + restaurant.img + ')'\" tappable *ngIf=\"restaurant.isClose\"></div>\r\n      <ion-card-header>\r\n          <ion-badge class=\"float\" vertical=\"top\" horizontal=\"end\" edge>\r\n              <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n              <ion-text color=\"light\"> {{ restaurant.isClose ? 'Fermer' : 'Ouvert' }} </ion-text>\r\n          </ion-badge>\r\n\r\n          <ion-card-subtitle>       \r\n            <ion-text color=\"warning-contrast\">{{restaurant.adresse}}</ion-text>\r\n          </ion-card-subtitle>\r\n         \r\n          <ion-card-title margin-bottom tappable *ngIf=\"!restaurant.isClose\" routerLink = \"/restaurant-detail/{{restaurant.id}}\">           \r\n            <ion-text color=\"warning-contrast\">{{restaurant.nom}}</ion-text>\r\n          </ion-card-title>\r\n          <ion-card-title margin-bottom tappable *ngIf=\"restaurant.isClose\">           \r\n            <ion-text color=\"warning-contrast\">{{restaurant.nom}}</ion-text>\r\n          </ion-card-title>\r\n          <div margin-bottom tappable *ngIf=\"!restaurant.isClose\" routerLink = \"/restaurant-detail/{{restaurant.id}}\">           \r\n            <ion-text color=\"warning-contrast\">{{restaurant.speciality}}</ion-text>\r\n          </div>\r\n          <div margin-bottom tappable *ngIf=\"restaurant.isClose\">           \r\n            <ion-text color=\"warning-contrast\">{{restaurant.speciality}}</ion-text>\r\n          </div>\r\n      </ion-card-header>\r\n      <ion-card-content no-padding></ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card no-padding margin class=\"background\">\r\n        <ion-card-content>\r\n          <ion-text class=\"bold\" color=\"light\">\r\n            Vous n'avez pas retrouvé votre resto préféré ?\r\n          </ion-text>\r\n          <ion-text class=\"bold\" color=\"dark\" (click)=\"suggest()\">\r\n            Ajoutez-le ici\r\n          </ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/restaurant-list/restaurant-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/restaurant-list/restaurant-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: RestaurantListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListPageModule", function() { return RestaurantListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _restaurant_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurant-list.page */ "./src/app/pages/restaurant-list/restaurant-list.page.ts");








// Pipes


const routes = [
    {
        path: '',
        component: _restaurant_list_page__WEBPACK_IMPORTED_MODULE_9__["RestaurantListPage"]
    }
];
let RestaurantListPageModule = class RestaurantListPageModule {
};
RestaurantListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
            })
        ],
        declarations: [_restaurant_list_page__WEBPACK_IMPORTED_MODULE_9__["RestaurantListPage"]]
    })
], RestaurantListPageModule);



/***/ }),

/***/ "./src/app/pages/restaurant-list/restaurant-list.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/restaurant-list/restaurant-list.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card ion-card-title {\n  font-size: 1.2rem;\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n:host ion-badge.float {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n:host ion-chip.bot {\n  margin: 0;\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  font-size: 0.75rem;\n  padding: 5px 10px;\n  border-radius: 8px 0 8px 0;\n}\n:host ion-footer.footer-ios {\n  padding: 20px;\n}\nagm-map {\n  height: 67.85vh;\n}\nagm-map .gmnoprint {\n  display: none !important;\n}\n.card-img-status {\n  width: 120px;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  top: 10px;\n  right: -30px;\n  z-index: 99;\n  text-align: center;\n}\n.card-img-status.closed {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.8);\n}\n.card-img-status.open {\n  background-color: rgba(var(--ion-color-success-rgb), 0.8);\n}\n.card-image {\n  width: 100%;\n  height: 60vw;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.background {\n  background-color: #003128fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGgvRG9jdW1lbnRzL0JlbmluUmVzdG9vL2Zvb2Rpb25pYzItc2luZ2xlLTIwMTkwODE3L3NyYy9hcHAvcGFnZXMvcmVzdGF1cmFudC1saXN0L3Jlc3RhdXJhbnQtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc3RhdXJhbnQtbGlzdC9yZXN0YXVyYW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxpREFBQTtBQ0RSO0FES1E7RUFDSSxpQkFBQTtBQ0haO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FEUVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDTlo7QURXUTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDVFo7QURjUTtFQUNJLGFBQUE7QUNaWjtBRGlCQTtFQUNJLGVBQUE7QUNkSjtBRGVJO0VBQ0ksd0JBQUE7QUNiUjtBRGlCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGVJO0VBQ0kseURBQUE7QUNiUjtBRGVJO0VBQ0kseURBQUE7QUNiUjtBRGlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDZEo7QURpQkE7RUFDSSwyQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzdGF1cmFudC1saXN0L3Jlc3RhdXJhbnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQgeyBcclxuICAgICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm5vLXJhZGl1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgJi5mbG9hdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNoaXAge1xyXG4gICAgICAgICYuYm90IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDAgOHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1mb290ZXIge1xyXG4gICAgICAgICYuZm9vdGVyLWlvcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogNjcuODV2aDtcclxuICAgIC5nbW5vcHJpbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaW1nLXN0YXR1cyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICYuY2xvc2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIC44KTtcclxuICAgIH1cclxuICAgICYub3BlbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAuOCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzEyOGZhO1xyXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjpob3N0IGlvbi1iYWRnZS5mbG9hdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbjpob3N0IGlvbi1jaGlwLmJvdCB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG4gIHJpZ2h0OiAtMXB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMCA4cHggMDtcbn1cbjpob3N0IGlvbi1mb290ZXIuZm9vdGVyLWlvcyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDY3Ljg1dmg7XG59XG5hZ20tbWFwIC5nbW5vcHJpbnQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWltZy1zdGF0dXMge1xuICB3aWR0aDogMTIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAtMzBweDtcbiAgei1pbmRleDogOTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWltZy1zdGF0dXMuY2xvc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjgpO1xufVxuLmNhcmQtaW1nLXN0YXR1cy5vcGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjgpO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwdnc7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMTI4ZmE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/restaurant-list/restaurant-list.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/restaurant-list/restaurant-list.page.ts ***!
  \***************************************************************/
/*! exports provided: RestaurantListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListPage", function() { return RestaurantListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _modal_suggest_resto_suggest_resto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../modal/suggest-resto/suggest-resto.page */ "./src/app/pages/modal/suggest-resto/suggest-resto.page.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








let RestaurantListPage = class RestaurantListPage {
    constructor(navCtrl, modalCtrl, service, toastCtrl, route, router, menuCtrl, popoverCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restaurants = [];
        this.viewMode = 'list';
        this.label = '';
        this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].agmStyles;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.getRestaurants();
    }
    ionViewDidLoad() {
        this.declareRestaurant();
    }
    getRestaurants() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                spinner: 'crescent',
                duration: 1500
            });
            yield loading.present();
            yield this.service.getRestaurants()
                .subscribe(res => {
                console.log(res);
                this.restaurants = res.content;
                this.restaurants = JSON.parse(JSON.stringify(this.restaurants));
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    declareRestaurant() {
        this.getRestaurants();
    }
    onInput(searchTerm) {
        this.declareRestaurant;
        if (searchTerm.trim() !== '') {
            this.restaurants = this.restaurants.filter((item) => {
                return ((item.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
                    (item.adresse.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
                    (item.speciality.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
            });
        }
        else {
            this.restaurants = this.ionViewDidLoad();
        }
    }
    openRestaurantListPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then(() => {
                this.navCtrl.navigateForward('restaurant-list/');
            });
        });
    }
    openCommandes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('latest-orders');
        });
    }
    suggest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_suggest_resto_suggest_resto_page__WEBPACK_IMPORTED_MODULE_6__["SuggestRestoPage"]
            });
            return yield modal.present();
        });
    }
};
RestaurantListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_5__["RestaurantService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
RestaurantListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurant-list',
        template: __webpack_require__(/*! raw-loader!./restaurant-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/restaurant-list/restaurant-list.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('200ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./restaurant-list.page.scss */ "./src/app/pages/restaurant-list/restaurant-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers__WEBPACK_IMPORTED_MODULE_5__["RestaurantService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], RestaurantListPage);



/***/ })

}]);
//# sourceMappingURL=pages-restaurant-list-restaurant-list-module-es2015.js.map
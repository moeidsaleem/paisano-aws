webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http, afs, fbAuth, storage) {
        this.http = http;
        this.afs = afs;
        this.fbAuth = fbAuth;
        this.storage = storage;
        this.serverUrl = 'https://ec2-13-229-128-0.ap-southeast-1.compute.amazonaws.com:8080/';
        console.log(localStorage.getItem('uid'));
        this.adminId = localStorage.getItem('uid');
    }
    /* """"""""""""""""""""""""""""""""""""""""""""   AUTHENTICATION   """""""""""""""""""""""""""""""""""""""""""""""""""*/
    //~ LOGIN 
    ApiService.prototype.loginAdmin = function (email, pass) {
        return this.fbAuth.auth.signInWithEmailAndPassword(email, pass);
    };
    //~ SIGNUP
    ApiService.prototype.signupAdmin = function (email, pass) {
        return this.fbAuth.auth.createUserWithEmailAndPassword(email, pass);
    };
    ApiService.prototype.signupDoctor = function (email, pass) {
        return this.fbAuth.auth.createUserWithEmailAndPassword(email, pass);
    };
    ApiService.prototype.signupGuardian = function (email, pass) {
        return this.fbAuth.auth.createUserWithEmailAndPassword(email, pass);
    };
    ApiService.prototype.signupWorker = function (email, pass) {
        return this.fbAuth.auth.createUserWithEmailAndPassword(email, pass);
    };
    // FETCH Functiosn
    ApiService.prototype.getAdminProfile = function (adminId) {
        return this.afs.doc('admin/' + adminId).valueChanges();
    };
    ApiService.prototype.updateAdminProfile = function (adminId, data) {
        return this.afs.doc('admin/' + adminId).update(data);
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: VACCINES  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    //~ CREATE 
    ApiService.prototype.addVaccine = function (data) {
        return this.afs.collection('vaccines').add(data);
    };
    //~ READ 
    ApiService.prototype.getVaccines = function () {
        return this.afs.collection('vaccines').snapshotChanges();
    };
    //~ UPDATE 
    ApiService.prototype.updateVaccine = function (id, data) {
        return this.afs.doc('vaccines/' + id).update(data);
    };
    //~ DELETE 
    ApiService.prototype.deleteVaccine = function (id) {
        return this.afs.doc('vaccines/' + id).delete();
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: DOCTORS  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    //~ CREATE 
    ApiService.prototype.addCategory = function (data) {
        return this.afs.collection('category').add(data);
    };
    ApiService.prototype.addDoctor = function (data) {
        var _this = this;
        return this.signupDoctor(data.email, data.password).then(function (resp) {
            data.uid = resp.uid;
            return _this.afs.doc('doctors/' + data.uid).set(data);
        });
    };
    //~ READ 
    ApiService.prototype.getCategories = function () {
        return this.afs.collection('category').snapshotChanges();
    };
    //~ READ Single 
    ApiService.prototype.getCategory = function (id) {
        return this.afs.doc('category/' + id).snapshotChanges();
    };
    //~ UPDATE 
    ApiService.prototype.updateCategory = function (id, data) {
        return this.afs.doc('category/' + id).update(data);
    };
    //~ DELETE 
    ApiService.prototype.deleteCategory = function (id) {
        return this.afs.doc('category/' + id).delete();
    };
    // /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GUARDIAN  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    //~ CREATE 
    ApiService.prototype.addGuardian = function (data) {
        var _this = this;
        return this.signupGuardian(data.email, data.password).then(function (resp) {
            console.log(" ID is " + resp.uid);
            data.uid = resp.uid;
            return _this.afs.doc('guardians/' + resp.uid).set(data);
        });
    };
    //~ READ 
    ApiService.prototype.getOrders = function () {
        return this.afs.collection('orders').snapshotChanges();
    };
    ApiService.prototype.getOrder = function (id) {
        return this.afs.doc('orders/' + id).valueChanges();
    };
    ApiService.prototype.getGuardians = function () {
        return this.afs.collection('guardians').snapshotChanges();
    };
    //~ UPDATE 
    ApiService.prototype.updateOrder = function (id, data) {
        return this.afs.doc('orders/' + id).update(data);
    };
    ApiService.prototype.updateGuardian = function (id, data) {
        return this.afs.doc('guardians/' + id).update(data);
    };
    //~ DELETE 
    ApiService.prototype.deleteOrder = function (id) {
        return this.afs.doc('orders/' + id).delete();
    };
    ApiService.prototype.deleteGuardian = function (id) {
        return this.afs.doc('guardians/' + id).delete();
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: FOOD ITEMS  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    //~ CREATE 
    ApiService.prototype.addItem = function (data) {
        return this.afs.collection('foodItems').add(data);
    };
    ApiService.prototype.addWorker = function (data) {
        var _this = this;
        return this.signupGuardian(data.email, data.password).then(function (resp) {
            data.uid = resp.uid;
            return _this.afs.doc('workers/' + data.uid).set(data);
        });
    };
    //~ READ 
    ApiService.prototype.getItems = function () {
        return this.afs.collection('foodItems').snapshotChanges();
    };
    ApiService.prototype.getItem = function (id) {
        return this.afs.doc('foodItems/' + id).valueChanges();
    };
    ApiService.prototype.getWorkers = function () {
        return this.afs.collection('workers').snapshotChanges();
    };
    //~ UPDATE 
    ApiService.prototype.updateItem = function (id, data) {
        return this.afs.doc('foodItems/' + id).update(data);
    };
    ApiService.prototype.updateWorker = function (id, data) {
        return this.afs.doc('workers/' + id).update(data);
    };
    //~ DELETE 
    ApiService.prototype.deleteItem = function (id) {
        return this.afs.doc('foodItems/' + id).delete();
    };
    ApiService.prototype.deleteWorker = function (id) {
        return this.afs.doc('workers/' + id).delete();
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: WORKERS  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    //~CREATE 
    ApiService.prototype.addChildren = function (data) {
        return this.afs.collection('children').add(data);
    };
    //~READ 
    ApiService.prototype.getAllChildren = function () {
        return this.afs.collection('children').snapshotChanges();
    };
    ApiService.prototype.getChildren = function (parentId) {
        return this.afs.collection('children', function (ref) { return ref.where('guardianId', '==', parentId); }).snapshotChanges();
    };
    //~UPDATE
    ApiService.prototype.updateChildren = function (id, data) {
        return this.afs.doc('children/' + id).update(data);
    };
    ApiService.prototype.deleteChildren = function (id) {
        return this.afs.doc('children/' + id).delete();
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: WORKERS  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    ApiService.prototype.getCampaigns = function () {
        return this.afs.collection('campaign').snapshotChanges();
    };
    ApiService.prototype.addCampaign = function (data) {
        return this.afs.collection('campaign').add(data);
    };
    ApiService.prototype.deleteCampaign = function (id) {
        return this.afs.doc('campaign/' + id).delete();
    };
    ApiService.prototype.updateCampaign = function (id, data) {
        return this.afs.doc('campaign/' + id).update(data);
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: NOTFICATIONS  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    //send Notification
    ApiService.prototype.sendNotification = function (title, message) {
        var data = {
            title: title,
            body: message
        };
        return this.http.post(this.serverUrl + 'message', data)
            .map(function (response) { return response.json(); })
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    // ~ CREATE
    ApiService.prototype.generateNotification = function (not) {
        return this.afs.collection('notifications').add(not);
    };
    // ~ READ
    ApiService.prototype.getAllNotifications = function () {
        return this.afs.collection('notifications').snapshotChanges();
    };
    ApiService.prototype.getNotificationsById = function (id) {
        return this.afs.collection('notifications', function (ref) { return ref.where('userId', '==', id); }).snapshotChanges();
    };
    ApiService.prototype.getNotificationsByType = function (type) {
        return this.afs.collection('notifications', function (ref) { return ref.where('type', '==', type); }).snapshotChanges();
    };
    // ~ DELETE
    ApiService.prototype.deleteNotification = function (notificationId) {
        return this.afs.doc('notifications/' + notificationId).delete();
    };
    ApiService.prototype.updateNotification = function (notificationId, data) {
        return this.afs.doc('notifications/' + notificationId).update(data);
    };
    // QUERIES 
    ApiService.prototype.saveQuery = function (data) {
        return this.afs.collection('queries').add(data);
    };
    ApiService.prototype.getQueries = function () {
        return this.afs.collection('queries').snapshotChanges();
    };
    //FAQs 
    ApiService.prototype.getFAQS = function () {
        return this.afs.collection('faqs').snapshotChanges();
    };
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: STATISTICS  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    ApiService.prototype.getChildrenStat = function (type) {
        return this.afs.collection('children', function (ref) { return ref.where('status', '==', type); }).valueChanges();
    };
    ApiService.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    ApiService.prototype.sendEmail = function (data) {
        return this.http.post(this.serverUrl + 'email', data).map(function (response) { return response.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n<router-outlet></router-outlet>\n\n\n\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__items_items_component__ = __webpack_require__("../../../../../src/app/items/items.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//FIREBASE
















//extenals







var ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_15__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_24__categories_categories_component__["a" /* CategoriesComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_25__orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'items', component: __WEBPACK_IMPORTED_MODULE_26__items_items_component__["a" /* ItemsComponent */] },
            { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_23__notifications_notifications_component__["a" /* NotificationsComponent */] },
        ] },
];
var firebaseConfig = {
    apiKey: "AIzaSyCCK8IKYcE42mFTsiVCmig8T2wxTeJfD84",
    authDomain: "paisano-pizza.firebaseapp.com",
    databaseURL: "https://paisano-pizza.firebaseio.com",
    projectId: "paisano-pizza",
    storageBucket: "paisano-pizza.appspot.com",
    messagingSenderId: "1028859967240"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__notifications_notifications_component__["a" /* NotificationsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "\n                  <input type=\"file\" id=\"myInput\">\n\n\n\n<div class=\"main-panel\">\n    <app-header></app-header>\n    <div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header card-header-primary\">\n                    <h4 class=\"card-title \">Categories                \n                        <div class=\"pull-right btn btn-warning\" data-toggle=\"modal\" role=\"dialog\" data-target=\"#exampleModal\" data-backdrop=\"static\" date-keyboard=\"false\" data-focus=\"true\" #tref><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> ADD</div>\n                    </h4>\n                    <p class=\"card-category\"> Here is a subtitle for this table</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-btn\">\n                          <a class=\"btn btn-secondary\" type=\"button\" aria-label=\"\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\n                        </span>\n                        <input type=\"search\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Search...\" aria-label=\"\" [(ngModel)]=\"term\">\n                      </div>\n\n                      \n                        <table class=\"table\">\n                            <thead class=\" text-primary\">\n                                <th>\n                                   Category ID\n                                </th>\n                                <th (click)=\"orderBy('name')\">\n                                    Name\n                                    <i *ngIf=\"order == 'name'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                </th>\n                                <th (click)=\"orderBy('mfg')\">\n                                    Photo\n                                    <i *ngIf=\"order == 'mfg'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n\n                                </th>\n                                <th (click)=\"orderBy('exp')\">\n                                   Sub heading\n                                    <i *ngIf=\"order == 'exp'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n\n                                </th>\n                                 <th>\n                                    Actions\n                                </th>\n\n                            </thead>\n                            <tbody *ngIf=\"categories\">\n                                <tr *ngFor=\"let x of categories | filter:term | orderBy: order\" >\n                                    <td>\n                                      {{x?.id}}\n                                    </td>\n                                    <td>\n                                      {{x?.name}}\n                                    </td>\n                                    <td>\n                                        <img (click)=\"selectx(x)\" class=\"img-thumbnail\" [src]=\"x.photo || 'https://cakesbyaantafel.com/wp-content/plugins/osetin-helper/assets/img/placeholder-category.png'\" alt=\"\" width=\"200px\" height=\"200px\">\n                                    </td>\n                                    <td>\n                                        {{x?.sub}}\n                                    </td>\n                                     <td>\n\n\n                                        <span class=\"btn btn-sm btn-danger\" (click)=\"selectedCategory = x\" data-toggle=\"modal\" data-target=\"#deleteModal\" > <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                        <span class=\"btn btn-sm btn-success\" (click)=\"selectedCategory = x\" data-toggle=\"modal\" data-target=\"#editModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                      </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  </div>\n\n\n\n<!-- Modal DELETE -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"deleteModal\">Confirm Delete</h4>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"selectedCategory\">\n       Are you sure you want to delete <span class=\"text-danger\"> {{selectedCategory?.name}}</span> Category?       \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selectedCategory)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n  \n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Category</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <form #CategoryForm=\"ngForm\" (submit)=\"submit(CategoryForm.value)\">\n                <div class=\"row\">\n          <div class=\"col-md-12 form-group\">\n            <label for=\"\"></label>\n            <input type=\"text\"\n              class=\"form-control\" name=\"name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Category Name\" ngModel>\n          </div>\n          <div class=\"col-md-12 form-group\">\n              <label for=\"\"></label>\n              <input type=\"text\"\n                class=\"form-control\" name=\"sub\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Sub Heading\" ngModel>\n            </div>\n\n            <div class=\"col-md-12 form-group\">\n                <label for=\"\"></label>\n                <input type=\"file\" style=\"display: none\" id=\"photo\" (change)=\"handle('photo')\">\n                <small class=\"btn btn-success\" (click)=\"hello('photo')\" >PHOTO</small>\n                <img [src]=\"\" alt=\"\" width=\"120px\" >\n                <label for=\"\" *ngIf=\"imgFile\">{{imgFile?.name}}</label>\n     </div>\n  \n           \n                </div>\n        </form>\n        \n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit(CategoryForm.value)\" >Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n    <!-- Modal EDIT -->\n    <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"editModal\">Edit Category</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\" *ngIf=\"selectedCategory\">\n              <div class=\"container\">\n                <form #CategoryUpdateForm=\"ngForm\" (submit)=\"update(selectedCategory)\">\n                    <div class=\"row\">\n              <div class=\"col-md-12 form-group\">\n                <label for=\"\"></label>\n                <input type=\"text\"\n                  class=\"form-control\" name=\"name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Vaccination Name\" [(ngModel)]=\"selectedCategory.name\">\n              </div>\n              <div class=\"col-md-12 form-group\">\n                  <label for=\"\"></label>\n                  <input type=\"text\"\n                    class=\"form-control\" name=\"sub\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Sub heading\"  [(ngModel)]=\"selectedCategory.sub\">\n                </div>\n                <div class=\"col-md-12 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"file\" style=\"display: none\" id=\"photo1\" (change)=\"handle('photo1')\">\n                    <small class=\"btn btn-success\" (click)=\"hello1('photo1') \" >PHOTO</small>\n                 </div>\n             \n            \n                    </div>\n            </form>\n            \n            </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"update(selectedCategory)\" >Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(api) {
        this.api = api;
        this.xxx = '';
        this.order = 'name';
        this.photoEdit = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCategories().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (resp) {
            _this.categories = resp;
        });
    };
    CategoriesComponent.prototype.hello = function (elem) {
        $('#' + elem).trigger('click');
    };
    CategoriesComponent.prototype.handle = function (elem) {
        this.imgFile = document.getElementById(elem).files[0];
    };
    CategoriesComponent.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.uploadLink = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('files/' + Math.random().toFixed() + '_' + this.imgFile.name);
                return [2 /*return*/, this.uploadLink.put(this.imgFile).then(function (url) {
                        //console.log(url);
                        return url;
                    })];
            });
        });
    };
    CategoriesComponent.prototype.submit = function (val) {
        var _this = this;
        //first i will upload the file then do the rest? 
        this.upload().then(function (r) {
            _this.uploadLink.getDownloadURL().then(function (link) {
                console.log(link);
                val.photo = link;
                //--------casual work------
                $('#exampleModal').modal('hide');
                console.log(val);
                _this.api.addCategory(val).then(function (res) {
                }, function (err) {
                    console.log(err);
                    //------ ||||||||| ------
                });
            });
        });
    };
    CategoriesComponent.prototype.hello1 = function (elem) {
        $('#' + elem).trigger('click');
        this.photoEdit = true;
    };
    CategoriesComponent.prototype.update = function (data) {
        var _this = this;
        //first i will upload the file then do the rest? 
        if (this.photoEdit == true) {
            this.upload().then(function (r) {
                _this.uploadLink.getDownloadURL().then(function (link) {
                    console.log(link);
                    data.photo = link;
                    //--------casual work------
                    $('#editModal').modal('hide');
                    _this.api.updateCategory(data.id, data).then(function (res) {
                        _this.selectedCategory = {};
                        _this.photoEdit = false;
                    });
                });
            });
        }
        else {
            //--------casual work------
            $('#editModal').modal('hide');
            this.api.updateCategory(data.id, data).then(function (res) {
                _this.selectedCategory = {};
            });
        }
    };
    CategoriesComponent.prototype.delete = function (category) {
        $('#deleteModal').modal('hide');
        this.selectedCategory = {};
        //now removing the vaccine
        this.api.deleteCategory(category.id).then(function (res) {
        }, function (err) { });
    };
    /*
    
    */
    CategoriesComponent.prototype.orderBy = function (value) {
        this.order = value;
    };
    CategoriesComponent.prototype.selectx = function (data, funx) {
        var _this = this;
        var photoUrl = '';
        $('#myInput').trigger('click', function (a) {
        });
        $('input[type="file"]').change(function (e) {
            // e.preventDefault();
            var file = e.target.files[0];
            var fileName = file.name;
            console.log(fileName);
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('items/' + data.id);
            var task = storageRef.put(file);
            task.then(function (r) {
                storageRef.getDownloadURL().then(function (url) {
                    // data.photo = url;
                    console.log(url);
                    photoUrl = url;
                    //data.photo = url;
                    // funx.updateItem(data.id, data);
                });
            });
        });
        setTimeout(function () {
            console.log("chala hun");
            data.photo = photoUrl;
            console.log(photoUrl);
            _this.api.updateItem(data.id, data).then(function (r) {
                console.log("updated");
            });
        }, 10000);
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n\n\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n  <div class=\"container-fluid\">\n   \n      <!-- <div class=\"copyright pull-right\">\n          &copy;\n          <script>\n              document.write(new Date().getFullYear())\n          </script>, made with love by\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n      </div> -->\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Navbar -->\n <nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"#pablo\">Atrix Dashboard</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          \n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/home\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\" *ngIf=\"notifications\">{{notifications.length | number }}</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" *ngIf=\"notifications\">\n                        <a class=\"dropdown-item\" *ngFor=\"let x of notifications\" routerLink=\"/dashboard/notifications\">{{x?.message}}</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/profile\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(api) {
        this.api = api;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notification = {
            message: '',
            priority: '',
            date: '',
        };
        this.api.getAllNotifications().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (data) { _this.notifications = data; console.log(_this.notifications); });
    };
    HeaderComponent.prototype.setStatus = function (status, notif) {
        notif.status = status;
        this.api.updateNotification(notif.id, notif).then(function (r) {
            console.log('status Updated');
        });
    };
    HeaderComponent.prototype.onChange = function (e) {
        var obj = JSON.parse(e);
        this.selectedUser = { userName: obj.name, userId: obj.id, userType: obj.type };
        console.log(this.selectedUser);
    };
    HeaderComponent.prototype.send = function () {
        console.log('generating notification');
        console.log(this.notification);
        if (this.selectedUser && this.notification.type == 'specific') {
            this.notification.userName = this.selectedUser.userName;
            this.notification.userId = this.selectedUser.userId;
            this.notification.userType = this.selectedUser.userType;
        }
        this.notification.status = 'sent'; /* or it can be 'read' */
        $('#exampleModal').modal('hide');
        this.api.generateNotification(this.notification).then(function (resp) {
            console.log('notification Generated');
        });
    };
    HeaderComponent.prototype.deleteNotification = function (notificationId) {
        var _this = this;
        $('#deleteModal').modal('hide');
        //now removing the vaccine
        this.api.deleteNotification(notificationId).then(function (res) {
            _this.selectedNotification = {};
            console.log("notification deleted.");
        }, function (err) { });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Navbar -->\n  <div class=\"main-panel\">\n<app-header></app-header>\n  <!-- End Navbar -->\n  <div class=\"content\">\n      <div class=\"container-fluid\">\n          <div class=\"row\">\n              <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                      <div class=\"card-header card-header-warning card-header-icon\">\n                          <div class=\"card-icon\">\n                              <i class=\"material-icons\">local_pharmacy</i>\n                          </div>\n                          <p class=\"card-category\">Categories</p>\n                          <h3 class=\"card-title\" *ngIf=\"categories\">{{categories}}\n                              <small>Categories</small>\n                          </h3>\n                      </div>\n                      <div class=\"card-footer\">\n                          <div class=\"stats\">\n                              <i class=\"material-icons text-danger\">warning</i>\n                              <a routerLink=\"/dashboard/category\">Add More categories...</a>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                      <div class=\"card-header card-header-success card-header-icon\">\n                          <div class=\"card-icon\">\n                              <i class=\"material-icons\">local_hospital</i>\n                              <!-- <i class=\"fa fa-user-md\"></i> -->\n\n                          </div>\n                          <p class=\"card-category\">Food Items</p>\n                          <h3 class=\"card-title\" *ngIf=\"items\">{{items}}</h3>\n                      </div>\n                      <div class=\"card-footer\">\n                          <div class=\"stats\">\n                              <i class=\"material-icons\">date_range</i> Last 24 Hours\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                      <div class=\"card-header card-header-danger card-header-icon\">\n                          <div class=\"card-icon\">\n                              <i class=\"material-icons\">wc</i>\n                          </div>\n                          <p class=\"card-category\">Orders</p>\n                          <h3 class=\"card-title\" *ngIf=\"orders\">{{orders}}</h3>\n                      </div>\n                      <div class=\"card-footer\">\n                          <div class=\"stats\">\n                              <i class=\"material-icons\">local_offer</i> Tracked from Database\n                          </div>\n                      </div>\n                  </div>\n              </div>\n         \n          </div>\n      </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        this.api = api;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getItems().subscribe(function (resp) {
            _this.items = resp.length;
        });
        this.api.getOrders().subscribe(function (respx) {
            _this.orders = respx.length;
        });
        this.api.getCategories().subscribe(function (respxx) {
            _this.categories = respxx.length;
        });
        this.api.getWorkers().subscribe(function (workersx) {
            _this.workers = workersx.length;
        });
        this.api.getGuardians().subscribe(function (guard) {
            _this.guardians = guard.length;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/items/items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#file-input {\r\n    cursor: pointer;\r\n    outline: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 0;\r\n    overflow: hidden;\r\n    filter: alpha(opacity=0); /* IE < 9 */\r\n    opacity: 0;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-panel\">\n        <app-header></app-header>\n        <div class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">FoodItems    \n                            <div class=\"pull-right btn btn-warning\" data-toggle=\"modal\" role=\"dialog\" data-target=\"#exampleModal\" data-backdrop=\"static\" date-keyboard=\"false\" data-focus=\"true\" #tref><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> ADD</div>\n                        </h4>\n                        <p class=\"card-category\"> Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-btn\">\n                              <a class=\"btn btn-secondary\" type=\"button\" aria-label=\"\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\n                            </span>\n                            <input type=\"search\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Search...\" aria-label=\"\" [(ngModel)]=\"term\">\n                          </div>\n    \n                          \n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    \n                                    <th>\n                                      Photo\n                                  </th>\n                                    <th (click)=\"orderBy('title')\">\n                                        Title\n                                        <i *ngIf=\"order == 'title'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                        <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                    </th>\n                                    <th (click)=\"orderBy('price')\">\n                                      Price\n                                      <i *ngIf=\"order == 'price'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                      <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                  </th>\n                                    <th (click)=\"orderBy('joinDate')\">\n                                        Created Date\n                                        <i *ngIf=\"order == 'joinDate'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n    \n                                    </th>\n                                    <th (click)=\"orderBy('description')\">\n                                        description\n                                        <i *ngIf=\"order == 'description'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n    \n                                    </th>\n                                    <th (click)=\"orderBy('category')\">\n                                        Category\n                                        <i *ngIf=\"order == 'category'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    </th>\n                                    <th>Side orders</th>\n                                    <th>Variants</th>\n                                    <th (click)=\"orderBy('status')\">\n                                        status\n                                        <i *ngIf=\"order == 'status'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    </th>\n                                     <th>\n                                        Actions\n                                    </th>\n    \n                                </thead>\n                                <tbody *ngIf=\"workers\">\n                                    <tr *ngFor=\"let x of workers | filter:term | orderBy: order\" >\n                                      \n                                        <td>\n                                         <img [src]=\"x.photo || './assets/default-food.png'\" (click)=\"selectx(x, api)\" alt=\"\" width=\"80px\" height=\"80px\">\n                                        </td>\n                                        <td>\n                                          {{x?.title}}\n                                        </td>\n                                        <td>\n                                            {{x?.price}}\n                                        </td>\n                                        <td>\n                                       <small> {{x?.joinDate}}</small>  \n                                        </td>\n                                        <td>\n                                         <p class=\"small\"> {{x?.description}}</p>\n                                      </td>\n                                         <td>\n                                          <strong> {{x?.category}}  \n                                                <span class=\"badge badge-sm badge-success\" (click)=\"selectedItem = x\" data-toggle=\"modal\"\n                                                 data-target=\"#updateDoctorModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                        </strong> \n                                        </td>\n                                        <td>\n                                        <strong>\n                                          <span *ngFor=\"let a of x.sideorders\"> {{a?.name +','}}  </span>\n                                            <span class=\"badge badge-sm badge-success\" (click)=\"selectedItem = x\" data-toggle=\"modal\"\n                                             data-target=\"#sideorderModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                    </strong> \n                                        </td>\n                                        <td>\n                                            <strong>\n                                              <span *ngFor=\"let a of x.variants\"> <b>{{a?.name +':'}} \n                                                <small *ngFor=\"let b of a.options\">{{b?.name +'('+(b?.price | currency) +')'+','}}</small>\n                                              </b> </span>\n                                                <span class=\"badge badge-sm badge-success\" (click)=\"selectedItem = x\" data-toggle=\"modal\"\n                                                 data-target=\"#variantsModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                        </strong> \n                                            </td>\n                                       \n\n                                         <td>\n                                             <span *ngIf=\"x.status == 'active'\" class=\"badge badge-primary\">{{x?.status}}</span> \n                                             <span *ngIf=\"x.status == 'away'\" class=\"badge badge-warning\">{{x?.status}}</span> \n                                             <span *ngIf=\"x.status == 'dismiss'\" class=\"badge badge-danger\"> {{x?.status}}</span>\n                                            </td>\n                                        \n                                         <td>\n                                            <span class=\"btn btn-sm btn-danger\" (click)=\"selectedItem = x\" data-toggle=\"modal\" data-target=\"#deleteModal\" > <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                            <span class=\"btn btn-sm btn-success\" (click)=\"selectedItem = x\" data-toggle=\"modal\" data-target=\"#editModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                          </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      </div>\n    \n    \n    \n\n\n\n       <!-- Modal Manage sideorders -->\n       <div class=\"modal fade\" id=\"sideorderModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sideorderModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=\"selectedItem\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <h4 class=\"modal-title\" id=\"sideorderModal\">Manage {{selectedItem?.name}} 's SideOrders </h4>\n            </div>\n            <div class=\"modal-body\" >\n                <div class=\"container\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-md-12 text-center\">\n                        <h3 class=\"text-center\" *ngIf=\"sideorderAddToggle==true\">\n                            <span class=\"badge badge-success\" (click)=\"sideorderAddToggle = !sideorderAddToggle\"><i class=\"fa fa-plus\">ADD</i></span>\n                    </h3>\n                    <form #sideorderForm=\"ngForm\" (submit)=\"addSideorder(sideorderForm.value, $event)\"  *ngIf=\"sideorderAddToggle==false\">  \n                        <div class=\"col-md-12 form-group\">\n                          <label for=\"\">Item Name</label>\n                          <input type=\"text\"\n                            class=\"form-control\" name=\"name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" ngModel>\n                        </div>\n                        <div class=\"row\">\n                        <div class=\"col-md-6 form-group\">\n                                <label for=\"\">Price</label>\n                                <input type=\"number\"\n                                  class=\"form-control\" name=\"price\" placeholder=\"Price\" ngModel>\n                                  </div>\n\n                                  <!-- sideorder photo fixin -->\n                                  <div class=\"col-md-6 form-group\">\n                                    <label for=\"\"></label>\n                                    <input type=\"file\" style=\"display: none\" id=\"photox\" (change)=\"handle('photox')\">\n                                    <small class=\"btn btn-success\" (click)=\"hello('photox')\" >PHOTO</small>\n                                    <img [src]=\"\" alt=\"\" width=\"120px\" >\n                                    <label for=\"\" *ngIf=\"imgFile\">{{imgFile?.name}}</label>\n                         </div>\n                            \n                                  <div class=\"col-md-12 form-group\">\n                                    <label for=\"\">Description</label>\n                                    <input type=\"text\"\n                                      class=\"form-control\" name=\"description\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" ngModel>\n                                  </div>\n                          </div>\n                                      <button class=\"btn btn-danger\" (click)=\"sideorderAddToggle= !sideorderAddToggle\"><i class=\"fa fa-remove\"></i></button>\n                                      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </form>\n                </div>\n\n                <div class=\"col-md-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr  class=\"text-center\">\n                                <th>Side Orders</th>\n                               \n                            </tr>\n                            <tr style=\"font:bold;\">\n                                    <th >Name</th>\n                                    <th >price</th>\n                                    <th >photo.</th>\n                                    <th >description</th>\n                                    <th> Actions</th>\n                                </tr>\n                        </thead>\n                        <tbody *ngIf=\"selectedItem\">\n                            <tr class=\"small\" *ngFor=\"let s of selectedItem.sideorders;index as i\">\n                                <td scope=\"row\"><b>{{s?.name}}</b></td>\n                                <td>{{s?.price | currency}}</td>\n                                <td><img [src]=\"s.photo || './assets/default-food.png'\" width=\"70px\" height=\"70px\" alt=\"\"></td>\n                                <td>{{s?.description}}</td>\n                                    <td>\n                                        <span class=\"btn btn-sm btn-danger\" (click)=\"deleteSideorder(i)\"> <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                        <!-- <span class=\"btn btn-sm btn-success\" (click)=\"selectedChild = s\" data-toggle=\"modal\" data-target=\"#updateChildModal\" >\n                                           <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span>  -->\n                                      </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                        \n\n                    </div>\n                </div>\n\n             \n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selectedItem)\">Delete</button> -->\n            </div>\n          </div>\n        </div>\n      </div>\n\n      \n       <!-- Modal Manage variants -->\n       <div class=\"modal fade\" id=\"variantsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"variantsModal\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\" *ngIf=\"selectedItem\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"variantsModal\">Manage {{selectedItem?.name || selectedItem?.title}} 's Variants </h4>\n              </div>\n              <div class=\"modal-body\" >\n                  <div class=\"container\">\n                      <div class=\"row text-center\">\n                          <div class=\"col-md-12 text-center\">\n                          <h3 class=\"text-center\" *ngIf=\"variantsAddToggle==true\">\n                              <span class=\"badge badge-success\" (click)=\"variantsAddToggle = !variantsAddToggle\"><i class=\"fa fa-plus\">ADD</i></span>\n                      </h3>\n                      <section *ngIf=\"variantsAddToggle==false\">  \n                          <div class=\"col-md-12 form-group\">\n                            <label for=\"\">Item Name</label>\n                            <input type=\"text\"\n                              class=\"form-control\" name=\"name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" [(ngModel)]=\"variant.name\">\n                          </div>\n                          \n                          <div class=\"row\">\n                          <div class=\"col-md-6 form-group\">\n                                  <label for=\"\">Options</label>\n                                  <input type=\"text\"\n                                    class=\"form-control\"  placeholder=\"Name\" [(ngModel)]=\"opt.name\">\n                                    <input type=\"number\"\n                                    class=\"form-control\"  placeholder=\"Price\" [(ngModel)]=\"opt.price\">\n                                    <button class=\"btn btn-success\" (click)=\"addOption()\">\n                                      <i class=\"fa fa-plus-square-o\" aria-hidden=\"true\" ></i>\n                                    </button>\n                                    </div>\n                            <div class=\"col-md-6\">\n                              <span class=\"badge badge-pill badge-primary\" *ngFor=\"let y of variant.options\" (click)=\"removeOption(y)\">{{y?.name + '('+(y?.price | currency ) +')'}}</span>\n                            </div>\n\n                               \n                            </div>\n                                        <button class=\"btn btn-danger\" (click)=\"variantsAddToggle= !variantsAddToggle\"><i class=\"fa fa-remove\"></i></button>\n                                        <button type=\"button\"  (click)=\"addVariant()\" class=\"btn btn-primary\">Submit</button>\n                          </section>\n                  </div>\n  \n                  <div class=\"col-md-12\">\n                      <table class=\"table\">\n                          <thead>\n                              <tr  class=\"text-center\">\n                                  <th>Side Orders</th>\n                                 \n                              </tr>\n                              <tr style=\"font:bold;\">\n                                      <th >Name</th>\n                                      <th >options</th>\n                                      <th> Actions</th>\n                                  </tr>\n                          </thead>\n                          <tbody *ngIf=\"selectedItem\">\n                              <tr class=\"small\" *ngFor=\"let s of selectedItem.variants;index as i\">\n                                  <td scope=\"row\"><b>{{s?.name}}</b></td>\n                                  <td>\n                                    <span class=\"badge badge-pill badge-secondary\" *ngFor=\"let v of s.options\">{{v?.name + '('+(v?.price | currency )+')'}}</span>\n\n                                  </td>\n                                \n                                      <td>\n                                          <span class=\"btn btn-sm btn-danger\"  (click)=\"deleteVariant(i)\"> <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                          <!-- <span class=\"btn btn-sm btn-success\" (click)=\"selectedChild = s\" data-toggle=\"modal\" data-target=\"#updateChildModal\" >\n                                             <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span>  -->\n                                        </td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n                          \n  \n                      </div>\n                  </div>\n  \n               \n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selectedItem)\">Delete</button> -->\n              </div>\n            </div>\n          </div>\n        </div>\n\n    <!-- Modal DELETE -->\n    <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h4 class=\"modal-title\" id=\"deleteModal\">Confirm Delete</h4>\n          </div>\n          <div class=\"modal-body\" *ngIf=\"selectedItem\">\n           Are you sure you want to delete <span class=\"text-danger\"> {{selectedItem?.name}}</span> Item?       \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selectedItem)\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n        <!-- Modal Change category -->\n        <div class=\"modal fade\" id=\"updateDoctorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                      <h4 class=\"modal-title\" id=\"deleteModal\">Change Category</h4>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"selectedItem\">\n                            <div class=\"col-md-12 form-group\" *ngIf=\"categories\">\n                                    <label for=\"\">Assigned Category</label>\n                                    <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n                                      <option value=\"\"></option>\n                                      <option *ngFor=\"let category of categories\" value='{ \"id\":\"{{category.id}}\", \"name\":\"{{category.name}}\" }' >{{category.name}}</option>\n                                    </select>\n                                    </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n                      <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateCategory(selectedItem)\">Update</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n         \n      \n      <!-- Modal INSERT-->\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Food Item</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"container\">\n                <form #itemForm=\"ngForm\" (submit)=\"submit(itemForm.value)\">\n                    <div class=\"row\">\n              <div class=\"col-md-12 form-group\">\n                <label for=\"\"></label>\n                <input type=\"text\"\n                  class=\"form-control\" name=\"title\" placeholder=\"Title\" ngModel>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                  <label for=\"\"></label>\n                  <input type=\"number\"\n                    class=\"form-control\" name=\"price\" aria-describedby=\"helpId\" placeholder=\"Price\" ngModel>\n                </div>\n             \n            <div class=\"col-md-6 form-group\">\n              <label for=\"\"></label>\n              <input type=\"file\" style=\"display: none\" id=\"photo\" (change)=\"handle('photo')\">\n              <small class=\"btn btn-success\" (click)=\"hello('photo')\" >PHOTO</small>\n              <img [src]=\"\" alt=\"\" width=\"120px\" >\n              <label for=\"\" *ngIf=\"imgFile\">{{imgFile?.name}}</label>\n   </div>\n                <div class=\"col-md-12 form-group\">\n                    <label for=\"\"></label>\n                    <textarea type=\"text\"\n                      class=\"form-control\" name=\"description\" row=\"3\" aria-describedby=\"helpId\" placeholder=\"Description\" ngModel minlength=\"5\">\n                      </textarea>\n                  </div>\n           \n              <div class=\"col-md-12 form-group\" *ngIf=\"categories\">\n                <label for=\"\">Category</label>\n                <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n                  <option value=\"\"></option>\n                  <option *ngFor=\"let category of categories\" value='{ \"id\":\"{{category.id}}\", \"name\":\"{{category.name}}\" }' >{{category.name}}</option>\n                </select>\n                </div>\n                      <div class=\"col-md-6 form-group\">\n                              <label for=\"\">Status</label>\n                              <select class=\"form-control\" name=\"status\" ngModel>\n                                <option value=\"active\">Active</option>\n                                <option value=\"dismiss\">Dismiss</option>\n                              </select>\n                          </div>\n                    </div>\n            </form>\n            \n            </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit(itemForm.value)\" >Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n    \n    \n    \n      <!-- MODAL EDIT -->\n        <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Item</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"container\" *ngIf=\"selectedItem\">\n                    <form #itemUpdateForm=\"ngForm\" (submit)=\"submit(itemUpdateForm.value)\">\n                        <div class=\"row\">\n                  <div class=\"col-md-12 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"text\"\n                      class=\"form-control\" name=\"title\" placeholder=\"Item Name\" [(ngModel)]=\"selectedItem.title\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"number\"\n                      class=\"form-control\" name=\"price\"  aria-describedby=\"helpId\" placeholder=\"Phone Number\" [(ngModel)]=\"selectedItem.price\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"file\" style=\"display: none\" id=\"photo1\" (change)=\"handle('photo1')\">\n                    <img [src]=\"selectedItem.photo\" alt=\"\" width=\"120px\">\n                    <small class=\"btn btn-success\" (click)=\"hello1('photo1') \" >PHOTO</small>\n                    <label for=\"\" *ngIf=\"imgFile\">{{imgFile?.name}}</label>\n\n                 </div>\n                    <div class=\"col-md-12 form-group\">\n                        <label for=\"\"></label>\n                        <textarea type=\"text\" row=\"4\"\n                          class=\"form-control\" name=\"description\" aria-describedby=\"helpId\" placeholder=\"Description\" [(ngModel)]=\"selectedItem.description\">\n                          </textarea>\n                      </div>\n                 \n                   \n                          <div class=\"col-md-6 form-group\">\n                                  <label for=\"\">Status</label>\n                                  <select class=\"form-control\" name=\"status\" [(ngModel)]=\"selectedItem.status\">\n                                    <option value=\"active\">Active</option>\n                                    <option value=\"dismiss\">Dismiss</option>\n                                    <option value=\"away\">Away</option>\n                                  </select>\n                              </div>\n                        </div>\n                </form>\n                \n                </div>\n                </div>\n                <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update(selectedItem)\" >Save changes</button>\n                      </div>\n              </div>\n            </div>\n          </div>\n    \n    \n    \n        <!-- Modal EDIT -->\n        <!-- <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"editModal\">Edit Vacination</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\" *ngIf=\"selectedItem\">\n                  <div class=\"container\">\n                    <form #vaccineUpdateForm=\"ngForm\" (submit)=\"update(selectedItem)\">\n                        <div class=\"row\">\n                  <div class=\"col-md-12 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"text\"\n                      class=\"form-control\" name=\"name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Vaccination Name\" [(ngModel)]=\"selectedItem.name\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                      <label for=\"\"></label>\n                      <input type=\"number\"\n                        class=\"form-control\" name=\"dosage\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Dosage\"  [(ngModel)]=\"selectedItem.dosage\">\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                        <label for=\"\"></label>\n                        <input type=\"number\"\n                          class=\"form-control\" name=\"quantity\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Quantity\"  [(ngModel)]=\"selectedItem.quantity\">\n                      </div>\n                  <div class=\"col-md-12 form-group\">\n                      <label for=\"\"></label>\n                      <input type=\"text\"\n                        class=\"form-control\" name=\"disease\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Disease name\"  [(ngModel)]=\"selectedItem.disease\">\n                    </div>\n                    <div class=\"col-md-12 form-group\">\n                        <label for=\"\"></label>\n                        <input type=\"text\"\n                          class=\"form-control\" name=\"company\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Company Name\"  [(ngModel)]=\"selectedItem.company\">\n                      </div>\n                    <div class=\"col-md-6 form-group\">\n                        <label for=\"\">Manufacture Date</label>\n                        <input type=\"date\"\n                          class=\"form-control\" name=\"mfg\" id=\"\" aria-describedby=\"helpId\"  [(ngModel)]=\"selectedItem.mfg\">\n                      </div>\n                      <div class=\"col-md-6 form-group\">\n                          <label for=\"\">Expiry Date</label>\n                          <input type=\"date\"\n                            class=\"form-control\" name=\"exp\" id=\"\" aria-describedby=\"helpId\"  [(ngModel)]=\"selectedItem.exp\">\n                        </div>\n                        <div class=\"col-md-6 form-group\">\n                            <label for=\"\">Minimum Age</label>\n                            <input type=\"number\"\n                              class=\"form-control\" name=\"minAge\" id=\"\" aria-describedby=\"helpId\"  [(ngModel)]=\"selectedItem.minAge\">\n                          </div>\n                          <div class=\"col-md-6 form-group\">\n                              <label for=\"\">Maximum Age</label>\n                              <input type=\"number\"\n                                class=\"form-control\" name=\"maxAge\" id=\"\" aria-describedby=\"helpId\"  [(ngModel)]=\"selectedItem.maxAge\">\n                            </div>\n                            <div class=\"col-md-12 form-group\">\n                              <label for=\"\">Note</label>\n                              <textarea class=\"form-control\" name=\"note\" id=\"\" rows=\"3\" placeholder=\"Prescription Note..\"  [(ngModel)]=\"selectedItem.note\"></textarea>\n                            </div>\n                  \n                \n                        </div>\n                </form>\n                \n                </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"update(selectedItem)\" >Save changes</button>\n                </div>\n              </div>\n            </div>\n          </div> -->"

/***/ }),

/***/ "../../../../../src/app/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_storage__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(api, storage) {
        this.api = api;
        this.storage = storage;
        this.opt = { name: '', price: '' };
        this.sideorderAddToggle = true;
        this.variantsAddToggle = true;
        this.variant = {
            name: '',
            options: []
        };
        this.xxx = '';
        this.order = 'name';
        this.photoEdit = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getItems().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (resp) {
            _this.workers = resp;
        });
        this.api.getCategories().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (doctorx) {
            _this.categories = doctorx;
        });
    };
    ItemsComponent.prototype.submit = function (val) {
        var _this = this;
        //first i will upload the file then do the rest? 
        this.upload().then(function (r) {
            _this.uploadLink.getDownloadURL().then(function (link) {
                console.log(link);
                val.photo = link;
                //--------casual work------
                $('#exampleModal').modal('hide');
                console.log(_this.selectedCategory);
                val.joinDate = new Date();
                val.sideorders = [];
                val.variants = [];
                console.log(val.joinDate);
                if (_this.selectedCategory) {
                    val.category = _this.selectedCategory.name;
                    val.categoryId = _this.selectedCategory.id;
                }
                console.log(val);
                _this.api.addItem(val).then(function (res) {
                    console.log('item added');
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    ItemsComponent.prototype.delete = function (item) {
        $('#deleteModal').modal('hide');
        this.selectedItem = {};
        //now removing the item
        this.api.deleteItem(item.id).then(function (res) {
        }, function (err) { });
    };
    ItemsComponent.prototype.hello1 = function (elem) {
        $('#' + elem).trigger('click');
        this.photoEdit = true;
    };
    ItemsComponent.prototype.update = function (data) {
        var _this = this;
        //first i will upload the file then do the rest? 
        if (this.photoEdit == true) {
            this.upload().then(function (r) {
                _this.uploadLink.getDownloadURL().then(function (link) {
                    console.log(link);
                    data.photo = link;
                    //--------casual work------
                    $('#editModal').modal('hide');
                    _this.api.updateItem(data.id, data).then(function (res) {
                        _this.selectedItem = {};
                        _this.selectedCategory = {};
                        _this.photoEdit = false;
                    });
                });
            });
        }
        else {
            //--------casual work------
            $('#editModal').modal('hide');
            this.api.updateItem(data.id, data).then(function (res) {
                _this.selectedItem = {};
                _this.selectedCategory = {};
            });
        }
    };
    // update(data){
    //   $('#editModal').modal('hide');
    //   this.api.updateItem(data.id, data).then(res=>{
    //     this.selectedItem ={};
    //     this.selectedCategory ={};
    //   })
    // }
    ItemsComponent.prototype.updateCategory = function (data) {
        var _this = this;
        if (this.selectedCategory) {
            data.category = this.selectedCategory.name;
            data.categoryId = this.selectedCategory.id;
            $('#updateDoctorModal').modal('hide');
            this.api.updateItem(data.id, data).then(function (res) {
                _this.selectedItem = {};
                _this.selectedCategory = {};
            });
        }
        else {
            console.log('no change');
            $('#updateDoctorModal').modal('hide');
        }
    };
    ItemsComponent.prototype.onChange = function (e) {
        var obj = JSON.parse(e);
        this.selectedCategory = { name: obj.name, id: obj.id };
        console.log(this.selectedCategory);
    };
    ItemsComponent.prototype.addSideorder = function (data, event) {
        var _this = this;
        console.log("sideorder pressed!");
        event.preventDefault();
        //first i will upload the file then do the rest? 
        this.upload().then(function (r) {
            _this.uploadLink.getDownloadURL().then(function (link) {
                console.log(link);
                data.photo = link;
                //--------casual work------
                _this.selectedItem.sideorders.push(data);
                //now updating the component will require the following info 
                _this.api.updateItem(_this.selectedItem.id, _this.selectedItem).then(function (r) {
                    console.log("updted');");
                    _this.sideorderAddToggle = true;
                });
            });
        });
    };
    ItemsComponent.prototype.addVariant = function () {
        var _this = this;
        console.log("variant pressed!");
        this.selectedItem.variants.push(this.variant);
        //now updating the component will require the following info 
        this.api.updateItem(this.selectedItem.id, this.selectedItem).then(function (r) {
            console.log("updated variants');");
            _this.variant = {
                name: '',
                options: []
            };
            _this.variantsAddToggle = true;
        });
    };
    ItemsComponent.prototype.addOption = function () {
        this.variant.options.push(this.opt);
        console.log(this.variant);
        this.opt = { name: '', price: null };
    };
    ItemsComponent.prototype.deleteSideorder = function (index) {
        this.selectedItem.sideorders.splice(index, 1);
        this.api.updateItem(this.selectedItem.id, this.selectedItem).then(function (r) {
            console.log("updted');");
            // this.sideorderAddToggle = true;
        });
        console.log(this.selectedItem.sideorders);
    };
    ItemsComponent.prototype.removeOption = function (value) {
        this.variant.options = this.variant.options.filter(function (item) {
            return item !== value;
        });
        console.log(this.variant.options);
        // [ 1, 2, 4, 5 ]
    };
    ItemsComponent.prototype.deleteVariant = function (index) {
        this.selectedItem.variants.splice(index, 1);
        this.api.updateItem(this.selectedItem.id, this.selectedItem);
    };
    ItemsComponent.prototype.orderBy = function (value) {
        this.order = value;
    };
    ItemsComponent.prototype.hello = function (elem) {
        $('#' + elem).trigger('click');
    };
    ItemsComponent.prototype.handle = function (elem) {
        this.imgFile = document.getElementById(elem).files[0];
    };
    ItemsComponent.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.uploadLink = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref().child('files/' + Math.random().toFixed() + '_' + this.imgFile.name);
                return [2 /*return*/, this.uploadLink.put(this.imgFile).then(function (url) {
                        //console.log(url);
                        return url;
                    })];
            });
        });
    };
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/items/items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nh3{\r\n    font-size: 28px;\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    line-height: 31px;\r\n    color:#292b2c;\r\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n\r\n}\r\nh1{\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    line-height: 44px;\r\n    color:#292b2c;\r\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n\r\n}\r\np,li{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    line-height: 30px;\r\n    color:#292b2c;\r\n}\r\n.whitex{\r\n    color:white;\r\n}\r\n.card{\r\n    border-color:rgb(192, 192, 192);\r\n    border:2px;\r\n    border-style: dotted;\r\n}\r\n.card-text{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    line-height: 24px;\r\n    color:#292b2c;\r\n}\r\n.container-fluid{\r\n    padding-top: 1%;\r\n    /* height: 100%; */\r\n    /* bottom: 0; */\r\n    /* padding-bottom: 2%; */\r\n  }\r\n#mainnav a:link, a:visited {\r\n    font-family: 'Times New Roman', sans-serif;\r\n    /* font-weight: bold; */\r\n    font-size: 20px;\r\n    /* color: white; */\r\n     /* color: deeppink; */\r\n    /*text-decoration: none; */\r\n    text-align: center;\r\n    padding: 5px 10px;\r\n  }\r\n#mainnav a:hover, a:active{\r\n    /* background-color:cyan; */\r\n    /* font-size: 18px; */\r\n    font-weight: bold;\r\n    /* color: black; */\r\n  }\r\ninput[type=\"search\"]:focus {\r\n    /* width: 100%; */\r\n    border: 3px solid black;\r\n    border-radius: 20px;\r\n  }\r\ninput[type=\"search\"]:hover {\r\n    border: 3px solid red;\r\n    border-radius: 15px;\r\n  }\r\nbutton[type=\"submit\"]:hover{\r\n    /* border: 3px solid yellowgreen; */\r\n    border-radius: 15px;\r\n  }\r\n.alignimg{\r\n    float: left;\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden\r\n  }\r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <h3>Welcome to Paisano's Pizza Admin Panel!</h3>\n        <button class=\"btn-lg btn btn-primary\"  routerLink=\"/login\">LOGIN </button>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(api) {
        this.api = api;
        this.query = {
            email: '',
            message: '',
            name: '',
            date: ''
        };
        this.questions =
            [
                {
                    query: 'What is Polio?',
                    // tslint:disable-next-line:max-line-length
                    answer: "Poliomyelitis (polio) is a highly infectious disease caused by the polio virus. It invades the nervous system, and can cause paralysis or even death in a matter of hours. ",
                    hide: false
                },
                {
                    query: 'How is polio transmitted?',
                    // tslint:disable-next-line:max-line-length
                    answer: "Poliomyelitis (polio) is a highly infectious disease caused by the polio virus. It invades the nervous system, and can cause paralysis or even death in a matter of hours. ",
                    hide: false
                }
                // {
                //   query: 'Is OPV safe for sick children and newborns?',
                //   // tslint:disable-next-line:max-line-length
                // tslint:disable-next-line:max-line-length
                //   answer: `The Acute Flaccid Paralysis Surveillance system is a critical part of the protection available for families against polio. If a child suddenly shows signs of a floppy, or weak arm or leg, health authorities should be informed immediately so that a sample of the child's faeces can be taken for analysis and the child can get proper treatment. It is very important to act fast – polio is VERY infectious. `,
                //   hide: true
                // },
            ];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getFAQS().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                var hide = false;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (resp) {
            _this.faqs = resp;
        });
    };
    LandingComponent.prototype.sendQuery = function () {
        var _this = this;
        if (this.query.message && this.query.email) {
            var x = new Date().toLocaleDateString();
            this.query.date = x;
            this.api.saveQuery(this.query).then(function (r) {
                _this.query = {
                    email: '',
                    message: '',
                    name: '',
                    date: ''
                };
                alert('Query sent to the adminstration! Thanks.');
            });
        }
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container text-center\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                <h2>Welcome Admin</h2>\n                <!-- <h4>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</h4> -->\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-signup page-header\" style=\"background-image: url('https://st2.depositphotos.com/1434772/6502/i/950/depositphotos_65021965-stock-photo-large-group-of-sandwiches-in.jpg');filter:hue-rotate();padding:120px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 ml-auto mr-auto\">\n                <div class=\"card card-signup\">\n                    <!-- <form class=\"form\" method=\"\" action=\"\"> -->\n                        <div class=\"card-header card-header-primary text-center\">\n                            <h4>Login </h4>\n                            <div class=\"social-line\">\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        <p class=\"text-divider text-center alert alert-danger\" *ngIf=\"error\">ERROR:{{error}}</p>\n                        <div class=\"card-body\">\n                          \n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">email</i>\n                                </span>\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email...\" required email appForbiddenName=\"bob\"\n                                [(ngModel)]=\"user.email\" #email=\"ngModel\">\n                            </div>\n\n                        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                            class=\"alert alert-danger small\">\n                       \n                            <div *ngIf=\"email.errors.required\">\n                              Email is required.\n                            </div>\n                            <div *ngIf=\"email.errors.forbiddenName\">\n                                email cannot be Bob.\n                            </div> \n                            <div *ngIf=\"email.errors.email\">\n                                Incorrect Email Format.\n                            </div> \n                        </div>\n                            \n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">lock_outline</i>\n                                </span>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password...\" required minlength=\"6\" \n                                [(ngModel)]=\"user.password\" #password=\"ngModel\">\n                            </div>     \n                            \n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                            class=\"alert alert-danger small\">\n                       \n                            <div *ngIf=\"password.errors.required\">\n                                password is required.\n                            </div>\n                            <div *ngIf=\"password.errors.minlength\">\n                                Password cannot be less than 6 characters..\n                            </div> \n                        </div>\n\n\n                            <!-- If you want to add a checkbox to this form, uncomment this code\n\n      <div class=\"form-check\">\n          <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n              Subscribe to newsletter\n              <span class=\"form-check-sign\">\n                  <span class=\"check\"></span>\n              </span>\n          </label>\n      </div> -->\n                        </div>\n                        <div class=\"card-footer justify-content-center\">\n                            <button class=\"btn btn-primary btn-lg\" (click)=\"login()\">Get Started</button>\n                        </div>\n                    <!-- </form> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, api) {
        this.router = router;
        this.api = api;
        this.user = {
            email: 'admin@gmail.com',
            password: 'admin123'
        };
        this.correct = {
            email: 'admin@gmail.com',
            password: 'admin123'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.api.loginAdmin(this.user.email, this.user.password).then(function (response) {
            _this.error = '';
            _this.api.adminId = response.uid;
            _this.api.admin = response;
            localStorage.setItem('uid', response.uid);
            _this.router.navigate(['dashboard']);
        }, function (err) {
            _this.error = 'ERROR:' + err;
            setTimeout(function () {
                _this.error;
            }, 5000);
        });
        // if(this.user.email=='moeidsaleem@gmail.com' && this.user.password == 'moeid123' ){
        //   this.error=''
        //   console.log(this.user);
        //   this.router.navigate(['dashboard'])
        // }else{
        //   this.error='Incorrect Credentials.'
        //   setTimeout(()=>{
        //     this.error;
        //   },5000)
        // }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main-panel\">\n  <app-header></app-header>\n  <div class=\"content\">\n  <div class=\"container-fluid\">\n      <div class=\"col-md-12\">\n          <div class=\"card\">\n              <div class=\"card-header card-header-primary\">\n                  <h4 class=\"card-title \">NOTIFICATIONS!                 \n                      <div class=\"pull-right btn btn-warning\" data-toggle=\"modal\" role=\"dialog\" data-target=\"#exampleModal\" data-backdrop=\"static\" date-keyboard=\"false\" data-focus=\"true\" #tref><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> ADD</div>\n                  </h4>\n                  <p class=\"card-category\"> Already generated Notifications!.</p>\n              </div>\n              <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-btn\">\n                          <a class=\"btn btn-secondary\" type=\"button\" aria-label=\"\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\n                        </span>\n                        <input type=\"search\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Search...\" aria-label=\"\" [(ngModel)]=\"term\">\n                      </div>\n\n                      \n                        <table class=\"table\">\n                            <thead class=\" text-primary\">\n                                <th>\n                                   Notification ID\n                                </th>\n                                <th (click)=\"orderBy('userName')\">\n                                    Title\n                                    <i *ngIf=\"order == 'name'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                </th>\n                                <th (click)=\"orderBy('date')\">\n                                    Date\n                                    <i *ngIf=\"order == 'date'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n\n                                </th>\n                                <th>MESSAGE</th>\n                                \n                                 <th>\n                                    Actions\n                                </th>\n\n                            </thead>\n                            <tbody *ngIf=\"notifications\">\n                                <tr *ngFor=\"let x of notifications | filter:term | orderBy: order\" >\n                                    <td>\n                                      {{x?.id}}\n                                    </td>\n                                 \n                                    <td>\n                                        {{x?.title}}\n                                    </td>\n                                     <td>\n                                      <strong> {{x?.date}}  \n                                           \n                                    </strong> \n                                    </td>\n                                    <td>\n                                      {{x?.message}}\n                                  </td>\n                                   \n                                     <td>\n                                        <span class=\"btn btn-sm btn-danger\" (click)=\"selectedNotification = x\" data-toggle=\"modal\" data-target=\"#deleteModal\" > <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                        <!-- <span class=\"btn btn-sm btn-success\" (click)=\"selectedNotification = x\" data-toggle=\"modal\" data-target=\"#updateModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span>  -->\n                                      </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                \n                \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n\n\n <!-- Modal INSERT-->\n <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Generate Notifications!</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"notification\">\n        <div class=\"container\">\n          <div class=\"form-group\">\n            <label for=\"\"></label>\n            <input type=\"text\"\n              class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Title..\" [(ngModel)]=\"notification.title\">\n            <small id=\"helpId\" class=\"form-text text-muted\">Enter Notification message</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\"></label>\n            <input type=\"text\"\n              class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Message..\" [(ngModel)]=\"notification.message\">\n            <small id=\"helpId\" class=\"form-text text-muted\">Enter Notification message</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\"></label>\n            <input type=\"date\"\n              class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Message..\" [(ngModel)]=\"notification.date\">\n            <small id=\"helpId\" class=\"form-text text-muted\"></small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Priority</label>\n            <select class=\"form-control\" name=\"status\" [(ngModel)]=\"notification.priority\">\n              <option value=\"low\">low</option>\n              <option value=\"medium\">medium</option>\n              <option value=\"high\">High</option>\n            </select>\n        </div>\n    \n\n       </div>   \n       \n     \n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"send()\">Save changes</button>\n      </div>\n      </div>\n     \n    </div>\n  </div>\n\n\n\n  <!-- Modal DELETE -->\n  <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h4 class=\"modal-title\" id=\"deleteModal\">Confirm Delete</h4>\n          </div>\n          <div class=\"modal-body\" *ngIf=\"selectedNotification\">\n           Are you sure you want to delete this notification sent to <span class=\"text-danger\"> {{selectedNotification?.userName || 'All users'}}</span>\n            on date: <span class=\"text-danger\"> {{selectedNotification?.date}}</span> ?\n               \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteNotification(selectedNotification.id)\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n <!-- Modal UPDATE-->\n <div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"updateModal\">Update Notifications!</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" *ngIf=\"selectedNotification\">\n          <div class=\"container\">\n            <div class=\"form-group\">\n              <label for=\"\"></label>\n              <input type=\"text\"\n                class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Message..\" [(ngModel)]=\"selectedNotification.message\">\n              <small id=\"helpId\" class=\"form-text text-muted\">Enter Notification message</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\"></label>\n              <input type=\"date\"\n                class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Message..\" [(ngModel)]=\"selectedNotification.date\">\n              <small id=\"helpId\" class=\"form-text text-muted\"></small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Priority</label>\n              <select class=\"form-control\" name=\"status\" [(ngModel)]=\"selectedNotification.priority\">\n                <option value=\"low\">low</option>\n                <option value=\"medium\">medium</option>\n                <option value=\"high\">High</option>\n              </select>\n          </div>\n      \n         \n         \n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"send()\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(api) {
        this.api = api;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notification = {
            title: '',
            message: '',
            priority: '',
            date: '',
        };
        this.api.getAllNotifications().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (data) { _this.notifications = data; console.log(_this.notifications); });
        this.api.getOrders().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                var type = 'doctor';
                return __assign({ id: id, type: type }, data);
            });
        }).subscribe(function (doctors) {
            _this.api.getWorkers().map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    var type = 'worker';
                    return __assign({ id: id, type: type }, data);
                });
            }).subscribe(function (workers) {
                var u = doctors;
                _this.users = u.concat(workers);
                console.log(_this.users);
            });
        });
    };
    NotificationsComponent.prototype.onChange = function (e) {
        var obj = JSON.parse(e);
        this.selectedUser = { userName: obj.name, userId: obj.id, userType: obj.type };
        console.log(this.selectedUser);
    };
    NotificationsComponent.prototype.send = function () {
        var _this = this;
        console.log('generating notification');
        console.log(this.notification);
        if (this.selectedUser && this.notification.type == 'specific') {
            this.notification.userName = this.selectedUser.userName;
            this.notification.userId = this.selectedUser.userId;
            this.notification.userType = this.selectedUser.userType;
        }
        this.notification.status = 'sent'; /* or it can be 'read' */
        $('#exampleModal').modal('hide');
        this.api.generateNotification(this.notification).then(function (resp) {
            _this.api.sendNotification(_this.notification.title, _this.notification.message);
            console.log('notification Generated');
            _this.notification = {
                message: '',
                priority: '',
                date: '',
            };
            _this.selectedUser = {};
        });
    };
    NotificationsComponent.prototype.deleteNotification = function (notificationId) {
        var _this = this;
        $('#deleteModal').modal('hide');
        //now removing the vaccine
        this.api.deleteNotification(notificationId).then(function (res) {
            _this.selectedNotification = {};
            console.log("notification deleted.");
        }, function (err) { });
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main-panel\">\n        <app-header></app-header>\n        <div class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">Orders                 \n                            <!-- <div class=\"pull-right btn btn-warning\" data-toggle=\"modal\" role=\"dialog\" data-target=\"#exampleModal\" data-backdrop=\"static\" date-keyboard=\"false\" data-focus=\"true\" #tref><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> ADD</div> -->\n                        </h4>\n                        <p class=\"card-category\"> Here is a subtitle for this table.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-btn\">\n                              <a class=\"btn btn-secondary\" type=\"button\" aria-label=\"\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\n                            </span>\n                            <input type=\"search\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Search...\" aria-label=\"\" [(ngModel)]=\"term\">\n                          </div>\n    \n                          \n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <!-- <th>\n                                       Order ID\n                                    </th> -->\n                                    <th (click)=\"orderBy('name')\">\n                                        Full Name\n                                        <i *ngIf=\"order == 'name'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                        <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                    </th>\n                                    <th (click)=\"orderBy('phone')\">\n                                      Phone\n                                      <i *ngIf=\"order == 'phone'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                      <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                  </th>\n                                  <th (click)=\"orderBy('email')\">\n                                    Email\n                                    <i *ngIf=\"order == 'email'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    <!-- <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i> -->\n                                </th>\n                                    <th (click)=\"orderBy('joinDate')\">\n                                         Date\n                                        <i *ngIf=\"order == 'joinDate'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n    \n                                    </th>\n                                    <th (click)=\"orderBy('type')\">\n                                      Order Type\n                                      <i *ngIf=\"order == 'type'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                  </th>\n                                    <th (click)=\"orderBy('branch')\">\n                                        Branch\n                                        <i *ngIf=\"order == 'branch'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    </th>\n                                    <th (click)=\"orderBy('address')\">\n                                        Address\n                                        <i *ngIf=\"order == 'tehseel'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n    \n                                    </th>\n                                    <th (click)=\"orderBy('workerName')\">\n                                      items\n                                        <i *ngIf=\"order == 'workerName'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    </th>\n                                    <th  (click)=\"orderBy('total')\">\n                                      Total Amount\n                                      <i *ngIf=\"order == 'total'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    </th>\n                                    <th (click)=\"orderBy('status')\">\n                                        status\n                                        <i *ngIf=\"order == 'status'\"class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                                    </th>\n                                    <th>\n                                        Note\n                                    </th>\n                                     <th>\n                                        Actions\n                                    </th>\n    \n                                </thead>\n                                <tbody *ngIf=\"orders\">\n                                    <tr *ngFor=\"let x of orders | filter:term | orderBy: order\" >\n                                        <!-- <td>\n                                          {{x?.id}}\n                                        </td> -->\n                                        <td>\n                                          {{x?.name}}\n                                        </td>\n                                        <td>\n                                          {{x?.phone}}\n                                        </td>\n                                        <td>\n                                          {{x?.email}}\n                                        </td>\n                                        <td>\n                                        <small>   {{x?.date}}</small> \n                                        </td>\n                                        <td>\n                                         <span class=\"badge badge-dark\">  {{x?.type}} </span> \n                                      </td>\n                                        <td>\n                                          <small>  {{x?.branch}}</small>\n                                        </td>\n                                        <td>\n                                       <small>   {{x?.address}} .</small>  \n                                         </td>\n                                         <td>\n                                          <span class=\"badge badge-info\" *ngFor=\"let item of x.cart\"> \n                                            <strong> {{item?.title || item?.name}}</strong>: x<b>{{item?.quantity}}</b>  = {{item?.price * item?.quantity | currency}}\n                                          </span>\n                                        </td>\n                                        <td>\n                                            {{x?.total | currency}}\n                                       </td>\n                                         <td>\n                                             <span *ngIf=\"x.status == 'ordered'\" class=\"badge badge-primary\">{{x?.status}}</span> \n                                             <span *ngIf=\"x.status == 'completed'\" class=\"badge badge-warning\">{{x?.status}}</span> \n                                             <span *ngIf=\"x.status == 'cancel'\" class=\"badge badge-danger\"> {{x?.status}}</span>\n                                            </td>\n                                         <td>\n                                            {{x?.note}}\n                                         </td>\n                                         <td>\n                                            <span class=\"btn btn-sm btn-danger\" (click)=\"selectedOrder = x\" data-toggle=\"modal\" data-target=\"#deleteModal\" > <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                            <span class=\"btn btn-sm btn-success\" (click)=\"selectedOrder = x\" data-toggle=\"modal\" data-target=\"#editModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                          </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      </div>\n    \n    \n\n\n\n      <!--  ::::::::::::::::::::::::::::::::::::::::::::::::::: MODALs  ::::::::::::::::::::::::::::::::::::::::::::: -->\n      <!-- Modal Children -->\n      <div class=\"modal fade\" id=\"childrenModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"childrenModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\" *ngIf=\"selectedOrder\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                  <h4 class=\"modal-title\" id=\"childrenModal\">Manage {{selectedOrder?.name}} </h4>\n                </div>\n                <div class=\"modal-body\" >\n                    <div class=\"container\">\n                        <div class=\"row text-center\">\n                            <div class=\"col-md-12 text-center\">\n                            <h3 class=\"text-center\" *ngIf=\"childAddToggle==true\">\n                                <span class=\"badge badge-success\" (click)=\"childAddToggle = !childAddToggle\"><i class=\"fa fa-plus\">ADD</i></span>\n                        </h3>\n                        <form #childForm=\"ngForm\" (submit)=\"addChild(childForm.value)\"  *ngIf=\"childAddToggle==false\">  \n                            <div class=\"col-md-12 form-group\">\n                              <label for=\"\">Full Name</label>\n                              <input type=\"text\"\n                                class=\"form-control\" name=\"name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" ngModel>\n                            </div>\n                            <div class=\"row\">\n                            <div class=\"col-md-6 form-group\">\n                                    <label for=\"\">Age</label>\n                                    <input type=\"number\"\n                                      class=\"form-control\" name=\"age\" max=\"7\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" ngModel>\n                                      </div>\n                                  <div class=\"col-md-6 form-group\">\n                                        <label for=\"\">Last Vaccination</label>\n                                        <input type=\"date\"\n                                          class=\"form-control\" name=\"lastVacc\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" ngModel>\n                                      </div>\n                                    </div>\n                                      <div class=\"form-group\">\n                                            <label for=\"\">Allergies</label>\n                                            <input type=\"allergies\"\n                                              class=\"form-control\" name=\"allergies\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\" ngModel>\n                                          </div>\n                                          <div class=\"form-group\">\n                                            <label for=\"\">Status</label>\n                                            <select class=\"form-control\" name=\"status\" ngModel>\n                                              <option value=\"pending\">Pending</option>\n                                              <option value=\"uninterested\">Uninterested</option>\n                                              <option value=\"vaccinated\">Vaccinated</option>\n                                            </select>\n                                        </div>\n                                          <button class=\"btn btn-danger\" (click)=\"childAddToggle= !childAddToggle\"><i class=\"fa fa-remove\"></i></button>\n                                          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                        </form>\n                    </div>\n\n                    <div class=\"col-md-12\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr  class=\"text-center\">\n                                    <th>CHILDREN</th>\n                                   \n                                </tr>\n                                <tr style=\"font:bold;\">\n                                        <th >Full Name</th>\n                                        <th >Age</th>\n                                        <th >Latest Vacc.</th>\n                                        <th >Status</th>\n                                        <th> Actions</th>\n                                       \n                                    </tr>\n                            </thead>\n                            <tbody *ngIf=\"children\">\n                                <tr class=\"small\" *ngFor=\"let child of children\">\n                                    <td scope=\"row\">{{child?.name}}</td>\n                                    <td>{{child?.age}}</td>\n                                    <td><b>{{child?.lastVacc}}</b></td>\n                                    <td >\n                                      <span *ngIf=\"child.status == 'pending'\" class=\"badge badge-primary\">{{child?.status}}</span> \n                                      <span *ngIf=\"child.status == 'uninterested'\" class=\"badge badge-warning\">{{child?.status}}</span> \n                                      <span *ngIf=\"child.status == 'vaccinated'\" class=\"badge badge-danger\"> {{child?.status}}</span>\n                                     </td>\n                                    <td>\n                                            <span class=\"btn btn-sm btn-danger\" (click)=\"deleteChild(child.id)\"> <i class=\"fa fa-remove\" aria-hidden=\"true\"></i></span> \n                                            <span class=\"btn btn-sm btn-success\" (click)=\"selectedChild = child\" data-toggle=\"modal\" data-target=\"#updateChildModal\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span> \n                                          </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                            \n\n                        </div>\n                    </div>\n\n                 \n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selectedOrder)\">Delete</button> -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n    <!-- Modal DELETE -->\n    <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h4 class=\"modal-title\" id=\"deleteModal\">Confirm Delete</h4>\n          </div>\n          <div class=\"modal-body\" *ngIf=\"selectedOrder\">\n           Are you sure you want to delete <span class=\"text-danger\"> {{selectedOrder?.name}}</span> 's Order'?       \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selectedOrder)\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n        <!-- Modal Update Assigned Doctor -->\n        <div class=\"modal fade\" id=\"updateDoctorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                      <h4 class=\"modal-title\" id=\"updateDoctorModal\">Change Assigned Worker</h4>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"selectedOrder\">\n                            <div class=\"col-md-12 form-group\" *ngIf=\"workers\">\n                                    <label for=\"\">Assigned Worker</label>\n                                    <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n                                        <option value=\"\"></option>\n                                      <option *ngFor=\"let doc of workers\" value='{ \"id\":\"{{doc.id}}\", \"name\":\"{{doc.name}}\" }' >{{doc.name}}</option>\n                                    </select>\n                                    </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n                      <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateWorker(selectedOrder)\">Update</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n    \n\n                <!-- Modal Update Selected Children -->\n        <div class=\"modal fade\" id=\"updateChildModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateChildModal\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-sm|lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                      <h4 class=\"modal-title\" id=\"deleteModal\">Update {{selectedChild?.name}}'s Data</h4>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"selectedChild\">\n                        <div class=\"form-group\">\n                          <label for=\"\"></label>\n                          <input type=\"text\"\n                            class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"name\" [(ngModel)]=\"selectedChild.name\">\n                          <small id=\"helpId\" class=\"form-text text-muted\">Help text</small>\n                        </div>\n                        <div class=\"form-group\">\n                                <label for=\"\"></label>\n                                <input type=\"number\"\n                                  class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"age\" [(ngModel)]=\"selectedChild.age\">\n                                <small id=\"helpId\" class=\"form-text text-muted\">Help text</small>\n                              </div>\n                              <div class=\"form-group\">\n                                    <label for=\"\"></label>\n                                    <input type=\"date\"\n                                      class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Last vaccination\" [(ngModel)]=\"selectedChild.lastVacc\">\n                                    <small id=\"helpId\" class=\"form-text text-muted\">Help text</small>\n                                  </div>\n                                  <div class=\"form-group\">\n                                        <label for=\"\"></label>\n                                        <input type=\"text\"\n                                          class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Allergies\" [(ngModel)]=\"selectedChild.allergies\">\n                                        <small id=\"helpId\" class=\"form-text text-muted\">Help text</small>\n                                      </div>\n                                      <div class=\"form-group\">\n                                        <label for=\"\">Status</label>\n                                        <select class=\"form-control\" name=\"status\" [(ngModel)]=\"selectedChild.status\">\n                                          <option value=\"pending\">Pending</option>\n                                          <option value=\"uninterested\">Uninterested</option>\n                                          <option value=\"vaccinated\">Vaccinated</option>\n                                        </select>\n                                    </div>\n                           \n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n                      <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateChild(selectedChild)\">Update</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n      \n      <!-- Modal INSERT-->\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Order</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"container\">\n                <form #workerForm=\"ngForm\" (submit)=\"submit(workerForm.value)\">\n                    <div class=\"row\">\n              <div class=\"col-md-12 form-group\">\n                <label for=\"\"></label>\n                <input type=\"text\"\n                  class=\"form-control\" name=\"name\" placeholder=\"Full Name\" ngModel>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <label for=\"\"></label>\n                <input type=\"tel\"\n                  class=\"form-control\" name=\"phone\"  aria-describedby=\"helpId\" placeholder=\"Phone Number\" ngModel>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                  <label for=\"\"></label>\n                  <input type=\"email\"\n                    class=\"form-control\" name=\"email\" aria-describedby=\"helpId\" placeholder=\"Email\" ngModel>\n                </div>\n                <div class=\"col-md-12 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"password\"\n                      class=\"form-control\" name=\"password\" aria-describedby=\"helpId\" placeholder=\"Password\" ngModel minlength=\"5\">\n                  </div>\n              <div class=\"col-md-6 form-group\">\n                  <label for=\"\"></label>\n                  <input type=\"number\"\n                    class=\"form-control\" name=\"cnic\" aria-describedby=\"helpId\" placeholder=\"CNIC Number\" ngModel>\n                </div>\n              <div class=\"col-md-12 form-group\" *ngIf=\"workers\">\n                <label for=\"\">Assigned Worker</label>\n                <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n                    <option value=\"\"> </option>\n                  <option *ngFor=\"let doc of workers\" value='{ \"id\":\"{{doc.id}}\", \"name\":\"{{doc.name}}\" }' >{{doc.name}}</option>\n                </select>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <label for=\"\">Tehseel</label>\n                    <input type=\"text\"\n                      class=\"form-control\" name=\"tehseel\" aria-describedby=\"helpId\" ngModel>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                      <label for=\"\">City</label>\n                      <input type=\"text\"\n                        class=\"form-control\" name=\"city\"  aria-describedby=\"helpId\" ngModel>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                        <label for=\"\">Country</label>\n                        <input type=\"text\"\n                          class=\"form-control\" name=\"country\" aria-describedby=\"helpId\" ngModel>\n                      </div>\n                      <div class=\"col-md-6 form-group\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                                    Approvde account!\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" name=\"approved\" ngModel>\n                                <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                </span>\n                            </label>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 form-group\">\n                              <label for=\"\">Status</label>\n                              <select class=\"form-control\" name=\"status\" ngModel>\n                                <option value=\"ordered\">ordered</option>\n                                <option value=\"completed\">completed</option>\n                                <option value=\"cancel\">cancel</option>\n                              </select>\n                          </div>\n                      <div class=\"col-md-12 form-group\">\n                          <label for=\"\">Note</label>\n                          <textarea class=\"form-control\" name=\"note\"  rows=\"3\" placeholder=\"Prescription Note..\" ngModel></textarea>\n                        </div>\n              \n            \n                    </div>\n            </form>\n            \n            </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit(workerForm.value)\" >Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n    \n    \n    \n      <!-- MODAL EDIT -->\n        <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Order</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"container\" *ngIf=\"selectedOrder\">\n                    <form #workerUpdateForm=\"ngForm\" (submit)=\"submit(workerUpdateForm.value)\">\n                        <div class=\"row\">\n                  <div class=\"col-md-12 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"text\"\n                      class=\"form-control\" name=\"name\" placeholder=\"Full Name\" [(ngModel)]=\"selectedOrder.name\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                    <label for=\"\"></label>\n                    <input type=\"number\"\n                      class=\"form-control\" name=\"phone\"  aria-describedby=\"helpId\" placeholder=\"Phone Number\" [(ngModel)]=\"selectedOrder.phone\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                      <label for=\"\"></label>\n                      <input type=\"email\"\n                        class=\"form-control\" name=\"email\" aria-describedby=\"helpId\" placeholder=\"Email\" [(ngModel)]=\"selectedOrder.email\">\n                    </div>\n                    <div class=\"col-md-12 form-group\">\n                        <label for=\"\"></label>\n                        <input type=\"branch\"\n                          class=\"form-control\" name=\"branch\" aria-describedby=\"helpId\" placeholder=\"Password\" [(ngModel)]=\"selectedOrder.password\">\n                      </div>\n                  <div class=\"col-md-12 form-group\">\n                      <label for=\"\"></label>\n                      <input type=\"text\"\n                        class=\"form-control\" name=\"address\" aria-describedby=\"helpId\" placeholder=\"Address\" [(ngModel)]=\"selectedOrder.address\">\n                    </div>\n                 \n                          <div class=\"col-md-6 form-group\">\n                                  <label for=\"\">Status</label>\n                                  <select class=\"form-control\" name=\"status\" [(ngModel)]=\"selectedOrder.status\">\n                                    <option value=\"ordered\">Ordered</option>\n                                    <option value=\"completed\">Completed</option>\n                                    <option value=\"cancel\">Cancel</option>\n                                  </select>\n                              </div>\n                              <div class=\"col-md-6 form-group\">\n                                  <label for=\"\">Status</label>\n                                  <select class=\"form-control\" name=\"status\" [(ngModel)]=\"selectedOrder.type\">\n                                    <option value=\"pickup\">Pickup</option>\n                                    <option value=\"delivery\">Delivery</option>\n                                  </select>\n                              </div>\n                          <div class=\"col-md-12 form-group\">\n                              <label for=\"\">Note</label>\n                              <textarea class=\"form-control\" name=\"note\"  rows=\"3\" placeholder=\"Prescription Note..\" [(ngModel)]=\"selectedOrder.note\"></textarea>\n                            </div>\n                  \n                \n                        </div>\n                </form>\n                \n                </div>\n                </div>\n                <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update(selectedOrder)\" >Save changes</button>\n                      </div>\n              </div>\n            </div>\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(api) {
        this.api = api;
        this.childAddToggle = true;
        this.xxx = '';
        this.order = 'name';
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrdersComponent.prototype.submit = function (val) {
        $('#exampleModal').modal('hide');
        console.log(this.selectedWorker);
        val.joinDate = new Date().getUTCDate();
        val.totalChildren = 0;
        if (this.selectedWorker) {
            val.workerName = this.selectedWorker.name;
            val.workerId = this.selectedWorker.id;
        }
        console.log(val);
        this.api.addGuardian(val).then(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    OrdersComponent.prototype.delete = function (order) {
        $('#deleteModal').modal('hide');
        this.selectedWorker = {};
        //now removing the vaccine
        this.api.deleteOrder(order.id).then(function (res) {
        }, function (err) { });
    };
    OrdersComponent.prototype.update = function (data) {
        var _this = this;
        $('#editModal').modal('hide');
        this.api.updateOrder(data.id, data).then(function (res) {
            _this.selectedWorker = {};
            _this.selectedGuardian = {};
            _this.api.sendEmail({
                to: data.email,
                subject: "Order updated",
                text: "Hey! Your order status has been updated! Thanks."
            }).subscribe(function (r) {
                console.log("email sent");
            });
        });
    };
    // updateWorker(data){
    //   if(this.selectedWorker){
    //     data.workerName =this.selectedWorker.name;
    //     data.workerId =this.selectedWorker.id;
    //   $('#updateDoctorModal').modal('hide');
    //   this.api.updateGuardian(data.id, data).then(res=>{
    //     this.selectedGuardian ={};
    //     this.selectedWorker ={};
    //   });
    // }else{
    //   console.log('no change');
    //   $('#updateDoctorModal').modal('hide');
    // }
    // }
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        //load children of a certain guardian meaning this guardian 
        this.api.getOrders().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (childrenx) {
            _this.orders = childrenx;
        });
    };
    OrdersComponent.prototype.addChild = function (data) {
        var _this = this;
        data.guardianName = this.selectedGuardian.name;
        data.guardianId = this.selectedGuardian.id;
        console.log(data);
        this.childAddToggle = !this.childAddToggle;
        this.api.addChildren(data).then(function (res) {
            _this.selectedGuardian.totalChildren++;
            _this.api.updateGuardian(_this.selectedGuardian.id, { totalChildren: _this.selectedGuardian.totalChildren }).then(function (resp) {
                console.log('guardian child updated');
            });
        });
    };
    OrdersComponent.prototype.deleteChild = function (id) {
        var _this = this;
        return this.api.deleteChildren(id).then(function (rex) {
            console.log('child removed');
            _this.selectedGuardian.totalChildren--;
            _this.api.updateGuardian(_this.selectedGuardian.id, { totalChildren: _this.selectedGuardian.totalChildren }).then(function (resp) {
                console.log('guardian child updated');
            });
        });
    };
    OrdersComponent.prototype.updateChild = function (data) {
        this.api.updateChildren(data.id, data).then(function (resp) {
            $('#updateChildModal').modal('hide');
        });
    };
    OrdersComponent.prototype.onChange = function (e) {
        var obj = JSON.parse(e);
        this.selectedWorker = { name: obj.name, id: obj.id };
        console.log(this.selectedWorker);
    };
    OrdersComponent.prototype.orderBy = function (value) {
        this.order = value;
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\n    <!-- Navbar -->\n    <app-header></app-header>\n    <!-- End Navbar -->\n    <div class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-primary\">\n                            <h4 class=\"card-title\">Edit Profile</h4>\n                            <p class=\"card-category\">Complete your profile</p>\n                        </div>\n                        <div class=\"card-body\" *ngIf=\"admin\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Company (disabled)</label>\n                                            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"admin.company\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Role</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.role\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Email address</label>\n                                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"admin.email\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Fist Name</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.firstName\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Last Name</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.lastName\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Address</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.address\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">City</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.city\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Country</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.country\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\">Postal Code</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.postalCode\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>About Me</label>\n                                            <div class=\"form-group\">\n                                                <!-- <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label> -->\n                                                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"admin.aboutMe\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <button class=\"btn btn-primary pull-right\" (click)=\"updateProfile()\">Update Profile</button>\n                                <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\"  *ngIf=\"admin\">\n                        <div class=\"card-avatar\">\n                            <a>\n                                <img class=\"img\" src=\"{{admin.photo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmughOkCavHBE5mHZggWG--JGbcXpVMABbdPTG--OK1K6o1v769g'}} \" />\n\n                              \n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.photo\">\n\n                            <h6 class=\"card-category text-gray\">{{admin.role}}</h6>\n                            <h4 class=\"card-title\">{{admin.firstName}} {{admin.lastName}}</h4>\n                            <p class=\"card-description\">\n                               {{admin.aboutMe}}\n                            </p>\n                            <a  class=\"btn btn-primary btn-round\" (click)=\"logOut()\">logout</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <footer class=\"footer \">\n        <div class=\"container-fluid\">\n            <nav class=\"pull-left\">\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://presentation.creative-tim.com\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/license\">\n                            Licenses\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright pull-right\">\n                &copy;\n                <script>\n                    document.write(new Date().getFullYear())\n                </script>, made with love by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n            </div>\n        </div>\n    </footer> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAdminProfile(localStorage.getItem('uid')).subscribe(function (resp) {
            _this.admin = resp;
            console.log(resp);
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.api.updateAdminProfile(this.api.adminId, this.admin).then(function (resp) {
            console.log('admin Updated');
        });
    };
    ProfileComponent.prototype.logOut = function () {
        localStorage.removeItem('uid');
        this.router.navigate(['/landing']);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n  <div class=\"logo\">\n      <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-normal\">\n          Admin Panel\n      </a>\n  </div>\n  <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n          <li class=\"nav-item\"   *ngFor=\"let x of sidebar\" routerLink=\"{{x.url}}\" routerLinkActive=\"active\">\n              <a class=\"nav-link\">\n                  <i class=\"material-icons\">{{x.icon}}</i>\n                  <p>{{x.text}}</p>\n              </a>\n          </li>\n          <li class=\"nav-item\"  (click)=\"logOut()\" >\n            <a class=\"nav-link\">\n                <i class=\"material-icons\">exit_to_app</i>\n                <p>Logout</p>\n            </a>\n        </li>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(api, router) {
        this.api = api;
        this.router = router;
        this.sidebar = [
            { icon: 'dashboard', url: '/dashboard/home', text: 'Dashboard' },
            { icon: 'person', url: '/dashboard/profile', text: 'Profile' },
            { icon: 'local_pharmacy', url: '/dashboard/categories', text: 'Categories' },
            // {icon:'local_hospital', url:'/dashboard/doctors', text:'Doctors'},
            // {icon:'wc', url:'/dashboard/guardians', text:'Guardians'},
            { icon: 'nature_people', url: '/dashboard/items', text: 'Foot Items' },
            { icon: 'nature_people', url: '/dashboard/orders', text: 'Orders' },
            { icon: 'nature_people', url: '/dashboard/notifications', text: 'Notifications' },
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logOut = function () {
        localStorage.removeItem('uid');
        this.router.navigate(['/login']);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
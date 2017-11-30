webpackJsonp([5],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentPage = (function () {
    function AppointmentPage(navCtrl, navParams, service, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.db = db;
        this.isShowProvider = false;
        this.isVerified = true;
        this.isUnverified = false;
        this.providers = [];
        this.phone = '';
        this.searchTitle = 'Search Provider';
        this.slotsA = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
        this.slotsB = ['10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM'];
        this.phone = this.navParams.get('provider');
        this.db.list('users').subscribe(function (data) {
            data.map(function (d) {
                if (d.type !== 'Customer' && d.$key !== localStorage.getItem('userId')) {
                    _this.providers.push(d);
                }
                if (d.phone === _this.phone) {
                    _this.searchTitle = d.name;
                    _this.isVerified = d.verified ? true : false;
                    _this.isUnverified = !d.verified ? true : false;
                }
            });
        });
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    AppointmentPage.prototype.selectProvider = function (data) {
        if (data.verified) {
            this.isVerified = true;
            this.isUnverified = false;
        }
        else {
            this.isVerified = false;
            this.isUnverified = true;
        }
        this.searchTitle = data.name;
        this.isShowProvider = false;
    };
    AppointmentPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/appointment/appointment.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Health Pass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item (click)="isShowProvider = isShowProvider === true ? false : true" class="btn-search" [class.isVerified]="isVerified" [class.isUnverified]="isUnverified">\n    {{searchTitle}}\n    <ion-icon name="ios-arrow-down" *ngIf="!isShowProvider"></ion-icon>\n    <ion-icon name="ios-arrow-up" *ngIf="isShowProvider"></ion-icon>\n  </ion-item>\n  <ion-list *ngIf="isShowProvider" class="search-list">\n    <ion-item *ngFor="let p of providers" (click)="selectProvider(p)">\n      <h4>{{p.name}}</h4>\n      <p>{{p.type}}</p>\n    </ion-item>\n  </ion-list>\n  <div class="field-message" *ngIf="!isShowProvider">\n    <div class="message">\n      <span>{{searchTitle.substr(0, 1).toUpperCase()}}</span>\n      <p>Please choose a time slot.</p>\n    </div>\n  </div>\n  <ion-item class="slot-title">Available Slots</ion-item>\n  <div class="field-buttons">\n    <ion-row>\n      <ion-col>\n        <button ion-button color="dark" block *ngFor="let s of slotsA">{{s}}</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="dark" block *ngFor="let s of slotsB">{{s}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-segment>\n    <ion-segment-button class="home" (click)="goHome()">\n      Home\n    </ion-segment-button>\n    <ion-segment-button class="update">\n      Update\n    </ion-segment-button>\n  </ion-segment>  \n</ion-footer>\n    '/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/appointment/appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicationPage = (function () {
    function MedicationPage(navCtrl, navParams, service, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.db = db;
        this.isShowProvider = false;
        this.isVerified = true;
        this.isUnverified = false;
        this.providers = [];
        this.phone = '';
        this.searchTitle = 'Search Provider';
        this.phone = this.navParams.get('provider');
        this.db.list('users').subscribe(function (data) {
            data.map(function (d) {
                if (d.type !== 'Customer' && d.$key !== localStorage.getItem('userId')) {
                    _this.providers.push(d);
                }
                if (d.phone === _this.phone) {
                    _this.searchTitle = d.name;
                    _this.isVerified = d.verified ? true : false;
                    _this.isUnverified = !d.verified ? true : false;
                }
            });
        });
    }
    MedicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    MedicationPage.prototype.selectProvider = function (data) {
        if (data.verified) {
            this.isVerified = true;
            this.isUnverified = false;
        }
        else {
            this.isVerified = false;
            this.isUnverified = true;
        }
        this.searchTitle = data.name;
        this.isShowProvider = false;
    };
    MedicationPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medication',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/medication/medication.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Health Pass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item (click)="isShowProvider = isShowProvider === true ? false : true" class="btn-search" [class.isVerified]="isVerified" [class.isUnverified]="isUnverified">\n    {{searchTitle}}\n    <ion-icon name="ios-arrow-down" *ngIf="!isShowProvider"></ion-icon>\n    <ion-icon name="ios-arrow-up" *ngIf="isShowProvider"></ion-icon>\n  </ion-item>\n  <ion-list *ngIf="isShowProvider" class="search-list">\n    <ion-item *ngFor="let p of providers" (click)="selectProvider(p)">\n      <h4>{{p.name}}</h4>\n      <p>{{p.type}}</p>\n    </ion-item>\n  </ion-list>\n  <div class="field-message" *ngIf="!isShowProvider">\n    <div class="message">\n      <span>{{searchTitle.substr(0, 1).toUpperCase()}}</span>\n      <p>Please choose a time slot.</p>\n    </div>\n  </div>\n  <ion-item class="slot-title">Medication</ion-item>\n  <div class="field-form">\n    <ion-input type="text" placeholder="Medication Name"></ion-input>\n    <ion-input type="text" placeholder="Time"></ion-input>\n    <ion-input type="text" placeholder="Date"></ion-input>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-segment>\n    <ion-segment-button class="home" (click)="goHome()">\n      Home\n    </ion-segment-button>\n    <ion-segment-button class="update">\n      Update\n    </ion-segment-button>\n  </ion-segment>  \n</ion-footer>\n      '/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/medication/medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MedicationPage);
    return MedicationPage;
}());

//# sourceMappingURL=medication.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, service, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.db = db;
        this.isShowProvider = false;
        this.isVerified = true;
        this.isUnverified = false;
        this.providers = [];
        this.phone = '';
        this.searchTitle = 'Search Provider';
        this.phone = this.navParams.get('provider');
        this.db.list('users').subscribe(function (data) {
            data.map(function (d) {
                if (d.type !== 'Customer' && d.$key !== localStorage.getItem('userId')) {
                    _this.providers.push(d);
                }
                if (d.phone === _this.phone) {
                    _this.searchTitle = d.name;
                    _this.isVerified = d.verified ? true : false;
                    _this.isUnverified = !d.verified ? true : false;
                }
            });
        });
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    PaymentPage.prototype.selectProvider = function (data) {
        if (data.verified) {
            this.isVerified = true;
            this.isUnverified = false;
        }
        else {
            this.isVerified = false;
            this.isUnverified = true;
        }
        this.searchTitle = data.name;
        this.isShowProvider = false;
    };
    PaymentPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/payment/payment.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Health Pass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item (click)="isShowProvider = isShowProvider === true ? false : true" class="btn-search" [class.isVerified]="isVerified" [class.isUnverified]="isUnverified">\n    {{searchTitle}}\n    <ion-icon name="ios-arrow-down" *ngIf="!isShowProvider"></ion-icon>\n    <ion-icon name="ios-arrow-up" *ngIf="isShowProvider"></ion-icon>\n  </ion-item>\n  <ion-list *ngIf="isShowProvider" class="search-list">\n    <ion-item *ngFor="let p of providers" (click)="selectProvider(p)">\n      <h4>{{p.name}}</h4>\n      <p>{{p.type}}</p>\n    </ion-item>\n  </ion-list>\n  <div class="field-message" *ngIf="!isShowProvider">\n    <div class="message">\n      <span>{{searchTitle.substr(0, 1).toUpperCase()}}</span>\n      <p>Hi Deepti,<br>Your insurance is not verified,<br>please verify.</p>\n    </div>\n  </div>\n  <div class="field-form">\n    <ion-input type="text" placeholder="Name"></ion-input>\n    <ion-input type="text" placeholder="Sample ID"></ion-input>\n    <ion-input type="text" placeholder="Group"></ion-input>\n    <ion-input type="text" placeholder="Phone Number"></ion-input>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-segment>\n    <ion-segment-button class="home" (click)="goHome()">\n      Home\n    </ion-segment-button>\n    <ion-segment-button class="update">\n      Update\n    </ion-segment-button>\n  </ion-segment>  \n</ion-footer>\n      '/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.phone = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.phone != '') {
            this.service.login(this.phone).then(function (res) {
                localStorage.setItem('userId', res.id);
                localStorage.setItem('phone', _this.phone);
                if (res.registered) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
                }
            });
        }
    };
    LoginPage.prototype.fbLogin = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Phone Number *</ion-label>\n      <ion-input type="number" [(ngModel)]="phone"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="login()">Register / Login</button>\n  </div>\n  <p>Or</p>\n  <div padding>\n    <button ion-button block (click)="fbLogin()">FaceBook Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.userTypes = ['Customer', 'Provider', 'Doctor'];
        this.userId = '';
        this.name = '';
        this.type = 'Customer';
        this.userId = localStorage.getItem('userId');
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.updateUser = function () {
        var _this = this;
        this.service.updateUser(this.userId, { type: this.type, name: this.name }).then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>User Type *</ion-label>\n      <ion-select [(ngModel)]="type">\n        <ion-option *ngFor="let type of userTypes">{{type}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Full Name *</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="updateUser()">Go Home</button>\n  </div>\n</ion-content>\n  '/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appointment/appointment.module": [
		430,
		4
	],
	"../pages/login/login.module": [
		433,
		3
	],
	"../pages/medication/medication.module": [
		431,
		2
	],
	"../pages/payment/payment.module": [
		432,
		1
	],
	"../pages/signup/signup.module": [
		434,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_medication_medication__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_payment_payment__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    apiKey: "AIzaSyAYrfM7rAx-dZovkKtZdQS4KsPBziKle2M",
    authDomain: "healthpass-2fdf1.firebaseapp.com",
    databaseURL: "https://healthpass-2fdf1.firebaseio.com",
    projectId: "healthpass-2fdf1",
    storageBucket: "healthpass-2fdf1.appspot.com",
    messagingSenderId: "329443566792"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["b" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication/medication.module#MedicationPageModule', name: 'MedicationPage', segment: 'medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["b" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_service__["a" /* Service */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__medication_medication__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_payment__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, service, db, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.db = db;
        this.modal = modal;
        this.isShowProvider = false;
        this.isVerified = false;
        this.isUnverified = false;
        this.providers = [];
        this.provider = '';
        this.message = '';
        this.messages = [];
        this.roomId = '';
        this.searchTitle = 'Search Provider';
        this.userId = '';
        this.username = '';
        this.userId = localStorage.getItem('userId');
        this.service.getUserName(this.userId).then(function (res) {
            _this.username = res;
        });
        this.db.list('users').subscribe(function (data) {
            data.map(function (d) {
                if (d.$key !== _this.userId) {
                    _this.providers.push(d);
                }
            });
        });
        this.modalPage = this.modal.create(ModalPage);
        console.log(localStorage.getItem('phone'));
    }
    HomePage.prototype.selectProvider = function (data) {
        var _this = this;
        if (data.verified) {
            this.isVerified = true;
            this.isUnverified = false;
        }
        else {
            this.isVerified = false;
            this.isUnverified = true;
        }
        this.provider = data.phone;
        this.searchTitle = data.name;
        this.isShowProvider = false;
        this.service.getRoomId(this.userId, this.provider, localStorage.getItem('phone')).then(function (res) {
            _this.roomId = res;
            _this.db.list('messages/' + _this.roomId + '/messages').subscribe(function (data) {
                _this.messages = data;
            });
        });
    };
    HomePage.prototype.sendMessage = function () {
        var _this = this;
        var time = new Date().getTime();
        if (this.message != '') {
            this.service.sendMessage(this.roomId, { userId: this.userId, message: this.message, updatedAt: time }).then(function (res) {
                console.log(res);
                _this.message = '';
            });
        }
    };
    HomePage.prototype.goAppointment = function () {
        if (this.provider == '') {
            this.modalPage.present();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__appointment_appointment__["a" /* AppointmentPage */], { provider: this.provider });
        }
    };
    HomePage.prototype.goPayment = function () {
        if (this.provider == '') {
            this.modalPage.present();
        }
        else {
            if (this.isVerified) {
            }
            else if (this.isUnverified) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__payment_payment__["a" /* PaymentPage */], { provider: this.provider });
            }
        }
    };
    HomePage.prototype.goMedication = function () {
        if (this.provider == '') {
            this.modalPage.present();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__medication_medication__["a" /* MedicationPage */], { provider: this.provider });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Health Pass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item (click)="isShowProvider = isShowProvider === true ? false : true" class="btn-search" [class.isVerified]="isVerified" [class.isUnverified]="isUnverified">\n    {{searchTitle}}\n    <ion-icon name="ios-arrow-down" *ngIf="!isShowProvider"></ion-icon>\n    <ion-icon name="ios-arrow-up" *ngIf="isShowProvider"></ion-icon>\n  </ion-item>\n  <ion-list *ngIf="isShowProvider" class="search-list">\n    <ion-item *ngFor="let p of providers" (click)="selectProvider(p)">\n      <h4>{{p.name}}</h4>\n      <p>{{p.type}}</p>\n    </ion-item>\n  </ion-list>\n  <div class="field-message" *ngIf="!isShowProvider">\n    <div class="message" [class.sender]="m.userId === userId" *ngFor="let m of messages">\n      <span *ngIf="m.userId !== userId">{{searchTitle.substr(0, 1).toUpperCase()}}</span>\n      <p>{{m.message}}</p>\n      <span *ngIf="m.userId === userId">{{username.substr(0, 1).toUpperCase()}}</span>\n    </div>\n  </div>\n  <div class="field-send">\n    <div class="input">\n      <input type="text" placeholder="Ask here..." [(ngModel)]="message" [disabled]="provider == \'\'" (keyup.enter)="sendMessage()">        \n    </div>\n    <button ion-button color="dark" (click)="sendMessage()">SEND</button>\n  </div>\n  <div class="field-buttons">\n    <ion-row>\n      <ion-col>\n        <button ion-button color="dark" block (click)="goAppointment()">Appointment</button>\n        <button ion-button color="dark" block (click)="goPayment()">Payment</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="dark" block (click)="goMedication()">Medication</button>\n        <button ion-button color="dark" block>Symptom</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-segment>\n    <ion-segment-button class="home">\n      Home\n    </ion-segment-button>\n    <ion-segment-button class="recents">\n      Recents\n    </ion-segment-button>\n  </ion-segment>  \n</ion-footer>\n  '/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

var ModalPage = (function () {
    function ModalPage(view) {
        this.view = view;
    }
    ModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/pages/home/modal.html"*/'<ion-content padding>\n    <p>Please select a provider or a doctor.</p>\n    <button ion-button color="dark" block (click)="closeModal()">OK</button>\n</ion-content>'/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/pages/home/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Service = (function () {
    function Service(http, db) {
        this.http = http;
        this.db = db;
    }
    Service.prototype.login = function (phone) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var list = _this.db.list('users').subscribe(function (data) {
                var isExistUser = false;
                data.map(function (d) {
                    if (d.phone == phone) {
                        isExistUser = true;
                        resolve({ id: d.$key, registered: true });
                    }
                });
                if (!isExistUser) {
                    resolve({ id: _this.db.list('users').push({ phone: phone, verified: false }).key, registered: false });
                }
            });
        });
    };
    Service.prototype.updateUser = function (userId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.list('users').update(userId, { type: data.type, name: data.name }).then(function (res) {
                resolve(res);
            });
        });
    };
    Service.prototype.sendMessage = function (roomId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.list('messages/' + roomId + '/messages').push(data).then(function (res) {
                resolve(res);
            });
        });
    };
    Service.prototype.getRoomId = function (userId, phone, myPhone) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isExistRoom = false;
            var list = _this.db.list('messages').subscribe(function (data) {
                data.map(function (d) {
                    if (d.room.indexOf(phone) >= 0 && d.room.indexOf(myPhone) >= 0) {
                        isExistRoom = true;
                        resolve(d.$key);
                    }
                });
                if (!isExistRoom) {
                    resolve(_this.db.list('messages').push({ room: phone + '-' + myPhone, userId: userId }).key);
                }
            });
        });
    };
    Service.prototype.getProviders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.list('users').subscribe(function (data) {
                var providers = [];
                data.map(function (d) {
                    if (d.type !== 'Customer') {
                        providers.push(d);
                    }
                });
                resolve(providers);
            });
        });
    };
    Service.prototype.getUserName = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.list('users').subscribe(function (data) {
                data.map(function (d) {
                    if (d.$key == userId) {
                        resolve(d.name);
                    }
                });
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/data/git-projects/healthpass/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/data/git-projects/healthpass/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map
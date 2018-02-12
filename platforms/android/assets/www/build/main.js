webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequrityQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SequrityQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SequrityQuestionsPage = (function () {
    function SequrityQuestionsPage(navCtrl, navParams, frmBldr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.frmBldr = frmBldr;
        this.qForm = frmBldr.group({
            Option1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Option2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Option3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SequrityQuestionsPage.prototype.onSubmit = function (value) {
        //  debugger;
        if (this.qForm.valid) {
            alert(value.Option1);
            alert('success');
        }
        else {
            alert(value.Option1);
            if (value.Option1 == 'null') {
                alert('select a question1');
            }
            else
                alert('select a question');
            //this.checkValidation = true;
        }
    };
    // question1Select(){
    //       alert(value.Option1);
    // }
    SequrityQuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SequrityQuestionsPage');
    };
    SequrityQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sequrity-questions',template:/*ion-inline-start:"D:\Projects\Ionic\New folder\OrciCare\src\pages\authentication\sequrity-questions\sequrity-questions.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Sequrity Questions</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contentBackground">\n  <form >\n    <ion-list>\n\n        <ion-item class="rounded">\n          <ion-label floating>First Name</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item class="rounded">\n          <ion-label floating>Last Name</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n\n        <ion-item class="rounded">\n          <ion-label floating>Middle Initial</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n\n        <ion-item class="rounded">\n          <ion-label floating>Gender</ion-label>\n          <ion-select>\n            <ion-option >Male</ion-option>\n            <ion-option >Female</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item>\n          <ion-label >Relationship</ion-label>\n          <ion-select>\n            <ion-option >Daughter</ion-option>\n            <ion-option >Son</ion-option>\n            <ion-option >Brother</ion-option>\n            <ion-option >sister</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item class="rounded">\n          <ion-label floating>DOB</ion-label>\n          <ion-datetime ></ion-datetime>\n        </ion-item>\n\n\n      </ion-list>\n      <div text-center>\n      <button type="submit" ion-button round>Submit</button>\n      </div>\n      </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Ionic\New folder\OrciCare\src\pages\authentication\sequrity-questions\sequrity-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SequrityQuestionsPage);
    return SequrityQuestionsPage;
}());

//# sourceMappingURL=sequrity-questions.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemographicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_TextValidations__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemographicsPage = (function () {
    //firstNameError:any;
    // @ViewChild(LoginPage) login;
    function DemographicsPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.errorFirstName = '';
        this.submitAttempt = false;
        this.DemographForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__validators_TextValidations__["a" /* TextValidations */].checkFirstName],
        });
    }
    DemographicsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemographicsPage');
        //this.login.open();
    };
    DemographicsPage.prototype.submit = function () {
        debugger;
        this.submitAttempt = true;
        if (this.DemographForm.valid) {
        }
        else {
            console.log(this.DemographForm.controls.firstName.errors.errorString);
            this.errorFirstName = this.DemographForm.controls.firstName.errors.errorString;
            //    this.DemographForm.value.firstNameError='hi hello';
        }
    };
    DemographicsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demographics',template:/*ion-inline-start:"D:\Projects\Ionic\New folder\OrciCare\src\pages\profile\demographics\add\demographics.html"*/'<!--\n  Generated template for the DemographicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Demographics Page</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ContentBackground" padding>\n  <form class="ContentClass" [formGroup]="DemographForm">\n      <div style="text-align:center">\n              <ion-list class="roundCorners" >\n                  <ion-item>\n                      <ion-label floating>First Name</ion-label>\n                      <ion-input type="text" formControlName="firstName"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="!DemographForm.controls.firstName.valid && (DemographForm.controls.firstName.dirty || submitAttempt)">\n                        <p>{{errorFirstName}}</p>\n                        <!-- <p>Please enter a valid First Name.</p> -->\n                    </ion-item>\n                <ion-item>\n                      <ion-label floating>Last Name</ion-label>\n                      <ion-input type="text" ></ion-input>\n                  </ion-item>\n                  <ion-item>\n                        <ion-label floating>Middle Name</ion-label>\n                        <ion-input type="text" ></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>Date of birth</ion-label>\n                      <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" ></ion-datetime>\n                    </ion-item>\n\n<!-- <ion-list radio-group [(ngModel)]="genders"> -->\n <ion-list radio-group no-lines>\n  <ion-list-header>\nGender\n  </ion-list-header>\n  <ion-item>\n    <ion-label>Male</ion-label>\n    <ion-radio value="M"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Female</ion-label>\n    <ion-radio value="F"></ion-radio>\n  </ion-item>\n</ion-list>\n                    <ion-item>\n                          <ion-label floating>SSN</ion-label>\n                          <ion-input type="text" ></ion-input>\n                      </ion-item>\n                      <ion-item>\n                            <ion-label floating>Occupation</ion-label>\n                            <ion-input type="text" ></ion-input>\n                        </ion-item>\n\n                        <ion-list radio-group no-lines>\n                         <ion-list-header>\n                       Smoking\n                         </ion-list-header>\n                         <ion-item>\n                           <ion-label>Yes</ion-label>\n                           <ion-radio value="Y"></ion-radio>\n                         </ion-item>\n                         <ion-item>\n                           <ion-label>No</ion-label>\n                           <ion-radio value="N"></ion-radio>\n                         </ion-item>\n                       </ion-list>\n\n                       <ion-list radio-group no-lines>\n                        <ion-list-header>\n                      Pets\n                        </ion-list-header>\n                        <ion-item>\n                          <ion-label>Yes</ion-label>\n                          <ion-radio value="Y"></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio value="N"></ion-radio>\n                        </ion-item>\n                      </ion-list>\n\n\n                        <ion-item>\n                              <ion-label floating>Height</ion-label>\n                              <ion-input type="text" ></ion-input>\n                          </ion-item>\n                          <ion-item>\n                                <ion-label floating>Weight</ion-label>\n                                <ion-input type="text" ></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-select interface="popover" >\n                                    <ion-option selected disabled>Marital Status</ion-option>\n                                    <ion-option value="Single">Single</ion-option>\n                                    <ion-option value="Married">Married</ion-option>\n                                    <ion-option value="Separated">Separated</ion-option>\n                                    <ion-option value="Divorced">Divorced</ion-option>\n                                    <ion-option value="Widowed">Widowed</ion-option>\n                                </ion-select>\n                            </ion-item>\n                            <ion-item>\n                                  <ion-label floating>Spouse First Name</ion-label>\n                                  <ion-input type="text" ></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                    <ion-label floating>Spouse Last Name</ion-label>\n                                    <ion-input type="text" ></ion-input>\n                                </ion-item>\n\n                            <ion-list radio-group no-lines>\n                             <ion-list-header>\n                           Spouse Gender\n                             </ion-list-header>\n                             <ion-item>\n                               <ion-label>Male</ion-label>\n                               <ion-radio value="M"></ion-radio>\n                             </ion-item>\n                             <ion-item>\n                               <ion-label>Female</ion-label>\n                               <ion-radio value="F"></ion-radio>\n                             </ion-item>\n                           </ion-list>\n                           <ion-list radio-group no-lines>\n                            <ion-list-header>\n                          Alcohol\n                            </ion-list-header>\n                            <ion-item>\n                              <ion-label>Yes</ion-label>\n                              <ion-radio value="Y"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                              <ion-label>No</ion-label>\n                              <ion-radio value="N"></ion-radio>\n                            </ion-item>\n                          </ion-list>\n\n                            <ion-item>\n                                  <ion-label floating>Place of birth</ion-label>\n                                  <ion-input type="text" ></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                    <ion-label floating>Ethinicity</ion-label>\n                                    <ion-input type="text" ></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                      <ion-label floating>Race</ion-label>\n                                      <ion-input type="text" ></ion-input>\n                                  </ion-item>\n                                  <ion-item>\n                                        <ion-label floating>Language(Spoken)</ion-label>\n                                        <ion-input type="text" ></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                          <ion-label floating>Language(Written)</ion-label>\n                                          <ion-input type="text" ></ion-input>\n                                      </ion-item>\n\n                  <ion-item>\n                      <button class="button_style" type="submit" (click)="submit()">Submit</button>\n                  </ion-item>\n              </ion-list>\n          </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Ionic\New folder\OrciCare\src\pages\profile\demographics\add\demographics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], DemographicsPage);
    return DemographicsPage;
}());

//# sourceMappingURL=demographics.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/authentication/login/login.module": [
		283,
		3
	],
	"../pages/authentication/reset-password/reset-password.module": [
		284,
		2
	],
	"../pages/authentication/sequrity-questions/sequrity-questions.module": [
		285,
		1
	],
	"../pages/profile/demographics/add/demographics.module": [
		286,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MyValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MyValidationProvider = (function () {
    function MyValidationProvider(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        console.log('Hello MyValidationProvider Provider');
    }
    MyValidationProvider.prototype.myValidation = function (authForm) {
        //  debugger;
        authForm = this.formBuilder.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.myPattern), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])]
        });
    };
    MyValidationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], MyValidationProvider);
    return MyValidationProvider;
}());

//# sourceMappingURL=my-validation.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"D:\Projects\Ionic\New folder\OrciCare\src\pages\authentication\reset-password\reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ResetPasswordPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Ionic\New folder\OrciCare\src\pages\authentication\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_authentication_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_authentication_reset_password_reset_password__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_authentication_sequrity_questions_sequrity_questions__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_demographics_add_demographics__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_my_validation_my_validation__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_authentication_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_authentication_sequrity_questions_sequrity_questions__["a" /* SequrityQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_authentication_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_demographics_add_demographics__["a" /* DemographicsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { navExitApp: false }, {
                    links: [
                        { loadChildren: '../pages/authentication/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/sequrity-questions/sequrity-questions.module#SequrityQuestionsPageModule', name: 'SequrityQuestionsPage', segment: 'sequrity-questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/demographics/add/demographics.module#DemographicsPageModule', name: 'DemographicsPage', segment: 'demographics', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_authentication_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_authentication_sequrity_questions_sequrity_questions__["a" /* SequrityQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_authentication_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_demographics_add_demographics__["a" /* DemographicsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_my_validation_my_validation__["a" /* MyValidationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextValidations; });
var TextValidations = (function () {
    function TextValidations() {
    }
    TextValidations.checkFirstName = function (control) {
        debugger;
        if (control.value == "") {
            return { 'errorString': 'Empty' };
        }
        else if (control.value.length < 3) {
            return { 'errorString': 'should be more than 3' };
        }
        else {
            return null;
        }
    };
    return TextValidations;
}());

//# sourceMappingURL=TextValidations.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_authentication_login_login__ = __webpack_require__(99);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_authentication_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projects\Ionic\New folder\OrciCare\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Projects\Ionic\New folder\OrciCare\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Projects\Ionic\New folder\OrciCare\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Ionic\New folder\OrciCare\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequrity_questions_sequrity_questions__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_demographics_add_demographics__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_my_validation_my_validation__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Validators } from '@angular/forms/src/validators';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, myProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.myProv = myProv;
        this.checkValidation = false;
        this.myValidation();
    }
    LoginPage.prototype.myValidation = function () {
        //debugger;
        //  this.myProv.myValidation(this.authForm);
        this.authForm = this.formBuilder.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(50)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])]
        });
        /* this.authForm = this.formBuilder.group({
         userName: [null, Validators.required],
         password: [null,Validators.required]
       }); */
    };
    LoginPage.prototype.onSubmit = function (value) {
        //alert();
        //debugger;
        this.myProv.myValidation(this.authForm);
        if (this.authForm.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_demographics_add_demographics__["a" /* DemographicsPage */]);
        }
        else {
            this.checkValidation = true;
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openForgotPassword = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sequrity_questions_sequrity_questions__["a" /* SequrityQuestionsPage */]);
    };
    LoginPage.prototype.open = function () {
        alert("Hi");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Projects\Ionic\New folder\OrciCare\src\pages\authentication\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ContentBackground" padding>\n\n    <form class="ContentClass" [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n        <div style="text-align:center">\n            <div class="roundCorners">\n                <ion-list class="roundCorners">\n\n                    <ion-item [ngClass]="{\'error-border\':authForm.controls.userName.valid && CheckValidation}">\n                        <ion-label floating>User Name</ion-label>\n                        <ion-input type="text" formControlName="userName"></ion-input>\n\n                    </ion-item>\n                    <ion-item *ngIf="authForm.controls.userName.hasError(\'required\') && checkValidation">\n                        <p class="errorText">Sorry, field userName is required!</p>\n                    </ion-item>\n                    <ion-item *ngIf="authForm.controls.userName.hasError(\'pattern\') && checkValidation">\n                        <p class="errorText">Sorry, only small and capital letters are allowed!</p>\n                    </ion-item>\n\n                    <ion-item *ngIf="authForm.controls.userName.hasError(\'minlength\') && checkValidation">\n                        <p class="errorText">Sorry, minimum userName length is 5!</p>\n                    </ion-item>\n                    <ion-item *ngIf="authForm.controls.userName.hasError(\'maxlength\') && checkValidation">\n                        <p class="errorText">Sorry, maximum userName length is 50!</p>\n                    </ion-item>\n                    <ion-item [ngClass]="{\'error-border\':authForm.controls.password.valid && checkValidation}">\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && checkValidation">\n                        <p class="errorText">Sorry, field password is required!</p>\n                    </ion-item>\n                    <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && checkValidation">\n                        <p class="errorText">Sorry, minimum password length is 8!</p>\n                    </ion-item>\n                    <ion-item *ngIf="authForm.controls.password.hasError(\'maxlength\') && checkValidation">\n                        <p class="errorText">Sorry, maximum password length is 30!</p>\n                    </ion-item>\n                    <ion-item>\n\n                        <button class="button_style" type="submit">Log In</button>\n                    </ion-item>\n                </ion-list>\n\n                <div>\n                    <div>\n                        <button class="clear_button_style">\n                                Not Registered? Sign up\n                                </button>\n\n                        <button id="btn_signUp" class="clear_button_style" (click)="openForgotPassword()">\n                                Forgot password?\n                                </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</ion-content>'/*ion-inline-end:"D:\Projects\Ionic\New folder\OrciCare\src\pages\authentication\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_my_validation_my_validation__["a" /* MyValidationProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
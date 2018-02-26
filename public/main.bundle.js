webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = " <app-navbar></app-navbar> \n <br>\n <br>\n <br>\n <br>\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_my_form_my_form_component__ = __webpack_require__("../../../../../src/app/components/my-form/my-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_square_page_square_page_component__ = __webpack_require__("../../../../../src/app/components/square-page/square-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_flow_flow_component__ = __webpack_require__("../../../../../src/app/components/flow/flow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_global_data_service__ = __webpack_require__("../../../../../src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_draw_field_draw_field_component__ = __webpack_require__("../../../../../src/app/components/draw-field/draw-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_gender_gender_component__ = __webpack_require__("../../../../../src/app/components/gender/gender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_list_add_list_component__ = __webpack_require__("../../../../../src/app/components/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_add_list_item_list_item_list_component__ = __webpack_require__("../../../../../src/app/components/add-list/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_super_button_super_button_component__ = __webpack_require__("../../../../../src/app/components/super-button/super-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_react_form_react_form_component__ = __webpack_require__("../../../../../src/app/components/react-form/react-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_mycolor_directive__ = __webpack_require__("../../../../../src/app/directives/mycolor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_rury_rury_component__ = __webpack_require__("../../../../../src/app/components/rury/rury.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_rura_pipe__ = __webpack_require__("../../../../../src/app/pipes/rura.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_hardware_service__ = __webpack_require__("../../../../../src/app/services/hardware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_hard2_hard2_component__ = __webpack_require__("../../../../../src/app/components/hard2/hard2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_hard2_service__ = __webpack_require__("../../../../../src/app/services/hard2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_exchange_exchange_component__ = __webpack_require__("../../../../../src/app/components/exchange/exchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_local_local_component__ = __webpack_require__("../../../../../src/app/components/local/local.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_siemens_siemens_component__ = __webpack_require__("../../../../../src/app/components/siemens/siemens.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { Injectable } from '@angular/core';






























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'myForm', component: __WEBPACK_IMPORTED_MODULE_9__components_my_form_my_form_component__["a" /* MyFormComponent */] },
    { path: 'squarePage', component: __WEBPACK_IMPORTED_MODULE_10__components_square_page_square_page_component__["a" /* SquarePageComponent */] },
    { path: 'flow', component: __WEBPACK_IMPORTED_MODULE_11__components_flow_flow_component__["a" /* FlowComponent */] },
    { path: 'draw', component: __WEBPACK_IMPORTED_MODULE_13__components_draw_field_draw_field_component__["a" /* DrawFieldComponent */] },
    { path: 'gender', component: __WEBPACK_IMPORTED_MODULE_15__components_gender_gender_component__["a" /* GenderComponent */] },
    { path: 'lista', component: __WEBPACK_IMPORTED_MODULE_16__components_add_list_add_list_component__["a" /* AddListComponent */] },
    { path: 'reactForm', component: __WEBPACK_IMPORTED_MODULE_19__components_react_form_react_form_component__["a" /* ReactFormComponent */] },
    { path: 'rura', component: __WEBPACK_IMPORTED_MODULE_22__components_rury_rury_component__["a" /* RuryComponent */] },
    { path: 'hard2', component: __WEBPACK_IMPORTED_MODULE_25__components_hard2_hard2_component__["a" /* Hard2Component */] },
    { path: 'wymiana', component: __WEBPACK_IMPORTED_MODULE_28__components_exchange_exchange_component__["a" /* ExchangeComponent */] },
    { path: 'local', component: __WEBPACK_IMPORTED_MODULE_29__components_local_local_component__["a" /* LocalComponent */] },
    { path: 'siemens', component: __WEBPACK_IMPORTED_MODULE_31__components_siemens_siemens_component__["a" /* SiemensComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_my_form_my_form_component__["a" /* MyFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_square_page_square_page_component__["a" /* SquarePageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_flow_flow_component__["a" /* FlowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_draw_field_draw_field_component__["a" /* DrawFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_gender_gender_component__["a" /* GenderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_add_list_add_list_component__["a" /* AddListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_add_list_item_list_item_list_component__["a" /* ItemListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_super_button_super_button_component__["a" /* SuperButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_react_form_react_form_component__["a" /* ReactFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__directives_mycolor_directive__["a" /* MycolorDirective */],
            __WEBPACK_IMPORTED_MODULE_22__components_rury_rury_component__["a" /* RuryComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_rura_pipe__["a" /* RuraPipe */],
            __WEBPACK_IMPORTED_MODULE_25__components_hard2_hard2_component__["a" /* Hard2Component */],
            __WEBPACK_IMPORTED_MODULE_28__components_exchange_exchange_component__["a" /* ExchangeComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_local_local_component__["a" /* LocalComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_siemens_siemens_component__["a" /* SiemensComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_global_data_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_20__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_24__services_hardware_service__["a" /* HardwareService */],
            __WEBPACK_IMPORTED_MODULE_26__services_hard2_service__["a" /* Hard2Service */],
            __WEBPACK_IMPORTED_MODULE_27__services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_30__services_local_service__["a" /* LocalService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"jumbotron\">\n        <h1>This About Page</h1>\n        <p class=\"lead\">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>\n      </div>\n      <button class=\"btn btn-primary\">pies</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row  justify-content-center\">\n  <div class=\"card col-sm-3\" style=\"background:white\">\n      <div class=\"card-body py-4 \">\n          <div class=\"row justify-content-center\">\n              <div class=\"px-1\"><button class=\"btn-round-green\"></button></div>   \n              <div class=\"px-1\"><button class=\"btn-round-red\"></button></div>\n            </div>\n          \n      </div>\n  </div>\n</div>\n  <hr>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"formGroupExampleInput\">Nazwa elementu</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"podaj nazwe\" [(ngModel)]=\"itemName\" name=\"itemName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"formGroupExampleInput2\">Cena elementu</label>\n      <input type=\"number\" class=\"form-control\" placeholder=\"podaj cene\" [(ngModel)]=\"itemValue\" name=\"itemValue\">\n    </div>\n    <button class=\"button btn btn-primary\" (click)=\"addElement()\">Dodaj element</button>\n  </form>\n  <hr>\n\n  <br>\n  <div class=\"form-control\">\n    <div *ngFor=\"let element of daneElementu;let i=index\">\n      <app-item-list [elemData]=\"element\" [fieldIndex]=\"i\" (indexNumber)=\"takeIndex($event)\"></app-item-list>\n      <hr>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-list/add-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddListComponent = (function () {
    function AddListComponent() {
        //elementData:elementData={name:'',value:0};
        this.daneElementu = [{ name: 'kot', value: 9 }];
    }
    AddListComponent.prototype.ngOnInit = function () {
    };
    AddListComponent.prototype.addElement = function () {
        if (this.itemName === undefined) {
            return;
        }
        if (this.itemValue < 0) {
            return;
        }
        else {
            this.daneElementu.unshift({ name: this.itemName, value: this.itemValue });
        }
        //  console.log(this.itemName,this.itemValue);
    };
    AddListComponent.prototype.takeIndex = function (event) {
        this.daneElementu.splice(event, 1);
        console.log(event);
    };
    AddListComponent.prototype.superPress = function () {
        console.log('start');
    };
    return AddListComponent;
}());
AddListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-list',
        template: __webpack_require__("../../../../../src/app/components/add-list/add-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-list/add-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AddListComponent);

//# sourceMappingURL=add-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-list/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngStyle]=\"bgColor\">\n <div class=\"row \">\n    <div class=\"card-block\"><img class=\"img img-fluid rounded\" [hidden]=\"itsHidden\" alt=\"Responsive image\" [src]=\"imageUrl\"></div>\n    <div class=\"card-block \">\n        <!-- <h1>{{index}}</h1> -->\n        <h5 class=\" text-white\">Nazwa przedmiotu to {{elemData.name}}</h5>\n        <h5 class=\" text-white\">Cena Przedmiotu to {{elemData.value}}</h5>\n      </div>\n    <div class=\"card-block text-right\">\n      <button class=\"btn btn-warning align-text-bottom\" (click)=\"deleteCard()\">Delete</button>\n    </div>\n   </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/add-list/item-list/item-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-list/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_elementData__ = __webpack_require__("../../../../../src/app/interfaces/elementData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_elementData___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_elementData__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemListComponent = (function () {
    function ItemListComponent() {
        this.bgColor = {
            background: 'white'
        };
        this.imageUrl = 'http://lorempixel.com/400/200';
        this.indexNumber = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var myColor;
        var myC = ['0'];
        for (var i = 0; i < 6; i++) {
            myC[i] = Math.floor((Math.random() * 13 + 2)).toString(16).toUpperCase();
        }
        myColor = myC.join('').toString();
        myColor = "#" + myColor;
        console.log(myColor);
        this.bgColor.background = myColor;
    };
    ItemListComponent.prototype.deleteCard = function () {
        this.indexNumber.emit(this.index);
        console.log(this.indexNumber);
    };
    return ItemListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_elementData__["elementData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_elementData__["elementData"]) === "function" && _a || Object)
], ItemListComponent.prototype, "elemData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('fieldIndex'),
    __metadata("design:type", Number)
], ItemListComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ItemListComponent.prototype, "indexNumber", void 0);
ItemListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-item-list',
        template: __webpack_require__("../../../../../src/app/components/add-list/item-list/item-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-list/item-list/item-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ItemListComponent);

var _a, _b;
//# sourceMappingURL=item-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/draw-field/draw-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <br>\n  <div class=\"container\">\n    <table class=\"table table-striped table-hover borded\">\n      <thead class=\"bg-primary rounded text-white \" >\n        <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of itemList\">\n          <td>{{item.id}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.price}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"container\">\n  <div>{{home}}</div>\n<div class=\"card\">\n  <ul class=\"list-group \">\n     <li class=\"list-group-item bg-primary text-white\">\n      <div class=\"col-sm-2\">Id</div>\n      <div class=\"col-sm-8\">Name</div>\n      <div class=\"col-sm-2\">Price</div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let item of itemList\">\n      <div class=\"col-sm-2\">{{item.id}}</div>\n      <div class=\"col-sm-8\">{{item.name}}</div>\n      <div class=\"col-sm-2\">{{item.price}}</div>\n    </li>\n  </ul>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/draw-field/draw-field.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/draw-field/draw-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs';
var DrawFieldComponent = (function () {
    function DrawFieldComponent(httpClient) {
        this.httpClient = httpClient;
    }
    DrawFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get('../../../assets/files/people.json')
            .subscribe(function (res) {
            _this.itemList = res['wynik'];
            console.log(_this.itemList);
            //  console.log(this.itemList[0].name);
        });
    };
    return DrawFieldComponent;
}());
DrawFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-draw-field',
        template: __webpack_require__("../../../../../src/app/components/draw-field/draw-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/draw-field/draw-field.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DrawFieldComponent);

var _a;
//# sourceMappingURL=draw-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/exchange/exchange.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Push</button>\n\n  <div *ngFor=\"let smallData of dataArray\">\n      <div class=\"row\">\n        <p class=\"col-sm-2\">Name is: {{smallData.name }}</p>\n        <p class=\"col-sm-2\">Age is: {{smallData.age}}</p>\n        \n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/exchange/exchange.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/exchange/exchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExchangeComponent = (function () {
    function ExchangeComponent(serverService) {
        this.serverService = serverService;
        this.dataArray = [];
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getData().subscribe(function (value) {
            _this.dataArray = value;
            console.log(value);
        });
        this.serverService.coutning().subscribe(function (value) { return console.log(value); });
    };
    ExchangeComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.serverService.pushData(data).subscribe(function (value) {
            _this.val = value.json();
            for (var data_1 in _this.val) {
                _this.dataArray.push(_this.val[data_1]);
            }
        });
    };
    return ExchangeComponent;
}());
ExchangeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exchange',
        template: __webpack_require__("../../../../../src/app/components/exchange/exchange.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/exchange/exchange.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object])
], ExchangeComponent);

var _a;
//# sourceMappingURL=exchange.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/flow/flow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\n  <h1>\n    The Firstname is {{firstName}} and the Lastname is {{lastName}}\n  </h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/flow/flow.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flow/flow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_data_service__ = __webpack_require__("../../../../../src/app/services/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlowComponent = (function () {
    function FlowComponent(globaldataService) {
        this.globaldataService = globaldataService;
        this.peakMe();
    }
    FlowComponent.prototype.ngOnInit = function () {
    };
    FlowComponent.prototype.peakMe = function () {
        this.firstName = this.globaldataService.map.get('firstName');
        this.lastName = this.globaldataService.map.get('lastName');
    };
    return FlowComponent;
}());
FlowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flow',
        template: __webpack_require__("../../../../../src/app/components/flow/flow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/flow/flow.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_data_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_data_service__["a" /* GlobalDataService */]) === "function" && _a || Object])
], FlowComponent);

var _a;
//# sourceMappingURL=flow.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gender/gender.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  gender works again and again and now and new!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/gender/gender.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gender/gender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenderComponent = (function () {
    function GenderComponent(httpClient) {
        this.httpClient = httpClient;
        // ('https://jsonplaceholder.typicode.com/posts')
        // 'http://172.27.22.203/start.html'
    }
    GenderComponent.prototype.ngOnInit = function () {
        this.httpClient.get('http://172.27.22.203/dane.html')
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return GenderComponent;
}());
GenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gender',
        template: __webpack_require__("../../../../../src/app/components/gender/gender.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gender/gender.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], GenderComponent);

var _a;
//# sourceMappingURL=gender.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hard2/hard2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div>\n      <form [formGroup]=\"hardForm\">\n       \n        <div *ngFor=\"let fname of fnames\">\n            <label>{{pattern.hard[fname]['infotext']}}</label>\n            <input class=\"form-control\" [type]='[pattern[\"hard\"][fname][\"fieldtype\"]]' [formControlName]='[fname]'>\n            <p class=\"text-info\" *ngIf=\"!hardForm.get(fname).valid\">Ten wpis jest niepoprawny</p>\n        </div>\n        <hr>\n        <button class=\"btn btn-primary\" (click)=\"onItemAdd()\">Dodaj urzadzenie</button>\n      </form>\n      <br>\n      <br>\n    </div>\n    <div *ngFor=\"let hard of hards\">\n      <div class=\"row\">\n        <div class=\"card card-block col-12\" \n        [appMycolor]=\"{'bgColor':'orange','color':'grey','defaultBgColor':'lime'}\">\n          <div class=\"row\">\n            <p  *ngFor=\"let fname of fnames\" \n            class=\"p-1\" \n            href=\"#\"\n            >\n            {{pattern.hard[fname]['infotext']}}: {{hard[fname]}} |</p>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div>\n    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/hard2/hard2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hard2/hard2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hard2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hard2_service__ = __webpack_require__("../../../../../src/app/services/hard2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_hard_module__ = __webpack_require__("../../../../../src/app/modules/hard.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Hard2Component = (function () {
    function Hard2Component(hardService) {
        this.hardService = hardService;
        this.pattern = new __WEBPACK_IMPORTED_MODULE_3__modules_hard_module__["a" /* HardModule */]();
        this.fnames = Object.keys(this.pattern.hard);
        // utworz obiekt wsadoowy do FormGroup
        this.hardItems = this.getItemsPattern(this.pattern);
        this.hardForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](this.hardItems);
        //  this.hardItems = 
    }
    Hard2Component.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.fnames);
        // pobierz tablice z danymi 
        this.hards = this.hardService.getHardware();
        this.hardService.newItem.subscribe(function (value) {
            _this.hards = value;
            console.log(_this.hards);
        });
    };
    Hard2Component.prototype.onItemAdd = function () {
        this.hardService.addHardware(this.hardForm.value);
        //console.log( this.hardForm.value);
    };
    // Pobranie ksztaltu formularza 
    Hard2Component.prototype.getItemsPattern = function (pattern) {
        var obj = new Object();
        for (var _i = 0, _a = this.fnames; _i < _a.length; _i++) {
            var name = _a[_i];
            console.log(this.pattern.hard[name]['validator']);
            obj[name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, this.pattern.hard[name]['validator']);
            //  console.log(obj);
        }
        return obj;
    };
    return Hard2Component;
}());
Hard2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hard2',
        template: __webpack_require__("../../../../../src/app/components/hard2/hard2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/hard2/hard2.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_hard2_service__["a" /* Hard2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hard2_service__["a" /* Hard2Service */]) === "function" && _a || Object])
], Hard2Component);

var _a;
//# sourceMappingURL=hard2.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"jumbotron\">\n        <h1 class=\"display-3\">Jumbotron heading</h1>\n        <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n        <p><a class=\"btn btn-lg btn-outline-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n      </div>\n\n      <div class=\"row marketing\">\n        <div class=\"col-lg-6\">\n          <h4>Subheading</h4>\n          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n\n          <h4>Subheading</h4>\n          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>\n\n          <h4>Subheading</h4>\n          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <h4>Subheading</h4>\n          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n\n          <h4>Subheading</h4>\n          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>\n\n          <h4>Subheading</h4>\n          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n        </div>\n      </div>\n      </div> "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/local/local.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button class=\"btn-primary btn\" (click)=\"getData()\">Start data</button>\n  <button class=\"btn-warning btn\" (click)=\"endData()\">Stop data</button>\n</div>\n<!-- Forma  -->\n<div class=\"container\">\n    <form [formGroup]=\"signupForm\">\n        <div class=\"form-group\">\n            <label>Enter your name:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Enter your age:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"age\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"type\">Kind of type:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n        </div>\n        <button class=\"btn btn-success\" (click)=\"onSubmitPut()\" [disabled]=\"!signupForm.valid\">Dodaj Put</button>\n        <button class=\"btn btn-success\" (click)=\"onSubmitPost()\" [disabled]=\"!signupForm.valid\">Dodaj Post</button>\n      </form>\n\n</div>\n<br>\n<br>\n<div class=\"container\">\n    <div class=\"card\" >\n      <ul class=\"list-group \">\n         <li class=\"list-group-item bg-primary text-white\">\n          <div class=\"col-sm-2\">Id</div>\n          <div class=\"col-sm-8\">Nazwa</div>\n          <div class=\"col-sm-2\">Wartosc</div>\n        </li>\n        <li class=\"list-group-item bghover\" *ngFor=\"let gData of genderData;let i=index\"\n        style= \"cursor: pointer\" \n        >\n          <div class=\"col-sm-2\">{{i+1}}</div>\n          <div class=\"col-sm-8\">{{gData.description}}:</div>\n          <div class=\"col-sm-2\">{{gData.value}}</div>\n        </li>\n      </ul>\n    </div>\n    </div>\n<br>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/local/local.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bghover {\n  background-color: white;\n  color: black; }\n\n.bghover:hover {\n  background-color: orange;\n  color: grey; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/local/local.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalComponent = (function () {
    function LocalComponent(localService) {
        this.localService = localService;
        this.genderData = [];
    }
    LocalComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null),
            'age': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null),
            'type': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null)
        });
    };
    LocalComponent.prototype.getData = function () {
        var _this = this;
        this.timeInterval = setInterval(function () {
            _this.localService.getData().subscribe(function (value) {
                _this.genderData = JSON.parse(value['_body']);
                console.log(_this.genderData);
            });
        }, 1000);
    };
    LocalComponent.prototype.endData = function () {
        clearInterval(this.timeInterval);
    };
    LocalComponent.prototype.onSubmitPut = function () {
        //  console.log(this.signupForm.value);
        this.localService.putData(this.signupForm.value);
    };
    LocalComponent.prototype.onSubmitPost = function () {
        this.localService.postData(this.signupForm.value);
    };
    return LocalComponent;
}());
LocalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local',
        template: __webpack_require__("../../../../../src/app/components/local/local.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/local/local.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_local_service__["a" /* LocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_local_service__["a" /* LocalService */]) === "function" && _a || Object])
], LocalComponent);

var _a;
//# sourceMappingURL=local.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-form/my-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\n  <div class=\"container d-flex justify-content-center\">\n    <ul>\n      <li class=\" d-flex justify-content-center\">\n        <h1>My name is {{myFirst.firstName}} {{myFirst.lastName}}</h1>\n      </li>\n      <li class=\" d-flex justify-content-center\">\n        <h2> He make {{whatDo('mewwww')}}</h2>\n      </li>\n    </ul>\n  </div>\n  <div class=\"container d-flex justify-content-center\">\n    <div>\n      <form class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"myFirst.firstName\" name=\"myFirst.firstName\" (change)=\"changeFirstName()\" placeholder=\"Imie\"><br><br>\n        <input type=\"text\" [(ngModel)]=\"myFirst.lastName\" name=\"myFirst.lastName\" (change)=\"changeLastName()\" placeholder=\"Nazwisko\">\n      </form>\n    </div>\n  </div>\n  <br>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"showMe()\">Press me</button>\n  <br>\n\n\n  <div class=\"container d-flex justify-content-center rounded\" style=\"background:#B0C4DE\">\n\n    <div><br><br>\n\n      <img class=\"img-fluid rounded\" [hidden]=\"itsHidden\" alt=\"Responsive image\" src=\"{{imageUrl}}\">\n      <br><br><br>\n    </div>\n    \n    </div>\n\n  </div>\n  <div class=\"container\">\n<div id=\"carouselExampleIndicators\" class=\"carousel slide \" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n  </ol>\n  <div class=\"carousel-inner rounded\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"First slide\">\n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"First slide\"> \n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"First slide\"> \n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\"alt=\"Second slide\">\n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Second slide\"> \n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Second slide\"> \n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Third slide\">\n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Third slide\"> \n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Third slide\"> \n    </div>\n      <div class=\"carousel-item\">\n      <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Fourth slide\">\n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Fourth slide\"> \n       <img class=\"d-block img-fluid\" src=\"{{imageUrl}}\" alt=\"Fourth slide\"> \n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" data-target=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" ></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" data-target=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/my-form/my-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-form/my-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_data_service__ = __webpack_require__("../../../../../src/app/services/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyFormComponent = (function () {
    function MyFormComponent(dataService) {
        this.dataService = dataService;
        this.imageUrl = 'http://lorempixel.com/400/200';
        this.myFirst = {};
        this.myFirst.age = 34;
        this.myFirst.firstName = this.dataService.map.get('firstName') || 'bobo';
        this.myFirst.lastName = this.dataService.map.get('lastName') || 'kot';
        this.itsHidden = true;
    }
    MyFormComponent.prototype.whatDo = function (mruk) {
        return mruk;
    };
    MyFormComponent.prototype.showMe = function () {
        this.itsHidden = !this.itsHidden;
    };
    MyFormComponent.prototype.changeFirstName = function () {
        this.dataService.map.set('firstName', this.myFirst.firstName);
    };
    MyFormComponent.prototype.changeLastName = function () {
        this.dataService.map.set('lastName', this.myFirst.lastName);
    };
    MyFormComponent.prototype.ngOnInit = function () {
        console.log(this.dataService.map.get('kot'));
    };
    return MyFormComponent;
}());
MyFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-form',
        template: __webpack_require__("../../../../../src/app/components/my-form/my-form.component.html"),
        //  template: `<h1>moje imie to {{name}}</h1>`,
        styles: [__webpack_require__("../../../../../src/app/components/my-form/my-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_data_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_data_service__["a" /* GlobalDataService */]) === "function" && _a || Object])
], MyFormComponent);

var _a;
//# sourceMappingURL=my-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n      aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    <a class=\"navbar-brand h1 col-1\" style=\"padding:0px;margin:0px;font-size:28px;font-family:Arial;font-weight:bolder;width:70px\"\n      href=\"#\">BPW</a>\n    <div class=\" col-1\"></div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/\">Home </a>\n        </li>\n\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-expanded=\"false\">Ekrany 1</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/myForm\">Moja Forma</a>\n            <a class=\"dropdown-item\" routerLink=\"/squarePage\">Kwadratowa Strona</a>\n            <a class=\"dropdown-item\" routerLink=\"/flow\">Przeplyw</a>\n            <a class=\"dropdown-item\" routerLink=\"/draw\">Rysowanie</a>\n            <a class=\"dropdown-item\" routerLink=\"/wymiana\">Wymiana Danych</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-expanded=\"false\">Ekrany 2</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/local\">Local Data</a>\n            <a class=\"dropdown-item\" routerLink=\"/gender\">Info Gender</a>\n            <a class=\"dropdown-item\" routerLink=\"/lista\">Lista</a>\n            <a class=\"dropdown-item\" routerLink=\"/reactForm\">Forma Reaktywna</a>\n            <a class=\"dropdown-item\" routerLink=\"/rura\">rura</a>\n            <a class=\"dropdown-item\" routerLink=\"/hard2\">Hard2</a>\n            <a class=\"dropdown-item\" routerLink=\"/siemens\">Siemens</a>\n\n\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/about\">About</a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/react-form/react-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"signupForm\">\n    <div class=\"form-group\">\n        <label>Enter your name:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n    </div>\n    <div class=\"form-group\">\n        <label>Enter your email:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"!signupForm.valid\">Dodaj mnie</button>\n  </form>\n</div>\n<br>\n<div class=\"container\">\n  <div *ngFor=\"let user of users\">\n    <div class=\"card card-block myColor\">\n        <div>\n            <p>User name: {{user.name}}</p>\n            <p>User email: {{user.email}}</p>\n          </div>         \n    </div>\n    <br>  \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/react-form/react-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myColor {\n  border: red 1px solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/react-form/react-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReactFormComponent = (function () {
    function ReactFormComponent(userService) {
        this.userService = userService;
    }
    ReactFormComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email])
        });
    };
    ReactFormComponent.prototype.onSubmit = function () {
        console.log(this.signupForm);
        console.log(this.signupForm.controls.username.value);
        this.userService.addUser({
            name: this.signupForm.controls.username.value,
            email: this.signupForm.controls.email.value
        });
        this.users = this.userService.getUsers();
    };
    return ReactFormComponent;
}());
ReactFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-react-form',
        template: __webpack_require__("../../../../../src/app/components/react-form/react-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/react-form/react-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], ReactFormComponent);

var _a;
//# sourceMappingURL=react-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rury/rury.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <form [formGroup]=\"hardForm\">\n     \n      <div *ngFor=\"let fname of fnames\">\n          <label>Nazwa </label>\n          <input class=\"form-control\" type=\"text\" [formControlName]='[fname]'>\n      </div>\n      <hr>\n      <button class=\"btn btn-primary\" (click)=\"onItemAdd()\">Dodaj urzadzenie</button>\n    </form>\n    <br>\n    <br>\n  </div>\n  <div *ngFor=\"let hard of hardware\">\n    <div class=\"row\">\n      <div class=\"card card-block col-12\" \n      [appMycolor]=\"{'bgColor':'orange','color':'green'}\">\n        <div class=\"row\" >\n          <p class=\"p-1\" [ngStyle]=\"{fontStyle: 'italic'}\">Nazwa urzadzenia: {{hard.hardwareName}} |</p>\n          <p class=\"p-1\"> Cena urzadzenia: {{hard.hardwarePrice | plncurrency:space}} </p>\n          <p class=\"p-1\"> Miejsce urzadzenia: {{hard.hardwarePlace}} </p>\n        </div>\n      </div>\n    </div>\n    <hr>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/rury/rury.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rury/rury.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hardware_service__ = __webpack_require__("../../../../../src/app/services/hardware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RuryComponent = (function () {
    function RuryComponent(hardService) {
        this.hardService = hardService;
        this.pattern = {
            hardwareName: '',
            hardwarePrice: 0,
            hardwarePlace: 1123
        };
        this.fnames = Object.keys(this.pattern);
        this.hardItems = {
            hardwareName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null),
            hardwarePrice: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null),
            hardwarePlace: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null)
        };
        this.hardForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */](this.hardItems);
    }
    RuryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hardware = this.hardService.getHardware();
        this.hardService.newItem.subscribe(function (value) {
            _this.hardware = value;
        });
        console.log(this.fnames);
    };
    RuryComponent.prototype.onItemAdd = function () {
        this.hardService.addHardware(this.hardForm.value);
        console.log(this.hardForm.value);
    };
    return RuryComponent;
}());
RuryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rury',
        template: __webpack_require__("../../../../../src/app/components/rury/rury.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/rury/rury.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hardware_service__["a" /* HardwareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hardware_service__["a" /* HardwareService */]) === "function" && _a || Object])
], RuryComponent);

var _a;
//# sourceMappingURL=rury.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/siemens/siemens.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" >\n    <ul class=\"list-group \">\n       <li class=\"list-group-item bg-primary text-white\">\n        <div class=\"col-sm-2\">Id</div>\n\n      </li>\n      <li class=\"list-group-item bghover\" *ngFor=\"let arr of myArray;let i=index;\"\n      style= \"cursor: pointer\" \n      >\n        <div class=\"col-sm-2\">{{arr}}</div>\n      </li>\n    </ul>\n  </div>\n  <button class=\"btn btn-primary\" (click)=\"postSiemensData('133')\">Press Me</button>\n  <button class=\"btn btn-success\" (click)=\"getOnlineValue()\">Press Me</button>\n  </div>\n\n  <div class=\"container jumbotron\">\n    <form class=\"form-group\">\n      <div div class=\"form-group row\">\n      <label class=\"col-2 col-form-label\">Wartosc do Plc:</label>\n      <p class=\"form-control col-2\" type='number'>{{valueToSend}}</p> \n      <div class=\"col-2\">\n      <label id='myValX'class=\" btn btn-outline-success fa fa-arrow-up rounded\" (click)='onMousePressUp()'></label>\n      <label id='myValX'class=\" btn btn-outline-danger fa fa-arrow-down rounded\" (click)='onMousePressDown()'></label>\n      </div>\n      </div>    \n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/siemens/siemens.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/siemens/siemens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiemensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiemensComponent = (function () {
    function SiemensComponent(localService) {
        this.localService = localService;
        this.valueToSend = 0;
    }
    SiemensComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  this.getData();
        this.localService.getSiemensData().subscribe(function (value) {
            _this.otherValue = JSON.parse(value['_body']);
            console.log(value);
            _this.valueToSend = _this.otherValue[3];
        });
    };
    SiemensComponent.prototype.getOnlineValue = function () {
    };
    SiemensComponent.prototype.getData = function () {
        var _this = this;
        this.timeInterval = setInterval(function () {
            _this.localService.getSiemensData().subscribe(function (value) {
                _this.myArray = JSON.parse(value['_body']);
                console.log(_this.myArray);
            });
        }, 10000);
    };
    SiemensComponent.prototype.postSiemensData = function (data) {
        var _this = this;
        this.localService.postSiemensData({ 'value': data }).then(function (value) {
            _this.valueToSend = JSON.parse(value['_body'])['value'];
            console.log(value, 'ok');
        });
        //  console.log(data);
    };
    SiemensComponent.prototype.onMousePressUp = function () {
        this.valueToSend++;
        // console.log(this.valueToSend);
        var me = this.postSiemensData(this.valueToSend.toString());
    };
    SiemensComponent.prototype.onMousePressDown = function () {
        this.valueToSend--;
        this.postSiemensData(this.valueToSend.toString());
    };
    return SiemensComponent;
}());
SiemensComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-siemens',
        template: __webpack_require__("../../../../../src/app/components/siemens/siemens.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/siemens/siemens.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_local_service__["a" /* LocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_local_service__["a" /* LocalService */]) === "function" && _a || Object])
], SiemensComponent);

var _a;
//# sourceMappingURL=siemens.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/square-page/square-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container jumbotron\">\n  <form class=\"form-group\">\n    <div div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Wartosc X:</label>\n    <input class=\"form-control col-2\" type='number' (change)='inputEdit()'  [(ngModel)]=\"myValX\" name=\"myValX\"> \n    <div class=\"col-2\">\n    <label id='myValX'class=\" btn btn-outline-success fa fa-arrow-up rounded\" (mouseover)='onMouseOver($event.target.id,\"pos\")'(mouseleave)='onMouseLeave()'></label>\n    <label id='myValX'class=\" btn btn-outline-danger fa fa-arrow-down rounded\" (mouseover)='onMouseOver($event.target.id,\"neg\")'(mouseleave)='onMouseLeave()'></label>\n    </div>\n    </div>\n  <div div class=\"form-group row\">\n    <label  class=\"col-2 col-form-label\">Wartosc Y:</label>\n    <input  class=\"form-control col-2\" type='number'(change)='inputEdit()' [(ngModel)]=\"myValY\" name=\"myValY\"> \n    <div class=\"col-2\">\n        <label  id='myValY'class=\" btn btn-outline-success fa fa-arrow-up rounded\" (mouseover)='onMouseOver($event.target.id,\"pos\")' (mouseleave)='onMouseLeave()'></label>\n        <label  id='myValY'class=\" btn btn-outline-danger fa fa-arrow-down rounded\" (mouseover)='onMouseOver($event.target.id,\"neg\")' (mouseleave)='onMouseLeave()'></label>\n    </div>\n    </div>\n    \n  <h1>{{inputEdit()}}</h1>\n  <h1>{{myCosTam}}</h1>\n  \n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/square-page/square-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/square-page/square-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquarePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shape_module__ = __webpack_require__("../../../../../src/app/modules/shape-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SquarePageComponent = (function () {
    function SquarePageComponent() {
    }
    SquarePageComponent.prototype.ngOnInit = function () {
        this.myValX = 0;
        this.myValY = 0;
    };
    SquarePageComponent.prototype.showArea = function () {
        return this.kwadrat.getArea();
    };
    SquarePageComponent.prototype.inputEdit = function () {
        // console.log('yeah');
        this.kwadrat = new __WEBPACK_IMPORTED_MODULE_1__modules_shape_module__["a" /* SquareArea */](this.myValX, this.myValY);
        return this.showArea();
    };
    SquarePageComponent.prototype.onMouseOver = function (val, direction) {
        var _this = this;
        this.intervalHelp = setInterval(function (callback) { return _this.countFunct(val, direction); }, 300);
    };
    SquarePageComponent.prototype.onMouseLeave = function () {
        clearInterval(this.intervalHelp);
    };
    SquarePageComponent.prototype.countFunct = function (val, direction) {
        if (direction === 'pos') {
            if (val === 'myValX') {
                this.myValX += 1;
            }
            if (val === 'myValY') {
                this.myValY += 1;
            }
            else { }
        }
        if (direction === 'neg') {
            if (val === 'myValX') {
                this.myValX -= 1;
            }
            if (val === 'myValY') {
                this.myValY -= 1;
            }
            else { }
        }
    };
    return SquarePageComponent;
}());
SquarePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-square-page',
        template: __webpack_require__("../../../../../src/app/components/square-page/square-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/square-page/square-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SquarePageComponent);

//# sourceMappingURL=square-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/super-button/super-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn round-button-green\"><ng-content></ng-content></button>\n"

/***/ }),

/***/ "../../../../../src/app/components/super-button/super-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".round-button-red {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  border: 2px solid #f5f5f5;\n  border-radius: 50%;\n  color: #f5f5f5;\n  text-align: center;\n  text-decoration: none;\n  background: #F03B3B;\n  box-shadow: 0 0 3px gray;\n  font-size: 20px;\n  font-weight: bold; }\n\n.round-button-red:hover {\n  background: #EA2525; }\n\n.round-button-red:active {\n  border: 3px solid #eaeaea;\n  background: #DE2525; }\n\n.round-button-green {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  border: 2px solid #f5f5f5;\n  border-radius: 50%;\n  color: #f5f5f5;\n  text-align: center;\n  text-decoration: none;\n  background: #11B92D;\n  box-shadow: 0 0 3px gray;\n  font-size: 20px;\n  font-weight: bold; }\n\n.round-button-green:hover {\n  background: #EA2525; }\n\n.round-button-green:active {\n  border: 3px solid #eaeaea;\n  background: #DE2525; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/super-button/super-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuperButtonComponent = (function () {
    function SuperButtonComponent() {
    }
    SuperButtonComponent.prototype.ngOnInit = function () {
    };
    return SuperButtonComponent;
}());
SuperButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-super-button',
        template: __webpack_require__("../../../../../src/app/components/super-button/super-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/super-button/super-button.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SuperButtonComponent);

//# sourceMappingURL=super-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/mycolor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycolorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MycolorDirective = (function () {
    function MycolorDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        // @Input('appMycolor') appMycolor: Custom = {
        //   bgColor: 'red',
        //   color:'white',
        //   defaultBgColor:'white',
        //   defaultColor:'black',
        //}; 
        //@Input('appMycolor') set appMycolor(value:{[key:string]:string})
        this.custom = {
            bgColor: 'red',
            color: 'white',
            defaultBgColor: 'white',
            defaultColor: 'black',
        };
    }
    Object.defineProperty(MycolorDirective.prototype, "appMycolor", {
        set: function (value) {
            var para = Object.keys(value).slice(0);
            for (var _i = 0, para_1 = para; _i < para_1.length; _i++) {
                var p = para_1[_i];
                this.custom[p] = value[p];
            }
        },
        enumerable: true,
        configurable: true
    });
    MycolorDirective.prototype.ngOnInit = function () {
    };
    MycolorDirective.prototype.mouseover = function () {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', this.custom.bgColor);
        this.renderer.setStyle(this.el.nativeElement, 'color', this.custom.color);
    };
    MycolorDirective.prototype.mouseoff = function () {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', this.custom.defaultBgColor);
        this.renderer.setStyle(this.el.nativeElement, 'color', this.custom.defaultColor);
    };
    return MycolorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('appMycolor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MycolorDirective.prototype, "appMycolor", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MycolorDirective.prototype, "mouseover", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MycolorDirective.prototype, "mouseoff", null);
MycolorDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appMycolor]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], MycolorDirective);

var _a, _b;
//# sourceMappingURL=mycolor.directive.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/elementData.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=elementData.js.map

/***/ }),

/***/ "../../../../../src/app/modules/hard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");

var HardModule = (function () {
    function HardModule() {
        this.hard = {
            hardwareName: {
                infotext: 'Nazwa urzadzenia',
                value: '',
                fieldtype: 'Text',
                validator: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required
            },
            hardwarePrice: {
                infotext: 'Cena urzadzenia',
                value: 0,
                fieldtype: 'Number',
                validator: null
            },
            hardwarePlace: {
                infotext: 'Miejsce skladowania',
                value: 0,
                fieldtype: 'Number',
                validator: null
            },
            hardwareDescription: {
                infotext: 'Opis urzadzenia',
                value: '',
                fieldtype: '',
                validator: null
            }
        };
    }
    return HardModule;
}());

//# sourceMappingURL=hard.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shape-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquareArea; });
var SquareArea = (function () {
    function SquareArea(pX, pY) {
        this.pointX = pX;
        this.pointY = pY;
    }
    SquareArea.prototype.getArea = function () {
        return this.pointX * this.pointY;
    };
    SquareArea.prototype.getHeight = function () {
        return this.pointY;
    };
    SquareArea.prototype.getWight = function () {
        return this.pointX;
    };
    return SquareArea;
}());

//# sourceMappingURL=shape-module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/rura.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuraPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RuraPipe = (function () {
    function RuraPipe() {
    }
    RuraPipe.prototype.transform = function (value, space) {
        if (space) {
            return (" " + value + " zł.");
        }
        else {
            return (value + " zł.");
        }
    };
    return RuraPipe;
}());
RuraPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'plncurrency'
    })
], RuraPipe);

//# sourceMappingURL=rura.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/global-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalDataService = (function () {
    function GlobalDataService() {
        this.map = new Map();
        this.makeMe();
    }
    GlobalDataService.prototype.makeMe = function () {
        return this.map;
    };
    return GlobalDataService;
}());
GlobalDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalDataService);

//# sourceMappingURL=global-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/hard2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hard2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Hard2Service = (function () {
    function Hard2Service() {
        this.newItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.hards = [];
        console.log('Laduje konstruktor service hardware');
    }
    Hard2Service.prototype.ngOnInit = function () {
        console.log('Laduje service hardware');
    };
    Hard2Service.prototype.getHardware = function () {
        return this.hards.slice();
    };
    Hard2Service.prototype.addHardware = function (obj) {
        this.hards.push(obj);
        //  console.log('service',obj);
        this.newItem.emit(this.hards.slice());
    };
    return Hard2Service;
}());
Hard2Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Hard2Service);

//# sourceMappingURL=hard2.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/hardware.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HardwareService = (function () {
    function HardwareService() {
        this.newItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.hardware = [];
        this.hardware2 = [];
        console.log('Laduje konstruktor service hardware');
    }
    HardwareService.prototype.ngOnInit = function () {
        console.log('Laduje service hardware');
    };
    HardwareService.prototype.getHardware = function () {
        return this.hardware.slice();
    };
    HardwareService.prototype.addHardware = function (obj) {
        this.hardware.push(obj);
        console.log('service', obj);
        this.newItem.emit(this.hardware.slice());
    };
    return HardwareService;
}());
HardwareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HardwareService);

//# sourceMappingURL=hardware.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalService = (function () {
    function LocalService(http) {
        this.http = http;
    }
    LocalService.prototype.getData = function () {
        return this.http.get('http://localhost:3000/hello');
    };
    LocalService.prototype.putData = function (data) {
        console.log('Putet:', data);
        this.http.put('http://localhost:3000/put', data); //.subscribe((response: Response)=> console.log(response));
    };
    LocalService.prototype.postData = function (data) {
        console.log('Posted:', data);
        this.http.post('http://localhost:3000/hello', data).subscribe(function (response) { return console.log(response); });
    };
    LocalService.prototype.getSiemensData = function () {
        return this.http.get('http://localhost:3000/siemens');
    };
    // postSiemensData(data:any){
    //   console.log('Siemens Posted',data);
    //   this.http.post('http://localhost:3000/spost',data).subscribe((response: Response)=>{
    //   });
    // }
    LocalService.prototype.postSiemensData = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('Siemens Posted', data);
            _this.http.post('http://localhost:3000/spost', data).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    return LocalService;
}());
LocalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LocalService);

var _a;
//# sourceMappingURL=local.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.getData = function () {
        return this.http.get("http://localhost:4200/assets/dane.json").map(function (value) {
            return value.json();
        });
    };
    ServerService.prototype.pushData = function (data) {
        return this.http.post('http://localhost:4200/assets/dane', data);
    };
    ServerService.prototype.coutning = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next('rumun to zle imie');
            }, 4000);
        });
    };
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersService = (function () {
    function UsersService() {
        this.users = [{ name: 'pk', email: "test@test.com" }];
    }
    UsersService.prototype.addUser = function (data) {
        this.users.push(data);
    };
    UsersService.prototype.getUsers = function () {
        return this.users.slice();
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
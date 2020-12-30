function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-container\">\n    <div class=\"grid-2\">\n        <h2 class=\"mat-h2\">Dashboard</h2>\n        <!-- <div class=\"right\">\n            <button mat-raised-button color=\"primary\" (click)=\"gotoPage('dashboard')\">Back</button>\n        </div> -->\n    </div>\n    <div>\n        <div class=\"box-container\">\n            <div class=\"grid-3\">\n                <h2 class=\"mat-h3\">Policy List</h2>\n                <div>\n                    <mat-form-field>\n                        <mat-label>Search By Policy Details</mat-label>\n                        <input type=\"text\" matInput (keyup)=\"applyFilter($event.target.value)\">\n                        <mat-icon matSuffix>search</mat-icon>\n                    </mat-form-field>\n                </div>\n                <div class=\"right\">\n                    <button mat-raised-button color=\"primary\" (click)=\"exportAsXLSX()\">Export Data</button>\n                </div>\n            </div>\n            <mat-table #table [dataSource]=\"table_data\">\n\n                <ng-container *ngFor=\"let disCol of displayedColumns; let colIndex = index\" matColumnDef=\"{{disCol}}\">\n                    <ng-container *ngIf=\"disCol != 'edit'\">\n                        <mat-header-cell *matHeaderCellDef>{{disCol}}</mat-header-cell>\n                    </ng-container>\n                    <ng-container *ngIf=\"disCol == 'edit'\">\n                        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                    </ng-container>\n                    <mat-cell *matCellDef=\"let element \" style=\"cursor: default;\"\n                        (click)=\"openDialogWithTemplateRef(editModule, element)\">\n                        <span *ngIf=\"disCol != 'status'\">{{element[disCol]}}</span>\n                        <span *ngIf=\"disCol == 'status'\">{{element[disCol] || 'Pending'}}</span>\n                    </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n            <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n    </div>\n</div>\n\n<ng-template #editModule>\n    <div class=\"grid-2\">\n        <h2 matDialogTitle>Candidate Data</h2>\n        <a class=\"right\">\n            <mat-icon matDialogClose style=\"font-size: medium!important;\">close</mat-icon>\n        </a>\n    </div>\n    <hr>\n    <mat-dialog-content>\n        <mat-tab-group dynamicHeight [(selectedIndex)]=\"tabIndex\">\n            <mat-tab label=\"Step 1\" [disabled]=\"true\">\n                <div class=\"box-container\" style=\"height: 250px;\">\n                    Please select ID of your choice\n                    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"doc_choice\">\n                        <mat-radio-button value=\"0\" class=\"example-radio-button\" color=\"primary\"> UID</mat-radio-button>\n                        <mat-radio-button value=\"1\" class=\"example-radio-button\" color=\"primary\"> VID</mat-radio-button>\n                        <mat-radio-button value=\"2\" class=\"example-radio-button\" color=\"primary\"> Aadhaar\n                        </mat-radio-button>\n                    </mat-radio-group>\n                    <div class=\"field\" *ngIf=\"doc_choice != 0\">\n                        <mat-form-field>\n                            <mat-label>Enter value</mat-label>\n                            <input type=\"text\" matInput [(ngModel)]=\"doc_value\">\n                        </mat-form-field>\n                    </div>\n                    <!--\n                    <div class=\"field\" *ngIf=\"doc_choice != 0\">\n                        <mat-form-field>\n                            <mat-label>Enter exception password</mat-label>\n                            <input type=\"password\" matInput [(ngModel)]=\"doc_password\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"field\" *ngIf=\"doc_choice != 0\">\n                        <mat-form-field>\n                            <mat-label>Enter reason</mat-label>\n                            <textarea matInput [(ngModel)]=\"doc_reason\"></textarea>\n                        </mat-form-field>\n                    </div>\n                    -->\n                    <div style=\"padding-top: 15px;\" class=\"right\">\n                     <button mat-raised-button color=\"primary\" (click)=\"onNextMethod()\">Next >></button>\n                    </div>\n                </div>\n\n            </mat-tab>\n            <mat-tab label=\"Step 2\" [disabled]=\"true\">\n                <div class=\"box-container center\">\n                    <div class=\"fingerprint\"></div>\n                    <button mat-raised-button color=\"default\" (click)=\"capture()\">Capture</button>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Step 3\" [disabled]=\"true\">\n                <div class=\"box-container center\" style=\"height: 250px;\">\n                    <h2 class=\"mat-h1\">\n                        <span style=\"color: green!important\"><b><mat-icon>done_outline</mat-icon>Completed Successfully</b></span>\n                    </h2>\n                    <button (click)=\"closeDialog()\" mat-raised-button color=\"primary\">Go Back</button>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </mat-dialog-content>\n    <hr>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/message/message.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/message/message.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Fabric Portal</h2>\n<div mat-dialog-content [innerHTML]=\"data.message\"></div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"close()\">Close</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"tp-container\">\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <div class=\"header-grid\">\n        <div class=\"sub-header-grid\">\n          <div>\n            <span class=\"header-title\">SBI Payout Audit Platform\n            </span>\n          </div>\n          <div style=\"text-align: right\">\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"right-align\">\n              <span>Admin</span>\n              <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" aligns=\"end\">\n              <button mat-menu-item (click)=\"gotoPage('login')\">\n                <mat-icon>remove_circle</mat-icon>\n                <span>Logout</span>\n              </button>\n            </mat-menu>\n          </div>\n        </div>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</mat-drawer-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-expansion-panel expanded=\"true\" hideToggle=\"true\" disabled=\"true\">\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Log In\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <form [formGroup]=\"signInForm\" (keyup.enter)=\"submit()\">\n    <div class=\"field\">\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"user_id\" formControlName=\"user_id\" placeholder=\"Enter user id\" required>\n      </mat-form-field>\n    </div>\n    <div class=\"field\">\n      <mat-form-field>\n        <input matInput appBlockCopyPaste type=\"password\" formControlName=\"password\" name=\"password\"\n          placeholder=\"Enter Password\" required>\n      </mat-form-field>\n    </div>\n  </form>\n  <div class=\"button\">\n    <button [disabled]=\"!canSubmit()\" (click)=\"submit()\" mat-raised-button color=\"primary\">Log In\n    </button>\n  </div>\n  <!-- <mat-action-row>\n    <div>\n      <button mat-button color=\"primary\" (click)=\"openDialogWithTemplateRef(forgotPassword)\">Forgot Password?</button>\n    </div>\n  </mat-action-row> -->\n</mat-expansion-panel>\n<app-message-dialog #messageDlg></app-message-dialog>\n\n<ng-template #forgotPassword>\n  <h2 matDialogTitle>Forgot Password</h2>\n  <mat-dialog-content>\n    <div class=\"right\" style=\"color:blue;\" *ngIf=\"forgot_password_flag == 'otp'\">\n      **OTP has been send to entered email\n    </div>\n    <div>\n      <div class=\"field\">\n        <mat-form-field *ngIf=\"forgot_password_flag == 'email'\">\n          <input matInput type=\"email\" placeholder=\"Enter User Email\">\n        </mat-form-field>\n      </div>\n      <div class=\"field\">\n        <mat-form-field *ngIf=\"forgot_password_flag == 'otp'\">\n          <input matInput type=\"text\" placeholder=\"Enter OTP\">\n        </mat-form-field>\n      </div>\n      <div class=\"field\">\n        <mat-form-field *ngIf=\"forgot_password_flag == 'pass'\">\n          <input matInput type=\"password\" placeholder=\"Enter password\">\n        </mat-form-field>\n      </div>\n      <div class=\"field\">\n        <mat-form-field *ngIf=\"forgot_password_flag == 'pass'\">\n          <input matInput type=\"password\" placeholder=\"Enter confirm password\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button class=\"mat-button\" (click)=\"changePassword()\">\n      <span *ngIf=\"forgot_password_flag != 'pass'\">Next</span>\n      <span *ngIf=\"forgot_password_flag == 'pass'\">Submit</span>\n    </button>\n    <button matDialogClose class=\"mat-button\">Cancel</button>\n  </mat-dialog-actions>\n</ng-template>";
    /***/
  },

  /***/
  "./src/app/Service/jsontoexcel.service.ts":
  /*!************************************************!*\
    !*** ./src/app/Service/jsontoexcel.service.ts ***!
    \************************************************/

  /*! exports provided: JsontoexcelService */

  /***/
  function srcAppServiceJsontoexcelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsontoexcelService", function () {
      return JsontoexcelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

    var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var EXCEL_EXTENSION = '.xlsx';

    var JsontoexcelService = /*#__PURE__*/function () {
      function JsontoexcelService() {
        _classCallCheck(this, JsontoexcelService);
      }

      _createClass(JsontoexcelService, [{
        key: "exportAsExcelFile",
        value: function exportAsExcelFile(json, excelFileName) {
          var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
          console.log('worksheet', worksheet);
          var workbook = {
            Sheets: {
              'data': worksheet
            },
            SheetNames: ['data']
          };
          var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
            bookType: 'xlsx',
            type: 'array'
          });
          this.saveAsExcelFile(excelBuffer, excelFileName);
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          var data = new Blob([buffer], {
            type: EXCEL_TYPE
          });
          file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        }
      }]);

      return JsontoexcelService;
    }();

    JsontoexcelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JsontoexcelService);
    /***/
  },

  /***/
  "./src/app/Service/login.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Service/login.service.ts ***!
    \******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(username, password) {
          return this.http.post('API', {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('currentUser');
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return JSON.parse(sessionStorage.getItem('currentUser'));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'home',
      pathMatch: 'full',
      redirectTo: 'login'
    }, {
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
      canActivateChild: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      children: [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
      }, {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  min-height: 400px;\n  margin-left: 20px;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.padding-10 {\n  padding: 10px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-input-container {\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-input-container mat-form-field {\n  width: 100%;\n}\n\n.example-input-container textarea {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoYS9EZXNrdG9wL3NlcnZlci9wcm9qZWN0L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDQ0Y7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxzREFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0Usc0RBQUE7QUNERjs7QURNQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBREtFO0VBQ0UsV0FBQTtBQ0hKOztBREtFO0VBQ0UsV0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGFkZGluZy0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cblxuLmV4YW1wbGUtaW5wdXQtY29udGFpbmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhZGRpbmctMTAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtaW5wdXQtY29udGFpbmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmV4YW1wbGUtaW5wdXQtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZXhhbXBsZS1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sentinel';
      this.todo = ['Input', 'Textarea', 'Select', 'Checkbox', 'Button'];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/chips.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _dialog_message_message_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./dialog/message/message.component */
    "./src/app/dialog/message/message.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
    /* harmony import */


    var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-material-file-input */
    "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var saturn_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! saturn-datepicker */
    "./node_modules/saturn-datepicker/__ivy_ngcc__/fesm2015/saturn-datepicker.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sort.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-bar.js");
    /* harmony import */


    var ng_katex__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ng-katex */
    "./node_modules/ng-katex/__ivy_ngcc__/fesm2015/ng-katex.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
    /* harmony import */


    var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./http-request-interceptor */
    "./src/app/http-request-interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_22__["LayoutComponent"], _dialog_message_message_component__WEBPACK_IMPORTED_MODULE_26__["MessageDialog"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_31__["MaterialFileInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_35__["SatDatepickerModule"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_35__["SatNativeDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__["MatProgressBarModule"], ng_katex__WEBPACK_IMPORTED_MODULE_38__["KatexModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _http_request_interceptor__WEBPACK_IMPORTED_MODULE_40__["HttpRequestInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_dialog_message_message_component__WEBPACK_IMPORTED_MODULE_26__["MessageDialog"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
    //
    // This program and the accompanying materials are made available
    // under the terms described in the LICENSE file which accompanies
    // this distribution. If the LICENSE file was not attached to this
    // distribution or for further clarifications, please contact
    // legal@nseit.com.


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivateChild",
        value: function canActivateChild(route) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var login;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    login = sessionStorage.getItem('login');

                    if (!login) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return", true);

                  case 5:
                    this.router.navigate(['login']);
                    return _context.abrupt("return", false);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-form-field-infix {\n  width: 400px !important;\n}\n\nbutton.create-form {\n  background-color: green;\n  color: white;\n}\n\n.container-d {\n  width: 100%;\n}\n\n.mat-card {\n  box-shadow: 1px 2px 10px 0 #000000 !important;\n  display: inline-block !important;\n  width: 43%;\n  margin-left: 36px;\n  margin-top: 20px;\n}\n\n.mat-card-subtitle {\n  font-weight: bold !important;\n  color: black;\n}\n\n.grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.grid-6 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.fingerprint {\n  background: url('/home/capture.png');\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  background-position: center;\n  height: 250px;\n  margin-bottom: 20px;\n}\n\n.img {\n  font-size: larger !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoYS9EZXNrdG9wL3NlcnZlci9wcm9qZWN0L2NsaWVudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx1QkFBQTtBQ0xGOztBRFFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUM7RUFDQyw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURTRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURTRTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0U7RUFDRSxXQUFBO0FDTko7O0FEU0U7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNFO0VBQ0UsNEJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGRpdiBoMiB7XG4vLyBtYXJnaW4tbGVmdDogNTlweDtcbi8vIG1hcmdpbi10b3A6IDIxcHhcbi8vIH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgd2lkdGg6NDAwcHggIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLmNyZWF0ZS1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbi5jb250YWluZXItZHtcbiAgd2lkdGg6IDEwMCVcbiAgfVxuXG4gLm1hdC1jYXJke1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggMCAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDo0MyU7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4XG4gXG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuZ3JpZC0zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuZ3JpZC02IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiAgLmZpbmdlcnByaW50IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9jYXB0dXJlLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5pbWd7XG4gICAgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudDtcbiAgfSIsIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLmNyZWF0ZS1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci1kIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAwICMwMDAwMDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0MyU7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmlkLTMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZ3JpZC02IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5maW5nZXJwcmludCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9jYXB0dXJlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmltZyB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Service_jsontoexcel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Service/jsontoexcel.service */
    "./src/app/Service/jsontoexcel.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(router, dialog, httpClient, excelService) {
        _classCallCheck(this, DashboardComponent);

        this.router = router;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.excelService = excelService;
        this.edit_data = {};
        this.doc_choice = null;
        this.doc_value = '';
        this.tabIndex = 0;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.displayedColumns = ['Client Code', 'First Name', 'Mobile No.', 'Email', 'Test City']
          this.displayedColumns = ['POLICY NO', 'PLAN ID', 'THREAD ID', 'UIN', 'STATUS'];
          var data = [];
          this.table_data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
          this.edit_data = {};
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.httpClient.get("../../assets/data2.json").subscribe(function (json_data) {
            _this.data = json_data;
            _this.table_data.paginator = _this.paginator;
            _this.table_data.data = _this.data;
          });
        }
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef, element) {
          this.tabIndex = 0;
          this.edit_data = element;
          this.doc_choice = '';
          this.doc_value = '';
          var config = {
            position: {
              top: '0px',
              right: '0px'
            },
            height: '100%',
            width: '100vw',
            panelClass: 'full-screen-modal'
          };
          this.dialog.open(templateRef, config);
        }
      }, {
        key: "gotoPage",
        value: function gotoPage(pageName) {
          this.router.navigate([pageName]);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.table_data.filter = filterValue;
        }
      }, {
        key: "capture",
        value: function capture() {
          this.tabIndex = 2;
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialog.closeAll();
        }
      }, {
        key: "onNextMethod",
        value: function onNextMethod() {
          if (!this.doc_choice) {
            alert("Please select an ID");
            return;
          }

          if (this.doc_choice == 0) {
            this.tabIndex = 1;
          }

          if (this.doc_choice == 2 && this.doc_value.length != 12) {
            alert('Please enter valid Aadhaar Card Number');
            return;
          }

          if (this.doc_choice == 2 && this.doc_value.length == 12) {
            //TODO api call
            this.tabIndex = 1;
          }
        }
      }, {
        key: "exportAsXLSX",
        value: function exportAsXLSX() {
          this.excelService.exportAsExcelFile(this.data, 'export-to-excel');
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _Service_jsontoexcel_service__WEBPACK_IMPORTED_MODULE_6__["JsontoexcelService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageDlg', {
      "static": false
    })], DashboardComponent.prototype, "messageDlg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dialog/message/message.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/dialog/message/message.component.ts ***!
    \*****************************************************/

  /*! exports provided: MessageDialogComponent, MessageDialog */

  /***/
  function srcAppDialogMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function () {
      return MessageDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDialog", function () {
      return MessageDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js"); // Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
    //
    // This program and the accompanying materials are made available
    // under the terms described in the LICENSE file which accompanies
    // this distribution. If the LICENSE file was not attached to this
    // distribution or for further clarifications, please contact
    // legal@nseit.com.


    var MessageDialogComponent = /*#__PURE__*/function () {
      function MessageDialogComponent(dialog) {
        _classCallCheck(this, MessageDialogComponent);

        this.dialog = dialog;
      }

      _createClass(MessageDialogComponent, [{
        key: "openDialog",
        value: function openDialog(message) {
          this.dialog.open(MessageDialog, {
            data: {
              message: message
            }
          });
        }
      }]);

      return MessageDialogComponent;
    }();

    MessageDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    MessageDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-dialog',
      template: '<div></div>'
    })], MessageDialogComponent);

    var MessageDialog = /*#__PURE__*/function () {
      function MessageDialog(dialogRef, data) {
        _classCallCheck(this, MessageDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(MessageDialog, [{
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return MessageDialog;
    }();

    MessageDialog.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MessageDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/message/message.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MessageDialog);
    /***/
  },

  /***/
  "./src/app/http-request-interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/http-request-interceptor.ts ***!
    \*********************************************/

  /*! exports provided: HttpRequestInterceptor */

  /***/
  function srcAppHttpRequestInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function () {
      return HttpRequestInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HttpRequestInterceptor = /*#__PURE__*/function () {
      function HttpRequestInterceptor() {
        _classCallCheck(this, HttpRequestInterceptor);
      }

      _createClass(HttpRequestInterceptor, [{
        key: "handleAuthError",
        value: function handleAuthError(err) {
          if (err.status === 403) {
            window.location.href = '/';
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }
      }, {
        key: "intercept",
        value: function intercept(request, next) {
          var _this2 = this;

          var body = request.body;
          var headers = request.headers.set('Content-Type', 'application/json');
          var updatedRequest = request.clone({
            headers: headers,
            body: body,
            withCredentials: true
          });
          return next.handle(updatedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              return event = event.clone({
                body: event.body
              });
            }

            return event;
          }, function (error) {
            _this2.handleAuthError(error);
          }));
        }
      }]);

      return HttpRequestInterceptor;
    }();

    HttpRequestInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], HttpRequestInterceptor);
    /***/
  },

  /***/
  "./src/app/layout/layout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/layout/layout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\n  flex: 1 auto;\n}\n\n.container {\n  padding: 20px;\n}\n\n.header-title {\n  cursor: pointer;\n  font-size: 18px;\n  margin-left: 5px;\n}\n\n.header-grid {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 2fr;\n  cursor: pointer;\n}\n\n.sub-header-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.tp-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #f2f2f2;\n}\n\n.tp-section {\n  padding: 15px;\n  width: 240px;\n  max-height: 75vh;\n  overflow: auto;\n}\n\n.list-head {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.menu-parent-container {\n  height: 100%;\n  background: #f2f2f2;\n}\n\n.mat-expansion-panel-spacing {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoYS9EZXNrdG9wL3NlcnZlci9wcm9qZWN0L2NsaWVudC9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmhlYWRlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWItaGVhZGVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnJcbn1cblxuLnRwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4udHAtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubGlzdC1oZWFke1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUtcGFyZW50LWNvbnRhaW5lcntcbiAgaGVpZ2h0OjEwMCU7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5ne1xuICBtYXJnaW46MCAhaW1wb3J0YW50O1xufVxuIiwiLnNwYWNlciB7XG4gIGZsZXg6IDEgYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmhlYWRlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWItaGVhZGVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi50cC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuLnRwLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG1heC1oZWlnaHQ6IDc1dmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubGlzdC1oZWFkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtcGFyZW50LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
    //
    // This program and the accompanying materials are made available
    // under the terms described in the LICENSE file which accompanies
    // this distribution. If the LICENSE file was not attached to this
    // distribution or for further clarifications, please contact
    // legal@nseit.com.


    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(router) {
        _classCallCheck(this, LayoutComponent);

        this.router = router;
        this.username = '';
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {}
      }, {
        key: "gotoPage",
        value: function gotoPage(pageName) {
          this.router.navigate([pageName]);
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout.component.scss */
      "./src/app/layout/layout.component.scss"))["default"]]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-expansion-panel {\n  min-width: 320px;\n  max-width: 400px;\n  margin: auto;\n  top: 100px;\n  position: relative;\n}\n\n.field mat-form-field {\n  width: 100%;\n}\n\n.button {\n  text-align: right;\n  font-size: 12px !important;\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoYS9EZXNrdG9wL3NlcnZlci9wcm9qZWN0L2NsaWVudC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FER0U7RUFDRSxXQUFBO0FDQUo7O0FESUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maWVsZCB7XG4gIG1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5idXR0b257XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgY29sb3I6IzNmNTFiNVxufVxuXG4iLCJtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maWVsZCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzNmNTFiNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _Service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Service/login.service */
    "./src/app/Service/login.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, dialog, login) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.dialog = dialog;
        this.login = login;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.forgot_password_flag = 'email';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgot_password_flag = 'email';
        }
      }, {
        key: "openDialogWithTemplateRef",
        value: function openDialogWithTemplateRef(templateRef) {
          this.dialog.open(templateRef, {
            disableClose: true
          });
        }
      }, {
        key: "canSubmit",
        value: function canSubmit() {
          return this.signInForm.valid;
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.login.login(this.signInForm.controls['user_id'].value, this.signInForm.controls['password'].value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
                      console.log(data); //TODO: add navigation
                    });
                    sessionStorage.setItem('login', 'true');
                    this.router.navigate(['dashboard']);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          if (this.forgot_password_flag == 'email') {
            this.forgot_password_flag = 'otp';
            return;
          }

          if (this.forgot_password_flag == 'otp') {
            this.forgot_password_flag = 'pass';
            return;
          }

          if (this.forgot_password_flag == 'pass') {
            this.forgot_password_flag = 'email';
            this.dialog.closeAll();
            return;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _Service_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageDlg', {
      "static": false
    })], LoginComponent.prototype, "messageDlg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forgotPassword', {
      "static": true
    })], LoginComponent.prototype, "editDialog", void 0);
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/shared.module.ts":
  /*!**********************************!*\
    !*** ./src/app/shared.module.ts ***!
    \**********************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dialog_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialog/message/message.component */
    "./src/app/dialog/message/message.component.ts");
    /**
     * Created by krishna on 26/2/20.
     */
    // Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
    //
    // This program and the accompanying materials are made available
    // under the terms described in the LICENSE file which accompanies
    // this distribution. If the LICENSE file was not attached to this
    // distribution or for further clarifications, please contact
    // legal@nseit.com.


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_dialog_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageDialogComponent"]],
      exports: [_dialog_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageDialogComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/anusha/Desktop/server/project/client/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
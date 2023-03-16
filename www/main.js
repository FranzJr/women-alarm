(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _providers_check_tutorial_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/check-tutorial.service */ 2756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        redirectTo: '/tutorial',
        pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 6868)).then(m => m.AccountModule)
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 2602)).then(m => m.SupportModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 7110)).then(m => m.SignUpModule)
    },
    {
        path: 'app',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs-page_tabs-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs-page.module */ 78)).then(m => m.TabsModule)
    },
    {
        path: 'tutorial',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tutorial_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tutorial/tutorial.module */ 140)).then(m => m.TutorialModule),
        canLoad: [_providers_check_tutorial_service__WEBPACK_IMPORTED_MODULE_0__.CheckTutorial]
    },
    {
        path: 'periodo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_periodo_periodo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/periodo/periodo.module */ 3568)).then(m => m.PeriodoPageModule)
    },
    {
        path: 'embarazo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_embarazo_embarazo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/embarazo/embarazo.module */ 9119)).then(m => m.EmbarazoPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/perfil/perfil.module */ 6217)).then(m => m.PerfilPageModule)
    },
    {
        path: 'metodo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_metodo_metodo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/metodo/metodo.module */ 499)).then(m => m.MetodoPageModule)
    },
    {
        path: 'casa',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_casa_casa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/casa/casa.module */ 3162)).then(m => m.CasaPageModule)
    },
    {
        path: 'personaliza',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_personaliza_personaliza_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/personaliza/personaliza.module */ 2951)).then(m => m.PersonalizaPageModule)
    },
    {
        path: 'olvido',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_olvido_olvido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/olvido/olvido.module */ 4201)).then(m => m.OlvidoPageModule)
    },
    {
        path: 'alarma-manual',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_alarma-manual_alarma-manual_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/alarma-manual/alarma-manual.module */ 406)).then(m => m.AlarmaManualPageModule)
    },
    {
        path: 'diario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_diario_diario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/diario/diario.module */ 7178)).then(m => m.DiarioPageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 4933);














class AppComponent {
    constructor(menu, platform, router, storage, userData, swUpdate, toastCtrl) {
        this.menu = menu;
        this.platform = platform;
        this.router = router;
        this.storage = storage;
        this.userData = userData;
        this.swUpdate = swUpdate;
        this.toastCtrl = toastCtrl;
        this.appPages = [
            {
                title: 'Schedule',
                url: '/app/tabs/schedule',
                icon: 'calendar'
            },
            {
                title: 'Speakers',
                url: '/app/tabs/speakers',
                icon: 'people'
            },
            {
                title: 'Map',
                url: '/app/tabs/map',
                icon: 'map'
            },
            {
                title: 'About',
                url: '/app/tabs/about',
                icon: 'information-circle'
            }
        ];
        this.loggedIn = false;
        this.dark = false;
        this.initializeApp();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.checkLoginStatus();
            this.listenForLoginEvents();
            this.swUpdate.available.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    message: 'Update available!',
                    position: 'bottom',
                    buttons: [
                        {
                            role: 'cancel',
                            text: 'Reload'
                        }
                    ]
                });
                yield toast.present();
                toast
                    .onDidDismiss()
                    .then(() => this.swUpdate.activateUpdate())
                    .then(() => window.location.reload());
            }));
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            if (this.platform.is('hybrid')) {
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.StatusBar.hide();
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.hide();
            }
        });
    }
    checkLoginStatus() {
        return this.userData.isLoggedIn().then(loggedIn => {
            return this.updateLoggedInStatus(loggedIn);
        });
    }
    updateLoggedInStatus(loggedIn) {
        setTimeout(() => {
            this.loggedIn = loggedIn;
        }, 300);
    }
    listenForLoginEvents() {
        window.addEventListener('user:login', () => {
            this.updateLoggedInStatus(true);
        });
        window.addEventListener('user:signup', () => {
            this.updateLoggedInStatus(true);
        });
        window.addEventListener('user:logout', () => {
            this.updateLoggedInStatus(false);
        });
    }
    logout() {
        this.userData.logout().then(() => {
            return this.router.navigateByUrl('/login');
        });
    }
    openTutorial() {
        this.menu.enable(false);
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_2__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 0, consts: [["contentId", "main-content", "when", "false"], ["contentId", "main-content"], ["lines", "none"], ["autoHide", "false"], ["routerLink", "/perfil", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/diario", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/support", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["button", "", "detail", "false", 3, "click"], ["id", "main-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 1)(3, "ion-content")(4, "ion-list", 2)(5, "ion-menu-toggle", 3)(6, "ion-item", 4)(7, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-menu-toggle", 3)(10, "ion-item", 5)(11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Diario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 3)(14, "ion-item", 6)(15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Intereses de Alarma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-menu-toggle", 3)(18, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "ion-router-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet], styles: ["ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n/* Remove background transitions for switching themes */\n\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwyRUFBQTtBQUFGOztBQUdBLHVEQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0FBQUY7O0FBR0E7O0NBQUE7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0RBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7O0VBRUUseUNBQUE7QUFKRjs7QUFPQTtFQUNFLDJEQUFBO0FBSkY7O0FBUUE7O0NBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xuaW9uLW1lbnUgaW9uLWl0ZW0ge1xuICAtLXRyYW5zaXRpb246IG5vbmU7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIE1lbnVcbiovXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcblxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcblxuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTAsICM1ZjYzNjgpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuXG4vKlxuICogaU9TIE1lbnVcbiovXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _generic_components_generic_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic-components/generic-components.module */ 6120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__.InAppBrowser], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _generic_components_generic_components_module__WEBPACK_IMPORTED_MODULE_4__.GenericComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _generic_components_generic_components_module__WEBPACK_IMPORTED_MODULE_4__.GenericComponentsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 9865:
/*!***********************************************************************!*\
  !*** ./src/app/generic-components/alarm-menu/alarm-menu.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmMenuComponent": () => (/* binding */ AlarmMenuComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _automatic_alarms_automatic_alarms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../automatic-alarms/automatic-alarms.component */ 5572);







const _c0 = ["modal2"];
function AlarmMenuComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function AlarmMenuComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AlarmMenuComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function AlarmMenuComponent_ion_modal_24_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_24_ng_template_1_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 26)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Establecer alarma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 24)(8, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_24_ng_template_1_Template_ion_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "12:05");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0Repetir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Una vez");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0Sonido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tono predeterminado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0Vibrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0Etiqueta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AlarmMenuComponent_ion_modal_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_24_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlarmMenuComponent_ion_modal_24_ng_template_1_Template, 31, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_25_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_25_ng_template_1_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 26)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Establecer alarma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 24)(8, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_25_ng_template_1_Template_ion_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "12:05");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0Repetir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Una vez");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0Sonido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tono predeterminado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0Vibrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0Etiqueta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AlarmMenuComponent_ion_modal_25_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_25_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlarmMenuComponent_ion_modal_25_ng_template_1_Template, 31, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_26_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_26_ng_template_1_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 26)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Establecer alarma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 24)(8, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_26_ng_template_1_Template_ion_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "12:05");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0Repetir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Una vez");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0Sonido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tono predeterminado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0Vibrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0Etiqueta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AlarmMenuComponent_ion_modal_26_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_26_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlarmMenuComponent_ion_modal_26_ng_template_1_Template, 31, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_27_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_27_ng_template_1_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 26)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Establecer alarma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 24)(8, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_27_ng_template_1_Template_ion_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "12:05");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0Repetir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Una vez");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0Sonido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tono predeterminado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0Vibrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0Etiqueta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AlarmMenuComponent_ion_modal_27_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_27_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlarmMenuComponent_ion_modal_27_ng_template_1_Template, 31, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function AlarmMenuComponent_ion_modal_30_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_30_ng_template_2_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r46.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 38)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mis alarmas autom\u00E1ticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-automatic-alarms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_30_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_30_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlarmMenuComponent_ion_modal_30_ng_template_2_Template, 8, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_31_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_31_ng_template_2_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r52.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 38)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mis alarmas autom\u00E1ticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-automatic-alarms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_31_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 39, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_31_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlarmMenuComponent_ion_modal_31_ng_template_2_Template, 8, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_32_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_32_ng_template_2_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r58.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 38)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mis alarmas autom\u00E1ticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-automatic-alarms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_32_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 40, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_32_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlarmMenuComponent_ion_modal_32_ng_template_2_Template, 8, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_33_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlarmMenuComponent_ion_modal_33_ng_template_2_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r64.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 38)(5, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mis alarmas autom\u00E1ticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-automatic-alarms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_ion_modal_33_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-modal", 41, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("willDismiss", function AlarmMenuComponent_ion_modal_33_Template_ion_modal_willDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.onWillDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlarmMenuComponent_ion_modal_33_ng_template_2_Template, 8, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlarmMenuComponent_p_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
class AlarmMenuComponent {
    constructor(router, modalController) {
        this.router = router;
        this.modalController = modalController;
        this.current = "";
        this.message = 'Cancelado';
    }
    ngOnInit() { }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    close() {
        console.log("close");
        this.modalController.dismiss();
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    confirm() {
        this.modal.dismiss("Guardado", 'confirm');
    }
    manual() {
        this.router.navigateByUrl('/alarma-manual');
    }
}
AlarmMenuComponent.ɵfac = function AlarmMenuComponent_Factory(t) { return new (t || AlarmMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController)); };
AlarmMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlarmMenuComponent, selectors: [["app-alarm-menu"]], viewQuery: function AlarmMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal2 = _t.first);
    } }, inputs: { current: "current" }, decls: 35, vars: 20, consts: [[1, "buttons-stage"], [1, "buttons-wa"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["trigger", "open-modal-casa", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-modal-embarazo", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-modal-periodo", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-modal-planificar", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-automatic-casa", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-automatic-embarazo", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-automatic-periodo", 3, "willDismiss", 4, "ngSwitchCase"], ["trigger", "open-automatic-planificar", 3, "willDismiss", 4, "ngSwitchCase"], ["id", "open-modal-embarazo", "expand", "block", 1, "btn-alarm"], ["src", "assets/img/icons/clock.png", "alt", "Cocinar"], ["id", "open-modal-casa", "expand", "block", 1, "btn-alarm"], ["id", "open-modal-periodo", "expand", "block", 1, "btn-alarm"], ["id", "open-modal-planificar", "expand", "block", 1, "btn-alarm"], ["id", "open-automatic-embarazo", "expand", "block", 1, "btn-alarm"], ["id", "open-automatic-casa", "expand", "block", 1, "btn-alarm"], ["id", "open-automatic-periodo", "expand", "block", 1, "btn-alarm"], ["id", "open-automatic-planificar", "expand", "block", 1, "btn-alarm"], ["trigger", "open-modal-casa", 3, "willDismiss"], [1, "ion-padding", "center", "alarm-bg"], ["size", "2"], ["name", "close", 2, "zoom", "1.5", 3, "click"], ["size", "8"], [2, "margin-top", "0px"], ["name", "checkmark", 2, "zoom", "1.5", 3, "click"], ["src", "assets/img/clock.png", "alt", "clock"], [1, "alarm-content"], ["src", "assets/img/icons/dot.png", "alt", "dot"], [1, "subtitle2"], ["trigger", "open-modal-embarazo", 3, "willDismiss"], ["trigger", "open-modal-periodo", 3, "willDismiss"], ["trigger", "open-modal-planificar", 3, "willDismiss"], ["trigger", "open-automatic-casa", 3, "willDismiss"], ["modal2", ""], ["size", "10"], ["trigger", "open-automatic-embarazo", 3, "willDismiss"], ["trigger", "open-automatic-periodo", 3, "willDismiss"], ["trigger", "open-automatic-planificar", 3, "willDismiss"]], template: function AlarmMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ion-row", 1)(2, "ion-col")(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AlarmMenuComponent_p_4_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AlarmMenuComponent_p_5_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AlarmMenuComponent_p_6_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AlarmMenuComponent_p_7_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AlarmMenuComponent_p_8_Template, 1, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col")(10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AlarmMenuComponent_p_11_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AlarmMenuComponent_p_12_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AlarmMenuComponent_p_13_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AlarmMenuComponent_p_14_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AlarmMenuComponent_p_15_Template, 1, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row")(17, "ion-col")(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Crea una alarma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col")(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Alarma autom\u00E1tica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AlarmMenuComponent_ion_modal_24_Template, 2, 0, "ion-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AlarmMenuComponent_ion_modal_25_Template, 2, 0, "ion-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AlarmMenuComponent_ion_modal_26_Template, 2, 0, "ion-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AlarmMenuComponent_ion_modal_27_Template, 2, 0, "ion-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AlarmMenuComponent_p_28_Template, 1, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AlarmMenuComponent_ion_modal_30_Template, 3, 0, "ion-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AlarmMenuComponent_ion_modal_31_Template, 3, 0, "ion-modal", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AlarmMenuComponent_ion_modal_32_Template, 3, 0, "ion-modal", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AlarmMenuComponent_ion_modal_33_Template, 3, 0, "ion-modal", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AlarmMenuComponent_p_34_Template, 1, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "planificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "planificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "planificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "planificar");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _automatic_alarms_automatic_alarms_component__WEBPACK_IMPORTED_MODULE_0__.AutomaticAlarmsComponent], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #EC5E90;\n  --color: white;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  background-color: white;\n  border: solid 1px;\n  color: black;\n  border-radius: 50px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYXJtLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImFsYXJtLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRUM1RTkwO1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuXG5cbmlvbi1pY29ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59Il19 */"] });


/***/ }),

/***/ 5572:
/*!***********************************************************************************!*\
  !*** ./src/app/generic-components/automatic-alarms/automatic-alarms.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutomaticAlarmsComponent": () => (/* binding */ AutomaticAlarmsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class AutomaticAlarmsComponent {
    constructor() { }
    ngOnInit() { }
}
AutomaticAlarmsComponent.ɵfac = function AutomaticAlarmsComponent_Factory(t) { return new (t || AutomaticAlarmsComponent)(); };
AutomaticAlarmsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutomaticAlarmsComponent, selectors: [["app-automatic-alarms"]], decls: 66, vars: 0, consts: [["lines", "none"], ["size", "7", 1, "clock"], ["size", "5", 1, "date"], ["size", "7", 1, "text"], ["size", "5"]], template: function AutomaticAlarmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 0)(1, "ion-item")(2, "ion-grid")(3, "ion-row")(4, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "12:03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "03/03/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pr\u00F3ximo Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 4)(12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item")(15, "ion-grid")(16, "ion-row")(17, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "12:03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "03/03/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row")(22, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pr\u00F3ximo Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col", 4)(25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-item")(28, "ion-grid")(29, "ion-row")(30, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "12:03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "03/03/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-row")(35, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pr\u00F3ximo Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-col", 4)(38, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-item")(41, "ion-grid")(42, "ion-row")(43, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12:03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "03/03/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-row")(48, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pr\u00F3ximo Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-col", 4)(51, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-item")(54, "ion-grid")(55, "ion-row")(56, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "12:03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "03/03/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pr\u00F3ximo Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ion-col", 4)(64, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCol], styles: ["a[_ngcontent-%COMP%] {\n  color: #FF9D60;\n}\n\nion-item[_ngcontent-%COMP%] {\n  color: #3D3A3B;\n  background-color: white;\n  border-radius: 10px;\n  border: solid 2px #FEC89A;\n  margin-bottom: 10px;\n}\n\n.clock[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 600;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9tYXRpYy1hbGFybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJhdXRvbWF0aWMtYWxhcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgY29sb3I6ICNGRjlENjA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBjb2xvcjogIzNEM0EzQjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICAjRkVDODlBO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jbG9jayB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"] });


/***/ }),

/***/ 6120:
/*!*****************************************************************!*\
  !*** ./src/app/generic-components/generic-components.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericComponentsModule": () => (/* binding */ GenericComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-menu/top-menu.component */ 1689);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _wa_menu_wa_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wa-menu/wa-menu.component */ 3051);
/* harmony import */ var _alarm_menu_alarm_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alarm-menu/alarm-menu.component */ 9865);
/* harmony import */ var _automatic_alarms_automatic_alarms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./automatic-alarms/automatic-alarms.component */ 5572);
/* harmony import */ var _web_left_menu_web_left_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-left-menu/web-left-menu.component */ 7763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class GenericComponentsModule {
}
GenericComponentsModule.ɵfac = function GenericComponentsModule_Factory(t) { return new (t || GenericComponentsModule)(); };
GenericComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GenericComponentsModule });
GenericComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GenericComponentsModule, { declarations: [_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_0__.TopMenuComponent,
        _wa_menu_wa_menu_component__WEBPACK_IMPORTED_MODULE_1__.WaMenuComponent,
        _alarm_menu_alarm_menu_component__WEBPACK_IMPORTED_MODULE_2__.AlarmMenuComponent,
        _automatic_alarms_automatic_alarms_component__WEBPACK_IMPORTED_MODULE_3__.AutomaticAlarmsComponent,
        _web_left_menu_web_left_menu_component__WEBPACK_IMPORTED_MODULE_4__.WebLeftMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule], exports: [_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_0__.TopMenuComponent,
        _wa_menu_wa_menu_component__WEBPACK_IMPORTED_MODULE_1__.WaMenuComponent,
        _alarm_menu_alarm_menu_component__WEBPACK_IMPORTED_MODULE_2__.AlarmMenuComponent,
        _automatic_alarms_automatic_alarms_component__WEBPACK_IMPORTED_MODULE_3__.AutomaticAlarmsComponent,
        _web_left_menu_web_left_menu_component__WEBPACK_IMPORTED_MODULE_4__.WebLeftMenuComponent] }); })();


/***/ }),

/***/ 1689:
/*!*******************************************************************!*\
  !*** ./src/app/generic-components/top-menu/top-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuComponent": () => (/* binding */ TopMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class TopMenuComponent {
    constructor() { }
    ngOnInit() { }
}
TopMenuComponent.ɵfac = function TopMenuComponent_Factory(t) { return new (t || TopMenuComponent)(); };
TopMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopMenuComponent, selectors: [["app-top-menu"]], decls: 7, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start", "src", "assets/img/appicon.png", "alt", "Ionic Logo", 1, "logo-wa"], ["slot", "end"]], template: function TopMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dianna Massiris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenuButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3051:
/*!*****************************************************************!*\
  !*** ./src/app/generic-components/wa-menu/wa-menu.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaMenuComponent": () => (/* binding */ WaMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0) { return { "active": a0 }; };
class WaMenuComponent {
    constructor(router) {
        this.router = router;
        this.current = "";
    }
    ngOnInit() { }
    periodo() {
        this.router.navigate(['/periodo']);
    }
    embarazo() {
        this.router.navigate(['/embarazo']);
    }
    planificar() {
        this.router.navigate(['/metodo']);
    }
    casa() {
        this.router.navigate(['/casa']);
    }
}
WaMenuComponent.ɵfac = function WaMenuComponent_Factory(t) { return new (t || WaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
WaMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaMenuComponent, selectors: [["app-wa-menu"]], inputs: { current: "current" }, decls: 27, vars: 12, consts: [[1, "menu"], [1, "buttons-wa"], [1, "btn-wa-tabs", "periodo", 3, "ngClass", "click"], ["src", "assets/img/icons/periodo.png", "alt", "Periodo"], [1, "btn-wa-tabs", "planificar", 3, "ngClass", "click"], ["src", "assets/img/icons/planificar.png", "alt", "Planificar"], [1, "btn-wa-tabs", "casa", 3, "ngClass", "click"], ["src", "assets/img/icons/casa.png", "alt", "Casa"], [1, "btn-wa-tabs", "embarazo", 3, "ngClass", "click"], ["src", "assets/img/icons/embarazo.png", "alt", "Embarazo"], [1, "buttons-wa-text"]], template: function WaMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ion-row", 1)(2, "ion-col")(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaMenuComponent_Template_a_click_3_listener() { return ctx.periodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaMenuComponent_Template_a_click_6_listener() { return ctx.planificar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col")(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaMenuComponent_Template_a_click_9_listener() { return ctx.casa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaMenuComponent_Template_a_click_12_listener() { return ctx.embarazo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row", 10)(15, "ion-col")(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col")(19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Planificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col")(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col")(25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.current === "periodo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.current === "planificar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.current === "casa"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.current === "embarazo"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YS1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7763:
/*!*****************************************************************************!*\
  !*** ./src/app/generic-components/web-left-menu/web-left-menu.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebLeftMenuComponent": () => (/* binding */ WebLeftMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = function (a0) { return { "active": a0 }; };
class WebLeftMenuComponent {
    constructor(router) {
        this.router = router;
        this.current = "";
    }
    ngOnInit() { }
    periodo() {
        this.router.navigate(['/periodo']);
    }
    embarazo() {
        this.router.navigate(['/embarazo']);
    }
    planificar() {
        this.router.navigate(['/metodo']);
    }
    casa() {
        this.router.navigate(['/casa']);
    }
}
WebLeftMenuComponent.ɵfac = function WebLeftMenuComponent_Factory(t) { return new (t || WebLeftMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
WebLeftMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebLeftMenuComponent, selectors: [["app-web-left-menu"]], inputs: { current: "current" }, decls: 17, vars: 12, consts: [[1, "menu-web"], [1, "btn-wa-tabs", "periodo", 3, "ngClass", "click"], ["src", "assets/img/icons/periodo.png", "alt", "Periodo"], [1, "btn-wa-tabs", "planificar", 3, "ngClass", "click"], ["src", "assets/img/icons/planificar.png", "alt", "Planificar"], [1, "btn-wa-tabs", "casa", 3, "ngClass", "click"], ["src", "assets/img/icons/casa.png", "alt", "Casa"], [1, "btn-wa-tabs", "embarazo", 3, "ngClass", "click"], ["src", "assets/img/icons/embarazo.png", "alt", "Embarazo"]], template: function WebLeftMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebLeftMenuComponent_Template_a_click_1_listener() { return ctx.periodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebLeftMenuComponent_Template_a_click_5_listener() { return ctx.planificar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Planificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebLeftMenuComponent_Template_a_click_9_listener() { return ctx.casa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebLeftMenuComponent_Template_a_click_13_listener() { return ctx.embarazo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.current === "periodo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.current === "planificar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.current === "casa"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.current === "embarazo"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWItbGVmdC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2756:
/*!*****************************************************!*\
  !*** ./src/app/providers/check-tutorial.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTutorial": () => (/* binding */ CheckTutorial)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





class CheckTutorial {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canLoad() {
        return this.storage.get('ion_did_tutorial').then(res => {
            if (res) {
                this.router.navigate(['/app', 'tabs', 'schedule']);
                return false;
            }
            else {
                return true;
            }
        });
    }
}
CheckTutorial.ɵfac = function CheckTutorial_Factory(t) { return new (t || CheckTutorial)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CheckTutorial.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckTutorial, factory: CheckTutorial.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6401:
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 7045);



class UserData {
    constructor(storage) {
        this.storage = storage;
        this.favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    hasFavorite(sessionName) {
        return (this.favorites.indexOf(sessionName) > -1);
    }
    addFavorite(sessionName) {
        this.favorites.push(sessionName);
    }
    removeFavorite(sessionName) {
        const index = this.favorites.indexOf(sessionName);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
    }
    login(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:login'));
        });
    }
    signup(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:signup'));
        });
    }
    logout() {
        return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
            return this.storage.remove('username');
        }).then(() => {
            window.dispatchEvent(new CustomEvent('user:logout'));
        });
    }
    setUsername(username) {
        return this.storage.set('username', username);
    }
    getUsername() {
        return this.storage.get('username').then((value) => {
            return value;
        });
    }
    isLoggedIn() {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            return value === true;
        });
    }
    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value;
        });
    }
}
UserData.ɵfac = function UserData_Factory(t) { return new (t || UserData)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage)); };
UserData.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserData, factory: UserData.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 8305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		8404,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
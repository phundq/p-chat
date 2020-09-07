"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainLayoutComponent = void 0;
var core_1 = require("@angular/core");
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(authStoreFacade, router) {
        this.authStoreFacade = authStoreFacade;
        this.router = router;
        this.isLoginSuccess = false;
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStoreFacade.selectAuthFeature().subscribe(function (userFeature) {
            _this.isLoginSuccess = userFeature.isLoginSuccess;
            if (_this.isLoginSuccess) {
                _this.router.navigate(['\home']);
            }
            else {
                _this.router.navigate(['\login']);
            }
        });
    };
    MainLayoutComponent.prototype.handerClickLoginOrLogout = function () {
        console.log(this.isLoginSuccess);
        if (!this.isLoginSuccess) {
            this.router.navigate(['\login']);
        }
        else {
            this.authStoreFacade.logout();
        }
    };
    MainLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-main-layout',
            templateUrl: './main-layout.component.html',
            styleUrls: ['./main-layout.component.scss']
        })
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
exports.MainLayoutComponent = MainLayoutComponent;

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global.lib01 = {}),global.ng.core,global.ng.common,global.ng.router));
}(this, (function (exports,core,common,router) { 'use strict';

var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
    }
    /**
     * @return {?}
     */
    PublicComponent.prototype.ngOnInit = function () {
    };
    return PublicComponent;
}());
PublicComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-public',
                template: "\n    <h1>public works!</h1>\n  ",
                styles: ["\n    h1 {\n        color: red;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
PublicComponent.ctorParameters = function () { return []; };
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    return PublicModule;
}());
PublicModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    router.RouterModule.forChild([
                        { path: '', component: PublicComponent },
                    ])
                ],
                declarations: [PublicComponent],
                exports: [PublicComponent]
            },] },
];
/**
 * @nocollapse
 */
PublicModule.ctorParameters = function () { return []; };

exports.PublicModule = PublicModule;
exports.ɵa = PublicComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib01.umd.js.map

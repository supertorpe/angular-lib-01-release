import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
        this.message = 'Public rocks!!';
    }
    /**
     * @return {?}
     */
    PublicComponent.prototype.ngOnInit = function () {
    };
    return PublicComponent;
}());
PublicComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-public',
                template: "\n    <h1>{{message}}</h1>\n  ",
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild([
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
/**
 * Generated bundle index. Do not edit.
 */
export { PublicModule, PublicComponent as ɵa };
//# sourceMappingURL=lib01.es5.js.map

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

class PublicComponent {
    constructor() {
        this.message = 'Public rocks!!';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PublicComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-public',
                template: `
    <h1>{{message}}</h1>
  `,
                styles: [`
    h1 {
      color: blue; }
  `]
            },] },
];
/**
 * @nocollapse
 */
PublicComponent.ctorParameters = () => [];

class PublicModule {
}
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
PublicModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { PublicModule, PublicComponent as ɵa };
//# sourceMappingURL=lib01.js.map

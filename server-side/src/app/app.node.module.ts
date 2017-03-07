/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {UniversalModule} from 'angular2-universal';
import {FormsModule} from '@angular/forms';
// import {RouterModule} from '@angular/router';
import {AppComponent} from './index';

// import { appRoutes } from './app/app.routing';

// import { Demo1Component} from './demo1/demo1.component';
// import { Demo2Component} from './demo2/demo2.component'
// import { Demo3Component} from './demo3/demo3.component'

/**
 * Top-level NgModule "container"
 */
@NgModule({
    /** Root App Component */
    bootstrap: [
        AppComponent
    ],
    /** Our Components */
    declarations: [
       AppComponent //,
       // Demo1Component,
       // Demo2Component,
       // Demo3Component,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        /**
         * NOTE: Needs to be your first import (!)
         * NodeModule, NodeHttpModule, NodeJsonpModule are included
         */
        UniversalModule,
        FormsModule //,

        /**
         * using routes
         */
         // RouterModule.forRoot([
         //     { path: 'demo1', component: Demo1Component },
         //     { path: 'demo2', component: Demo2Component },
         //     { path: 'demo3', component: Demo3Component },
         //     {
         //         path: '',
         //         redirectTo: '/demo1',
         //         pathMatch: 'full'
         //     }
         // ])
    ]

})
export class AppModule {

}

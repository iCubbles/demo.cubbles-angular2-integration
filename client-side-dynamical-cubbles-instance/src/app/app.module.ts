import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { getBaseUrl } from './baseurl.util';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';

const appRoutes: Routes = [
  { path: 'demo1', component: Demo1Component },
  {
    path: '',
    redirectTo: '/demo1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

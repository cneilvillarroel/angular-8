
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';








// Material components
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
    ]
})
export class PagesModule { }

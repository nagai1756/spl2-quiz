import { BrowserModule } from '@angular/platform-browser';
import { ResultPageComponent } from './result-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultPageRoutingModule } from './result-page-routing.module';


@NgModule({
  declarations: [
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    ResultPageRoutingModule
  ]
})
export class ResultPageModule { }

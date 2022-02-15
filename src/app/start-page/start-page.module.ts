import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
  ]
})
export class StartPageModule { }

import { BsModalService } from 'ngx-bootstrap/modal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { SplQuizComponent } from './spl-quiz.component';
import { NgModule } from '@angular/core';
import { SplQuizRoutingModule } from './spl-quiz-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SplQuizComponent,
  ],
  imports: [
    SplQuizRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers:[
    BsModalService,
  ]
})
export class SplQuizModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplQuizComponent } from './spl-quiz.component';

const routes: Routes = [
  {
    path:'',
    component: SplQuizComponent,
  },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplQuizRoutingModule { }

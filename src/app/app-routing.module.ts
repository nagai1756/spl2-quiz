import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'start-page',
    loadChildren: () =>
      import('./start-page/start-page.module').then((m) => m.StartPageModule),
  },
  { path: 'spl-quiz',
  loadChildren: () =>
      import('./spl-quiz/spl-quiz.module').then((m) => m.SplQuizModule),
  },
  { path: 'result-page',
  loadChildren: () =>
      import('./result-page/result-page.module').then((m) => m.ResultPageModule),
  },
  // {path:'',redirectTo:'start-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


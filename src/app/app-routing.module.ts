import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MorphComponent } from './components/morph/morph.component';


const routes: Routes = [
  {
    path: '',
    component: MorphComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

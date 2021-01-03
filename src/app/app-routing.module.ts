import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Group2Component } from './group2/group2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'group', component:Group2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

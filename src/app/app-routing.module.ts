import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Group2Component } from './group2/group2.component';
import { AppComponent } from './app.component';
import { GroupSearchComponent } from './group-search/group-search.component';

const routes: Routes = [
  {path:"group1", component:GroupSearchComponent},
  {path:"group2", component:Group2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

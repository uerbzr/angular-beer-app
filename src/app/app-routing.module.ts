import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './beers/list/list.component';
import { AddComponent } from './beers/add/add.component';
import { ViewComponent } from './beers/view/view.component';

const routes: Routes = [
  { path: 'beers', component: ListComponent },
  { path: 'beers/add', component: AddComponent },
  { path: 'beers/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

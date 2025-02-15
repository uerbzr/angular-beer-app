import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './beers/list/list.component';
import { AddComponent } from './beers/add/add.component';
import { ViewComponent } from './beers/view/view.component';
import { EditComponent } from './beers/edit/edit.component';

const routes: Routes = [
  { path: 'beers', component: ListComponent },
  { path: 'beers/add', component: AddComponent },
  { path: 'beers/:id', component: ViewComponent },
  { path: 'beers/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

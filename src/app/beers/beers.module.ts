import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  exports: [AddComponent, ListComponent, ViewComponent],
})
export class BeersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTestComponent } from './lazy-test.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: LazyTestComponent
  },
];

@NgModule({
  declarations: [
    LazyTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyTestModule { }

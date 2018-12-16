import { Page2Component } from './page2/page2.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Bootstrap1Component } from './bootstrap1/bootstrap1.component';

const routes: Routes = [
  { path: 'page1', component: MybuttonComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'bootstrap1', component: Bootstrap1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

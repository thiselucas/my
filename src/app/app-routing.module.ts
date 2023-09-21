import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';

const routes: Routes = [
  {path: '', component: NavmenuComponent, title: 'Lucas Escoto da Luz'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

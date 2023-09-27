import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Lucas Escoto da Luz'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

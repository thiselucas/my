import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Lucas Escoto da Luz' },
  { path: 'profissional',component: WorksComponent, title: 'Histórico Profissional'},
  { path: 'projetos', component: ProjectsComponent, title: 'Projetos' },
  { path: 'conversar', component: EmailComponent, title: 'Me envie uma mensagem'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

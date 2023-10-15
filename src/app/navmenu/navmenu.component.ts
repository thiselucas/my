import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { PersonalInformationComponent } from 'app/personal-information/personal-information.component';
import { WorksComponent } from 'app/works/works.component';
import { EmailComponent } from 'app/email/email.component';
import { ProjectsComponent } from 'app/projects/projects.component';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    FooterComponent,
    PersonalInformationComponent,
    WorksComponent,
    EmailComponent,
    ProjectsComponent
  ],
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
})
export class  NavmenuComponent {

  constructor(private el: ElementRef) {}

  scrollToSection(sectionId: string) {
    const element = this.el.nativeElement.querySelector('#' + sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

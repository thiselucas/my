import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule, NavmenuComponent, FooterComponent, WorksComponent],
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {

}

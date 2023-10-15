import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorksComponent } from '../works/works.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule, NavmenuComponent, FooterComponent, WorksComponent],
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  showVideo = false;
  videoUrl: SafeResourceUrl = '';


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Marque a URL do vídeo como segura
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/LucasEscotoDaLuz_Envio-De-Email-React_ Aplicação simples para envio de e-mail utilizando React - Google Chrome 2023-02-28 18-55-46.mp4');
  }

  toggleVideo() {
    this.showVideo = !this.showVideo;
  }


}

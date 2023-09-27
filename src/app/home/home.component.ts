import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ProgressBarService } from '../progress-bar.service';
import { WorksComponent } from '../works/works.component';
import { NavmenuComponent } from '../navmenu/navmenu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FooterComponent, WorksComponent, NavmenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() textContent: string = 'Sou o Lucas, Full Stack Developer'
  showProgressBar = true;
  showWelcomeMessage = false;
  progressValue = 0;

  constructor(private progressBarService: ProgressBarService) {}

  ngOnInit() {
    this.progressBarService.startProgressBar(4.5); // Inicia a barra de progresso por 5 segundos

    this.progressBarService.progress.subscribe((value) => {
      this.progressValue = value;
      if (value === 100) {
        setTimeout(() => {
          this.showProgressBar = false; // Esconde a barra de progresso após 5 segundos
          this.showWelcomeMessage = true; // Exibe a mensagem de boas-vindas
        }, 2000);
      }
    });
  }



}

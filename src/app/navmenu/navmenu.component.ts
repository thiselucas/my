import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [CommonModule, RouterLink, MatToolbarModule, MatIconModule, RouterModule, FooterComponent, ],
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
})
export class NavmenuComponent {
  isMenuOpen = false;

  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.isMenuOpen && !this.el.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}

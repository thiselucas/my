import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

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
  ],
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
})
export class NavmenuComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const links = this.el.nativeElement.querySelectorAll(".nav-menu a");

    links.forEach((link: HTMLAnchorElement) => {
      const targetId = link.getAttribute("href")?.substring(1); // Remove the "#" from href
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          this.renderer.setStyle(link, 'color', getComputedStyle(targetElement).color);
        } else {
          // Set a default color if the element is not visible
          this.renderer.setStyle(link, 'color', '#fff');
        }
      }
    });
  }
}

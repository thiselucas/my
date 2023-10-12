import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from 'app/footer/footer.component';
import { NavmenuComponent } from 'app/navmenu/navmenu.component';
import { WorksComponent } from 'app/works/works.component';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavmenuComponent,
    FooterComponent,
    WorksComponent,
    MatIconModule,
    MatSnackBarModule,
  ],
  template: `
    <div id="email" class="email-container">
      <h1 class="topline">Me envie uma mensagem &#9660;</h1>
      <div class="form-container">
        <form class="form" (submit)="sendEmail()">
          <input
            class="input"
            type="text"
            placeholder="Digite seu nome"
            [(ngModel)]="name"
            name="name"
          />

          <input
            class="input"
            type="text"
            placeholder="Digite seu email"
            [(ngModel)]="email"
            name="email"
          />

          <textarea
            class="textarea"
            placeholder="Digite sua mensagem..."
            [(ngModel)]="message"
            name="message"
          ></textarea>

          <input class="button" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
    <div class="snackbar" *ngIf="isMessageSent">
      <ng-container *ngIf="isMessageSent">
        <button
          mat-icon-button
          class="close-button"
          (click)="dismissSnackbar()"
        >
          <mat-icon>close</mat-icon>
        </button>
        Mensagem enviada!
      </ng-container>
    </div>
  `,
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';
  isMessageSent: boolean = false;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  sendEmail() {
    if (this.name === '' || this.email === '' || this.message === '') {
      alert('Preencha todos os campos.');
      return;
    }

    this._snackBar.open('Mensagem enviada!', 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

    this.name = '';
    this.email = '';
    this.message = '';
  }
  dismissSnackbar() {
    this.isMessageSent = false;
  }
}

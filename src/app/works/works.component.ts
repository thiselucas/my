import { EstagioPrefaComponent } from './../estagio-prefa/estagio-prefa.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProgramadorComponent } from '../programador/programador.component';
import { AnalistaComponent } from '../analista/analista.component';
import { EstagioCraComponent } from '../estagio-cra/estagio-cra.component';
import { AgtHmdComponent } from '../agt-hmd/agt-hmd.component';
import { EstagioPrefa2Component } from '../estagio-prefa2/estagio-prefa2.component';
import { EstagioEptcComponent } from '../estagio-eptc/estagio-eptc.component';
import { EstagioDigifileComponent } from '../estagio-digifile/estagio-digifile.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    CommonModule,
    NavmenuComponent,
    FooterComponent,
    RouterModule,
    RouterLink,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    CarouselModule,
  ],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent {
  isExpanded = false;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}
  @Input() textContent2: string = 'Assunto: Apresentação Profissional';
  @Input() textContent: string = 'Confira minhas experiências profissionais:';

  mostrarCaixaDeTexto1 = false;
  mostrarCaixaDeTexto2 = false;
  mostrarCaixaDeTexto3 = false;
  mostrarCaixaDeTexto4 = false;
  mostrarCaixaDeTexto5 = false;
  mostrarCaixaDeTexto6 = false;
  mostrarCaixaDeTexto7 = false;
  mostrarCaixaDeTexto8 = false;
  mostrarCaixaDeTexto9 = false;

  openDialog(num: number) {
    if (num === 1) {
      this.mostrarCaixaDeTexto1 = !this.mostrarCaixaDeTexto1;
      const dialogRef = this.dialog.open(ProgramadorComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num === 2) {
      this.mostrarCaixaDeTexto1 = !this.mostrarCaixaDeTexto1;
      const dialogRef = this.dialog.open(AnalistaComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num === 3) {
      this.mostrarCaixaDeTexto3 = !this.mostrarCaixaDeTexto3;
      const dialogRef = this.dialog.open(EstagioCraComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num == 4) {
      this.mostrarCaixaDeTexto4 = !this.mostrarCaixaDeTexto4;
      const dialogRef = this.dialog.open(EstagioPrefaComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num == 5) {
      this.mostrarCaixaDeTexto5 = !this.mostrarCaixaDeTexto5;
      const dialogRef = this.dialog.open(AgtHmdComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num == 6) {
      this.mostrarCaixaDeTexto6 = !this.mostrarCaixaDeTexto6;
      const dialogRef = this.dialog.open(EstagioEptcComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num == 7) {
      this.mostrarCaixaDeTexto7 = !this.mostrarCaixaDeTexto7;
      const dialogRef = this.dialog.open(EstagioPrefa2Component);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (num == 8) {
      this.mostrarCaixaDeTexto8 = !this.mostrarCaixaDeTexto8;
      const dialogRef = this.dialog.open(EstagioDigifileComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  downloadFile() {
    const inProgressSnackBarRef = this.snackBar.open(
      'Iniciando o download...',
      'Fechar',
      {
        duration: 2000,
      }
    );

    setTimeout(() => {
      this.snackBar.open('Download finalizado!', 'Fechar', {
        duration: 2000,
      });

      const fileName = 'Curriculo_Lucas_Escoto_da_Luz.pdf';
      const fileUrl =
        '../../assets/docs/Lucas Escoto da Luz - Curriculo Atualizado.pdf';
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      a.click();
    }, 2000);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from '../footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, MatGridListModule, NavmenuComponent, MatTabsModule, MatExpansionModule, FooterComponent, MatFormFieldModule,
     MatStepperModule, FormsModule, MatCardModule ],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent  {
  passoAberto: number | null = null; // Inicialmente nenhum passo aberto
  periodo: string = '';
  remuneracao: string = '';
  atividades: string = '';

  periodo2: string = '';
  remuneracao2: string = '';
  atividades2: string = '';


  periodo3: string = '';
  remuneracao3: string = '';
  atividades3: string = '';

  periodo4: string = '';
  remuneracao4: string = '';
  atividades4: string = '';

  periodo5: string = '';
  remuneracao5: string = '';
  atividades5: string = '';

  periodo6: string = '';
  remuneracao6: string = '';
  atividades6: string = '';

  periodo7: string = '';
  remuneracao7: string = '';
  atividades7: string = '';

  periodo8: string = '';
  remuneracao8: string = '';
  atividades8: string = '';

  abrirCard(passo: number) {
    if (this.passoAberto === passo) {
      // Se o mesmo passo for clicado novamente, feche o card
      this.passoAberto = null;
    } else {
      this.passoAberto = passo;
    }
  }
  }
  // mostrarCaixaDeTexto1 = false;
  // mostrarCaixaDeTexto2 = false;
  // mostrarCaixaDeTexto3 = false;
  // mostrarCaixaDeTexto4 = false;
  // mostrarCaixaDeTexto5 = false;
  // mostrarCaixaDeTexto6 = false;
  // mostrarCaixaDeTexto7 = false;
  // mostrarCaixaDeTexto8 = false;

  // toggleCaixaDeTexto(num: number) {
  //   if (num === 1) {
  //     this.mostrarCaixaDeTexto1 = !this.mostrarCaixaDeTexto1;

  //   } else if (num === 2) {
  //     this.mostrarCaixaDeTexto2 = !this.mostrarCaixaDeTexto2;

  //   } else if (num === 3) {
  //     this.mostrarCaixaDeTexto3 = !this.mostrarCaixaDeTexto3;

  //   } else if(num == 4) {
  //     this.mostrarCaixaDeTexto4 = !this.mostrarCaixaDeTexto4;
  //   } else if(num == 5) {
  //     this.mostrarCaixaDeTexto5 = !this.mostrarCaixaDeTexto5;
  //   } else if(num == 6) {
  //     this.mostrarCaixaDeTexto6 = !this.mostrarCaixaDeTexto6;
  //   } else if(num == 7) {
  //     this.mostrarCaixaDeTexto7 = !this.mostrarCaixaDeTexto7;
  //   } else if(num == 8) {
  //     this.mostrarCaixaDeTexto8 = !this.mostrarCaixaDeTexto8;
  //   }

  // }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-consolacao',
  imports: [CommonModule],
  templateUrl: './consolacao.html',
  styleUrl: './consolacao.css',
})
export class Consolacao {
  constructor(private router: Router) {}

  btnBack() {
    console.log('Voltando para a tela de boas-vindas');
    this.router.navigate(['/welcome']);
  }

  btnPrint() {
    this.router.navigate(['/impressao']);
  }
}

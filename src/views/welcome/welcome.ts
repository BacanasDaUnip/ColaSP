import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  showOptions = false;
  options = ['Sé', 'Consolação', 'Penha'];

  constructor(private router: Router) {}

  btnHelp() {
    this.router.navigate(['/help-page']);
  }

  toggle() {
    this.showOptions = !this.showOptions;
  }

  select(option: string) {
    console.log('Destino selecionado:', option);
    const map: Record<string, string> = {
      Sé: '/se',
      Consolação: '/consolacao',
    };

    const path = map[option] ?? null;
    this.showOptions = false;

    if (path) {
      this.router.navigate([path]);
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-se',
  imports: [CommonModule],
  templateUrl: './se.html',
  styleUrl: './se.css',
})
export class Se {
  constructor(private router: Router) {}

  btnBack() {
    this.router.navigate(['/welcome']);
  }

  btnPrint() {
    this.router.navigate(['/impressao']);
  }
}

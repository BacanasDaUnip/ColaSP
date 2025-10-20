import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  imports: [],
  templateUrl: './print.html',
  styleUrl: './print.css',
})
export class Print {
  constructor(private router: Router) {}

  btnBack() {
    this.router.navigate(['/welcome']);
  }
}

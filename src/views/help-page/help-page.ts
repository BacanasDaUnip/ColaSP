import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  imports: [],
  templateUrl: './help-page.html',
  styleUrl: './help-page.css',
})
export class HelpPage {
  constructor(private router: Router) {}

  btnBack() {
    this.router.navigate(['/welcome']);
  }
}

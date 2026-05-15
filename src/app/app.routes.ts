import { Routes } from '@angular/router';
import { Welcome } from '../views/welcome/welcome';
import { Se } from '../views/caminhos/se/se';
import { Consolacao } from '../views/caminhos/consolacao/consolacao';
import { Print } from '../views/print/print';
import { HelpPage } from '../views/help-page/help-page';

export const routes: Routes = [
  { path: '', component: Welcome, pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'se', component: Se },
  { path: 'consolacao', component: Consolacao },
  { path: 'impressao', component: Print },
  { path: 'help-page', component: HelpPage },
];

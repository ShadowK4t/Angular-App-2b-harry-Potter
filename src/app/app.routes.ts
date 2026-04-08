import { Routes } from '@angular/router';
import { Characterlist } from './components/characterlist/characterlist';
import { Characterfilter } from './components/characterfilter/characterfilter';
import { Characterdetails } from './components/characterdetails/characterdetails';

export const routes: Routes = [
  { path: '', component: Characterlist },
  { path: 'filter', component: Characterfilter },
  { path: 'character/:id', component: Characterdetails },
];
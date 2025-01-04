import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '', // Default route
    component: HomeComponent, // Load the HomeComponent
    title: 'Lost & Found QR Stickers', // Page title
  },
  {
    path: '**', // Wildcard route for 404 errors
    redirectTo: '', // Redirect to the default route
  },
];

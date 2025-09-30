import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home)
        }
    },
    {
        path: 'profile',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./profile-page/profile-page').then((m) => m.ProfilePage)
        }
    }
];

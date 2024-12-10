import { Routes } from '@angular/router';
import { HomeComponent } from './views/home';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: HomeComponent
    },
    {
        path: "about",
        loadChildren: () => import('./views/about/about.routes').then(routes => routes.AboutRoutes),
    },
    {
        path: "reporting",
        loadChildren: () => import('./views/reporting/reporting.module').then(module => module.ReportingModule)
    },
    {
        path: "settings",
        loadChildren: () => import('./views/settings/settings.routes').then(routes => routes.SettingsRoutes)
    },
    
];

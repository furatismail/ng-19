import { Routes } from "@angular/router";

export const AboutRoutes: Routes = [
    {
        path: "team",
        loadComponent: () => import('./team/team.component').then(component => component.TeamComponent)
    },
    {
        path: "company",
        loadComponent: () => import('./company/company.component').then(component => component.CompanyComponent),
    },
    {
        path: "",
        redirectTo: "company",
        pathMatch: "full"
    }
]
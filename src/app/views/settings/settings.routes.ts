import { Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";

export const SettingsRoutes: Routes = [
    {
        //settings
        path: "",
        component: OverviewComponent,
        children: [
            // {
            //     path: "",
            //     pathMatch: "full",
            //     redirectTo: "panel"
            // },
            {
                path: "panel",
                loadComponent: () => import('./panel/panel.component').then(component => component.PanelComponent),
            },
            {
                path: "statistics/:statId",
                loadComponent: () => import('./statistics/statistics.component').then(component => component.StatisticsComponent),
            }
        ]
    }
]
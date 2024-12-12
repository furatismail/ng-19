import { Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { ContentComponent } from './components/content/content.component';
import { ReactiveUserComponent } from './views/form/reactive-user/reactive-user.component';
import { UserComponent } from './views/form/user/user.component';
import { HomeComponent } from './views/home';
import { LoginComponent } from './views/login/login.component';
import { SkillsFormComponent } from './views/skills/skills.component';
import { DetailComponent } from './views/users/detail/detail.component';

export const routes: Routes = [

    {
        path: 'system',
        component: ContentComponent,
        children: [
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
            {
                path: "user",
                component: UserComponent
            },
            {
                path: "detail",
                component: DetailComponent
            },
            {
                path: "reactive-user",
                component: ReactiveUserComponent
            },
            {
                path: "skills",
                component: SkillsFormComponent
            },
        ]
    },
    {
        path: '',
        component: BlankComponent,
        children: [
            {
                path: "",
                component: LoginComponent
            },
        ]
    }
   

];

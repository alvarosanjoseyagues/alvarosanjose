import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlvaroGarciaComponent } from './components/alvaro-garcia/alvaro-garcia.component';
import { VicenteAlacreuComponent } from './components/vicente-alacreu/vicente-alacreu.component';
import { MarcosGomezComponent } from './marcos-gomez/marcos-gomez.component';
import { JorgeEscrichLaordenComponent } from './components/jorge-escrich-laorden/jorge-escrich-laorden.component';
import { AlfonsoComponent } from './components/alfonso/alfonso.component';



export const routes: Routes = [
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    {path: 'AlvaroGarcia',component:AlvaroGarciaComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    { path: 'VicenteAlc', component: VicenteAlacreuComponent }, // is OK
    {path: 'home', component: HomeComponent},
    {path: 'jorge-escrich-laorden', component: JorgeEscrichLaordenComponent},
    {path: 'navbar', component: NavbarComponent},
    { path: 'Alfonso', component: AlfonsoComponent},
    { path: '**', component: PageNotFoundComponent }, 
    
];
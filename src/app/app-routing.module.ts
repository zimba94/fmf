import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { GeneratePDFComponent } from './pages/generate-pdf/generate-pdf.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'wizard', component: WizardComponent},
      {path: 'generatePDF', component: GeneratePDFComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot( routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

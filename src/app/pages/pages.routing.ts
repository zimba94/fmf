import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { WizardComponent } from './wizard/wizard.component';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';

const routes: Routes = [

    {
        path: 'home', 
        component: PagesComponent,
        children: [
          {path: '', component: HomeComponent},
          {path: 'wizard', component: WizardComponent},
          {path: 'generatePDF', component: GeneratePDFComponent},
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

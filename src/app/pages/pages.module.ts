import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { HomeComponent } from './home/home.component';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    WizardComponent,
    GeneratePDFComponent,
    PagesComponent,
  ],
  exports: [
    HomeComponent,
    WizardComponent,
    GeneratePDFComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule ,
    MatInputModule,
    MatButtonModule
  ]
})
export class PagesModule { }

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstNameCtrl: ['', Validators.required],
    lastNameCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    addressCtrl: ['', Validators.required],
  });
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}

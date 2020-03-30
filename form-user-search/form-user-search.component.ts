import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserValidators} from './user.validator';

@Component({
  selector: 'app-form-user-search',
  templateUrl: './form-user-search.component.html',
  styleUrls: ['./form-user-search.component.scss']
})
export class FormUserSearchComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserValidators
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [
        // initial value
        null,
        // sync built-in validators
        Validators.compose(
          [ Validators.required, Validators.minLength(3) ],
        ),
        // custom async validator
        this.service.userValidator()
      ],
    });
  }

  save() {
    console.log('save to db');
  }
}


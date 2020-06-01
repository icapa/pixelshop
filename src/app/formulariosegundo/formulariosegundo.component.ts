import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ValidateUrl} from '../validatos/url.validators';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup;

  mipattern = '[a-z]*';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['Mi usuario', [Validators.required, Validators.minLength(3), Validators.pattern(this.mipattern)]],
      password: ['', Validators.required],
      url: ['', [Validators.required, ValidateUrl]]
    });
  }
  onSubmit(_datosForm){
    console.log(_datosForm);
  }
}

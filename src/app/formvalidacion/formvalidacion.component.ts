import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '../validatos/email.validators';
@Component({
  selector: 'app-formvalidacion',
  templateUrl: './formvalidacion.component.html',
  styleUrls: ['./formvalidacion.component.css']
})
export class FormvalidacionComponent implements OnInit {


  formulario: FormGroup;

  mipattern = '[a-z]*';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.mipattern)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, ValidateEmail]]
    });
  }
  onSubmit(_datosForm){
    console.log(_datosForm);
  }
}



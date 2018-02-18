import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  registro: any;

  usuario: string;
  password: string;
  // inyectar luego en registroService
  constructor(private pf: FormBuilder) {
  }

  ngOnInit() {
    this.registroForm = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    },
      this.passwordMatchValidator);
    this.onChange();

    // this.registroForm = this.pf.group({
    //   usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    //   passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
    // });
    // this.onChange();

  };

  passwordMatchValidator(g: FormGroup) {
    console.log("en passwordMatchValidator");
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : { 'mismatch': true };
  }

  onChange(): void {
    this.registroForm.valueChanges.subscribe(valor => {
      this.usuario = valor.usuario;
      this.password = valor.password;
      console.log(`intenta entrar ${this.usuario}`);
    });
  }

}

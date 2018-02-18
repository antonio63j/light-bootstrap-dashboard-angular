import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: any;

  usuario: string;
  password: string;
  
  registroForm: FormGroup;
  registro: any;
  // inyectar luego en loginService
  constructor(private pf: FormBuilder) {
  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   usuario: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    // },
    //   this.passwordMatchValidator);
    // this.onChange();
    this.loginForm = this.pf.group({
      usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.onChange();

  };

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : { 'mismatch': true };
  }

  onChange(): void {
    this.loginForm.valueChanges.subscribe(valor => {
      this.usuario = valor.usuario;
      this.password = valor.password;
      console.log(`intenta entrar ${this.usuario}`);
    });
  }

}

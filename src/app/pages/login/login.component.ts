import { Component } from '@angular/core';
import {LoginLayoutComponent} from '../../components/login-layout/login-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInputComponent} from '../../components/primary-input/primary-input.component';
import {Router} from '@angular/router';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    // this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    //   next: () => this.toastService.success("Login feito com sucesso!"),
    //   error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    // })
  }

  navigate(){
    this.router.navigate(["signup"])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.email, this.password).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }
}
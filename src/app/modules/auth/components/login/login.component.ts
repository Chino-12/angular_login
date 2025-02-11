import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    console.log('Iniciando proceso de login...'); // Mensaje de inicio
    console.log('Email:', this.email); // Mostrar el email ingresado
    console.log('Password:', this.password); // Mostrar la contraseña ingresada

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response); // Mostrar la respuesta completa
        console.log('Login exitoso. Token recibido:', response.token); // Mostrar el token
        localStorage.setItem('token', response.token); // Guardar el token en localStorage
        this.router.navigate(['/dashboard']); // Redirigir al dashboard
      },
      (error) => {
        console.error('Error en el login:', error); // Mostrar el error completo
        console.error('Mensaje de error:', error.message); // Mostrar el mensaje de error
        console.error('Código de estado:', error.status); // Mostrar el código de estado HTTP
        console.error('Cuerpo del error:', error.error); // Mostrar el cuerpo del error
      }
    );
  }

}
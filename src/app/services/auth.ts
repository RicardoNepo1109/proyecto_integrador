import {   inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Usuario {
  username: string;
  correo?: string;
  rol: 'admin' | 'usuario';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioActual: Usuario | null = null;
private router = inject(Router);

  // Simulación de inicio de sesión
  login(username: string, pass: string): boolean {
    if (username === 'admin' && pass === '1234') {
      this.usuarioActual = { username: 'Administrador', rol: 'admin' };
      this.router.navigate(['/admin']);
      return true;
    } else if (username && pass) {
      this.usuarioActual = { username: username, rol: 'usuario' };
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  // Simulación de registro
  registro(nombre: string, correo: string, pass: string): boolean {
    if (nombre && correo && pass) {
      // Por defecto los nuevos registros son usuarios
      this.usuarioActual = { username: nombre, correo: correo, rol: 'usuario' };
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  getUsuario() {
    return this.usuarioActual;
  }

  logout() {
    this.usuarioActual = null;
    this.router.navigate(['/login']);
  }
}
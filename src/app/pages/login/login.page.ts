import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonIcon, IonTitle, IonToolbar,IonButton,IonBackButton, IonButtons,IonSegmentButton,IonLabel,IonItem,IonInput,IonSegment,IonToast} from '@ionic/angular';
import { AuthService } from '../../services/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonHeader,IonIcon, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonSegmentButton, CommonModule, FormsModule,IonItem, IonInput, IonSegment, IonToast]
})
export class LoginPage implements OnInit {

// 2. Inyecta los servicios fuera del constructor
  private authService = inject(AuthService);
  private toastCtrl = inject(ToastController);

  modo: 'login' | 'registro' = 'login';

  // Campos Login
  loginUser: string = '';
  loginPass: string = '';
  loginPassVisible: boolean = false;
  TogglePassword() {
    this.loginPassVisible = !this.loginPassVisible;
  }

  // Campos Registro
  regNombre: string = '';
  regCorreo: string = '';
  regPass: string = '';

  // 3. El constructor queda vacío o se quita
  constructor() {}

  async ingresar() {
    const exito = this.authService.login(this.loginUser, this.loginPass);
    if (!exito) {
      this.mostrarMensaje('Usuario o contraseña incorrectos');
    }
    this.loginUser = '';
    this.loginPass = '';
  }

  async registrar() {
    const exito = this.authService.registro(this.regNombre, this.regCorreo, this.regPass);
    if (exito) {
      this.mostrarMensaje('¡REGISTRO EXITOSO!');
    } else {
      this.mostrarMensaje('Por favor completa todos los campos');
    }
    this.regNombre = '';
    this.regCorreo = '';
    this.regPass = '';
  }

  async mostrarMensaje(msj: string) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCard,
  IonCardHeader,IonIcon,IonCardContent,IonButton,IonLabel,IonBadge,IonCardTitle,IonFooter,IonSearchbar,IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import{AuthService} from '../services/auth';
import { 
  pulseOutline, 
  starOutline, 
  calendarOutline, 
  homeSharp, 
  calendarNumberOutline, 
  gridOutline, 
  cartOutline, 
  personCircleOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard,IonCardHeader,IonIcon,IonCardContent,IonButton,IonLabel,IonBadge,IonCardTitle,IonFooter,IonSearchbar,IonButtons],
})
export class HomePage {
listaEstudios = [
    {
      id: 1,
      titulo: 'Electrocardiograma',
      descripcion: 'Conocido también: electrocardiograma en reposo, ECG, EXG.',
      beneficio: 'Beneficio Corazón Sano',
      precio: 85
    },
    {
      id: 2,
      titulo: 'Electrocardiograma',
      descripcion: 'Incluye varios estudios preventivos.',
      beneficio: 'Beneficio Corazón Sano',
      precio: 520
    },
    {
      id: 3,
      titulo: 'Ultrasonido renal y de vías urinarias para mujeres.',
      descripcion: 'Conocido también: electrocardiograma en reposo, ECG, EXG.',
      beneficio: 'Beneficio Corazón Sano',
      precio: 275
    }
  ];

  constructor(public authService: AuthService) {
    addIcons({ 
      pulseOutline, 
      starOutline, 
      calendarOutline, 
      homeSharp, 
      calendarNumberOutline, 
      gridOutline, 
      cartOutline, 
      personCircleOutline 
    });
  }
    cerrarSesion() {
    this.authService.logout();
  }
}

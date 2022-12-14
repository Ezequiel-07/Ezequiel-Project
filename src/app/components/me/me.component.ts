import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  @Input() style:any;

  objects = [
    {tittle:'Diseño de grafico.', body:'¡Dale un diseño único a tu marca! Capturo toda la esencia de tu proyecto para plasmarla en de la mejor manera.'},
    {tittle:'Paginas web.', body:'¡Aumenta el alcance a tu marca! Creo paginas web tanto estáticas como interactivas.'},
    {tittle:'RestAPI.', body:'Interactividad y seguridad en tus paginas web. Sistemas de autenticación, modelo de restAPI e implementación de IA en la web.'},
    {tittle:'Web Sockets.', body:'Paginas web con conexión bidireccional al servidor, aplicable a chats, canales de voz y creación de redes sociales escalables.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

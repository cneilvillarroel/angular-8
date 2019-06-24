import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'miproyecto';

  paginas: any[] = null;


  constructor() { }

  ngOnInit() {
    this.paginas = this.getPaginas();
  }

  // simula funcion que llama a la api para obtener el menu
  getPaginas() {
    return [
      { texto: 'Dashboard', url: '/dashboard' },
      { texto: 'Login', url: '/login' },
      { texto: 'Registrarse', url: '/register' }
    ];
  }

}

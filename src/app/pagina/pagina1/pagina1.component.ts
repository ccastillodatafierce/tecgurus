import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component  {

  title = 'tecgurus';

  id: string = 'externo';
  mostrar: boolean = false;

  constructor(){

  }


  public abrir(identificador: string) {
    if (identificador == 'spinner') {

      setTimeout(() => {
        this.mostrar = true;
      }, 3000);
    }


    this.id = identificador;

  }

}

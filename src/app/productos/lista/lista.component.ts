import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productos: Producto[] = [{
      id: 'a',
      descripcion: 'coca cola 1',
      nombre: 'coca cola 1',
      precio: 10.00,
      tipo: 'rf'
    },
    {
      id: 'b',
      descripcion: 'coca cola 2',
      nombre: 'coca cola 2',
      precio: 12.00,
      tipo: 'rf'
    }, {
      id: 'c',
      descripcion: 'coca cola 3',
      nombre: 'coca cola 3',
      precio: 15.00,
      tipo: 'ab'
    }, {
      id: 'd',
      descripcion: 'coca cola 4',
      nombre: 'coca cola 4',
      precio: 14.00,
      tipo: 'ab'

    }, {
      id: 'f',
      descripcion: 'coca cola 5',
      nombre: 'coca cola 5',
      precio: 17.00,
      tipo: 'ele'

    }
  ]

  constructor() {}

  ngOnInit() {}

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina/pagina1/pagina1.component';
import { Pagina2Component } from './pagina/pagina2/pagina2.component';
import { Pagina3Component } from './pagina/pagina3/pagina3.component';
import { NuevoComponent } from './pagina/productos/nuevo/nuevo.component';
import { EditarComponent } from './pagina/productos/editar/editar.component';


const routes: Routes = [{
    component: Pagina1Component,
    path: 'pagina1'
  },
  {
    component: Pagina2Component,
    path: 'pagina2'

  }, {
    component: Pagina3Component,
    path: 'admin',
    children: [{
      path: 'nuevo',
      component: NuevoComponent
    },{
      path: ':id',
      component: EditarComponent
    }]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

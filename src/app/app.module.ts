import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ProductosModule} from './productos/productos.module';
import { Pagina1Component } from './pagina/pagina1/pagina1.component';
import { Pagina2Component } from './pagina/pagina2/pagina2.component';
import { Pagina3Component } from './pagina/pagina3/pagina3.component';
import { NuevoComponent } from './pagina/productos/nuevo/nuevo.component';
import { EditarComponent } from './pagina/productos/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

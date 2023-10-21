import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComercializadorComponent } from './comercializador/comercializador.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientesComponent,
    ComercializadorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'inicio', component: InicioComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'comercializador', component: ComercializadorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

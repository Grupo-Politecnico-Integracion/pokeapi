import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { FotoService } from './Servicios/foto.service';
import { HttpClientModule } from '@angular/common/http';
import { EspecificacionComponent } from './especificacion/especificacion.component';
import { BusquedaComponent } from './busqueda/busqueda.component'
import { FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    EspecificacionComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
    
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

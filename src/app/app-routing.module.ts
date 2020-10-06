import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { EspecificacionComponent } from './especificacion/especificacion.component';

const routes: Routes = [

  {
    path: '', component: CuerpoComponent
  },
  {
    path: 'especificacion', component: EspecificacionComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';



@NgModule({
  declarations: [
    PedidoListComponent,
    PedidoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }

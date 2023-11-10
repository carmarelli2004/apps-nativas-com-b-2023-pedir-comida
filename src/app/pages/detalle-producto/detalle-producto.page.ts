import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage  {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
<<<<<<< HEAD
    ) { 
=======
    ) {
>>>>>>> fa844422bc45f8a9873fee8096f81be19eb63fec
    activatedRoute.params.subscribe(params => {
      this.buscarProducto(params['nombre']);
    })
  }
cantidad=1;

  buscarProducto(nombreProductoABuscar:string){
    CATEGORIAS
    for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual = CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual;                       //hay que poner this porque estamos adentro de una clase
        }
        //console.log(productoActual.nombre, nombreProductoABuscar, productoActual.nombre === nombreProductoABuscar)
      }
    }
    }



  cantidad = 1;

  buscarProducto(nombreProductoABuscar:string){
    for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual = CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual;
        }
        //console.log(productoActual.nombre, nombreProductoABuscar, productoActual.nombre === nombreProductoABuscar)
      }
    }
  }


  producto:Producto = {
    imagen: 'dsgdfbgs',
    nombre: 'Nombre producto',
    descripcion: 'Descripcion',
    precio: 500
  }

}

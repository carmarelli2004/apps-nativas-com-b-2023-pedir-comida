import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

<<<<<<< HEAD
  constructor(public cartService:CartService) {} //con esto tengo acceso al cart service desde el tab 3

  crearMensaje():string{ //crearMensaje es una funcion, con un valor de tipo de dato STRING
    let parteProductos = ''; //creo una variable vacia 
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} -${productoCarrito.cantidad}  
`; // con el for each le agrego cada elemento del carrito
      parteProductos = parteProductos + mensajeProducto;
    })

    const primeraParte = "https://wa.me/+5412345678?text="
    const segundaParte = `Hola, quiero hacer un pedido:
${parteProductos}

Mis datos:
- Nombre: NOMBRE
- Direccion: DIRECCION
    
Nots:
`;
    const mensaje = encodeURI(primeraParte+segundaParte)
    console.log(mensaje);
    return mensaje;

  }

realizarPedido(){
  this.crearMensaje()
  window.open(this.crearMensaje(),'blank');
  this.cartService.vaciarCarrito()
=======
  constructor(public cartService:CartService) {}
>>>>>>> fa844422bc45f8a9873fee8096f81be19eb63fec


  crearMensaje():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
`;
      parteProductos = parteProductos + mensajeProducto;
    })
    const primeraParte = "https://wa.me/+5412345678?text=";
    const segundaParte = `Hola, quiero hacer un pedido:
${parteProductos}

Mis datos:
- Nombre: NOMBRE
- Dirección: DIRECCIÓN

Notas:
`;
    const mensaje = encodeURI(primeraParte+segundaParte);
     return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.vaciarCarrito();
  }
}

}
//otra manera de hacer strings que te permite hacerlos multilineas(escribir abajo) --> BACK TICKS puedo poner variables tmbn aunque no este en HTML con ${}
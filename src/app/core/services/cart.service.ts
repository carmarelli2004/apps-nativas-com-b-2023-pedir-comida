import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[]= []  //arranca como array vacio porque al principio el carrito esta vacio
 //carrito es una variable que tiene los datos guardados, con el tipo de dato array
 //ProductoCarrito es un tipo de dato
  totalCarrito: number = 0

 constructor() {
  const guardado = localStorage.getItem("carrito");  //como quizas no exciste el carrito, primero leo y guardo el resultado en un lugar, y luego si encontre algo le asigno, y si no encontre nada no le hago nada. 
  if(guardado){
   this.carrito = JSON.parse(guardado); 
   this.calcularTotal()
  }
 } 

  agregarAlCarrito(producto:Producto, cantidad:number){  //funciones
    //reviso si el producto ya existe en el carrito
    const index = this.carrito.findIndex(item => item.producto.nombre === producto.nombre) // ve si el producto que esta agarrando ya existe en el carrito. 
    if(index === -1){
      //Si es un producto nuevo, creo el elemento producto y lo pongo en el carrito
    const productoActual:ProductoCarrito = {
      cantidad: cantidad,
      producto: producto
    } 
      this.carrito.push(productoActual); //push le agrega al arrey  
    } else{
      //Si el producto ya existe, modifico el carrito para agreagarle las unidades correspondientes
      this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad;
    }
    
    console.log(this.carrito);
    this.guardarlocalStorage();
    this.calcularTotal();

  }

  eliminarProducto(nombre: string){  //requiere un argumento para saber que producto eliminar
    this.carrito = this.carrito.filter(item => item.producto.nombre !== nombre);
    this.guardarlocalStorage();
    this.calcularTotal();

  }

  vaciarCarrito(){
    this.carrito=[]; // el objetivo es que el carrito este vacio por lo tanto lo pongo como array vacio
    this.guardarlocalStorage();
    this.calcularTotal();

  }

  cambiarCantidad(){
    this.guardarlocalStorage();
    this.calcularTotal();

  }

  guardarlocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(this.carrito)) 
  }

  calcularTotal(){
    let subtotal = 0;
    this.carrito.forEach(item => {       //el forEach agarra cada producto del carrito y le asigna un item
      subtotal = subtotal + item.cantidad * item.producto.precio
    })
    this.totalCarrito = subtotal
  }

//JSON.stringify me transforma el objeto en un string (lo stringifica)--> esto es porque el local storage solo guarda strings. 

}

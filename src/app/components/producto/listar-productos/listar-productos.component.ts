import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getProductos(); 
  }

  listaProductos : Producto[] = []; 

  getProductos()
  {
    this.productoService.getProductos().subscribe({
      next : (pros) => {
        this.listaProductos = pros; 
        console.log(pros); 
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

  eliminarProducto(id : number)
  {
    this.productoService.deleteProducto(id).subscribe({
      next : (pro) => {
        alert( pro.nombre + 'eliminado con exito. '); 

        console.log(pro); 
        window.location.reload(); 
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }
}

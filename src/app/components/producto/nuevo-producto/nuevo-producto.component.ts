import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  ngOnInit(): void {
    this.initForm(); 
  }
  
  constructor(private productoService : ProductoService, private formBuilder : FormBuilder) {}

  formulario! : FormGroup ; 

  initForm()
  {
    this.formulario = this.formBuilder.group({
      nombre : ['', (Validators.required)], 
      marca : ['', (Validators.required)], 
      cantidad : ['', (Validators.required)],
      id : [0]
    })
  }

  addProducto()
  {
    this.productoService.postProducto(this.formulario.value).subscribe({
      next: (pro) => {
        console.log('Producto agregado : ' + pro.nombre); 
        window.location.reload(); 
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

  validar()
  {
    return this.formulario.controls['required'] && this.formulario.touched; 
  }



}

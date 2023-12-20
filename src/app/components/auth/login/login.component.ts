import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService : AuthService, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.initForm(); 
    this.getUser(); 
    console.log(this.user); 
    console.log(this.authService.CurrentUser);
  }

  formulario! : FormGroup; 

  user: User = {
    username : '', 
    password : '', 
    id : 0
  }; 

  initForm()
  {
    this.formulario = this.formBuilder.group({
      username : ['', (Validators.required)], 
      password : ['', (Validators.required)],
      id : [0]
    })
  }

  validar()
  {
    return this.formulario.controls['required'] && this.formulario.touched;
  }

  getUser()
  {
    this.authService.verificarUsername('valenramirez'); 

    this.user=this.authService.CurrentUser; 
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/api-rest/user.service';
import { Persona } from 'src/app/services/interface/Persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //importar para los formularios reactivos
import { AutenticationService } from 'src/app/services/api-rest/autentication.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  persona!: Persona;
  formulario: FormGroup; 

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder, private autenticationServ: AutenticationService) { //inyectar formBuilder para los formularios reactivos

    this.formulario = this.formBuilder.group({
      username: ['', Validators.required], 
      password: ['', Validators.required]
    });
   }

   get username() {
    return this.formulario.get('username');
  }

    get password() {
    return this.formulario.get('password');
  }

  ngOnInit(): void {
  
  }

  volverAlHome() {
    this.router.navigate(['']);
  }

  iniciarSesion() {
    console.log(this.formulario.value);
    this.autenticationServ.IniciarSesion(this.formulario.value.username, this.formulario.value.password).subscribe(
      data => {
       
        console.log(data);
        
        this.volverAlHome();
      }
    );;
  }

}

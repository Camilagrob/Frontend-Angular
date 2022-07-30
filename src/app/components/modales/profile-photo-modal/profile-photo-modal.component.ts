import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/services/interface/Persona';
import { PersonaService } from 'src/app/services/api-rest/persona.service';

@Component({
  selector: 'app-profile-photo-modal',
  templateUrl: './profile-photo-modal.component.html',
  styleUrls: ['./profile-photo-modal.component.css']
})
export class ProfilePhotoModalComponent implements OnInit {
  @Input()  id!:number; 
  
  persona!:Persona;
  formulario!:FormGroup

  constructor(public activeModal: NgbActiveModal, private personaService:PersonaService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
  
      idpersona: [''],
      nombre: [''],
      apellido: [''],
      email: [''],
      titulo: [''],
      telefono: [''],
      ubicacion: [''],
      acerca: [''],
      fotourl: [''],
      coverurl: [''],
      username: [''],
      password: [''],
      token: [''],

})

}
  ngOnInit(): void {
    this.getById(this.id)
  }

  cerrarModal(){
    this.activeModal.close();
  }

  getById(id: number) {
     this.personaService.getById(id).subscribe (
             data => {
          this.persona = data; 
          this.editarForm(this.persona)
         }
         );
 
   }
   editarForm(pers:any){
     this.formulario.setValue( {
        idpersona: pers.idpersona,
        nombre: pers.nombre,
        apellido: pers.apellido,
        email: pers.email,
        titulo: pers.titulo,
        telefono:  pers.telefono,
        ubicacion: pers.ubicacion,
        acerca: pers.acerca,
        fotourl: pers.fotourl,
        coverurl: pers.coverurl,
        username: pers.username,
        password: pers.password,
        token: pers.token, 
      
      
     });
   }
 


actualizarProfile(){
  console.log(this.formulario.value)
  this.personaService.update(this.id,this.formulario.value).subscribe(
    data => {
      
      this.cerrarModal()
    }
  );
}
}

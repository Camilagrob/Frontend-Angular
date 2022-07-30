import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { SkillService } from 'src/app/services/api-rest/skill.service';
import { Skill } from 'src/app/services/interface/Skill';
import { SkillsModalComponent } from '../modales/skills-modal/skills-modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  login:any;
  

 constructor(private skillService:SkillService,  private modalService: NgbModal, private loginService:LoginService ) {}
  
 skill!: any [] ;

 getById(id: number) {
   this.skillService.getById(id).subscribe (
     data => { this.skill = data; }
   );
 }

 getAll() {
   this.skillService.getAll().subscribe (
     data => { this.skill = data;}
   );
 }
 delete(id: number) {
   this.skillService.delete(id).subscribe (
     data => { this.skill = data; }
   );
 }

 save(skill:any) {
   this.skillService.save(skill).subscribe (
     data => { this.skill = data; }
   );
 }

 update(id: number, skill: any) {
   this.skillService.update(id,skill).subscribe (
     data => { this.skill = data; }
   );
 }


 ngOnInit(): void {
  this.loginService.LogState().subscribe((login) => (this.login = login));  
  this.getAll()
}


  skills: any[] = [
 ]; 

abrirModal(id:number){
 
  const modalRef = this.modalService.open(SkillsModalComponent, { centered: true, size: 'sm' }   );   
  modalRef.componentInstance.id = id;      
  
  modalRef.result.then((data) => {
    this.ngOnInit();
  }, (reason) => {
  })

}
borrarSkill(id:any){
  this.skillService.delete(id).subscribe (
    data => { this.ngOnInit() }
  );
}
}

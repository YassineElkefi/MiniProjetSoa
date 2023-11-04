import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  createSectionVisible: boolean = true;
  showModifierSection: boolean = true;
  filterValue=''
  etudiants: any[] = [];
  formData = { nom: '', prenom: '', date_naiss: '', cin:'', tel: '', adresse:'',nb_absence:'', classe:'', estReussi:true};
  editedEtudiant:any = {};
  etudiantId: number;
  deleteEtudiantId:number; 
  updatedEtudiant:any ={}; 

  constructor(private etudiantService: EtudiantService,private router: Router){
    this.etudiantId = 0;
    this.deleteEtudiantId=0;
  }

ngOnInit(): void {
  this.etudiantService.getAllEtudiants().subscribe((result)=>{
    this.etudiants = result as any;
  })
}

onSubmit(){ 
  this.etudiantService.addEtudiant(this.formData).subscribe((response)=>{
    console.log('Data sent successfully : ', response);
    this.createSectionVisible = false;
    this.router.navigate(['/etudiant']);
  },(error)=>{
    console.error('Error : ',error)
  }
  );
  }

  retrieve(){
    this.showModifierSection = true;
    this.etudiantService.getEtudiantById(this.etudiantId).subscribe((etudiantData) => {
  this.editedEtudiant = etudiantData;
  this.updatedEtudiant = { ...this.editedEtudiant };
});
  }

  onSubmit2(){
    this.etudiantService.updateEtudiant(this.etudiantId, this.updatedEtudiant).subscribe((response)=>{
      console.log('Payload : ',this.updatedEtudiant)
    console.log('Data updated Successfully : ', response);
    this.router.navigate(['/etudiant'])
    this.showModifierSection = false;
    this.etudiants = this.etudiants.filter(ens => ens.id)
    },
    (error)=>{
      console.error('Error :',error);
    })
  }

  deleteEnseignant(id:number){
    this.etudiantService.deleteEtudiant(id).subscribe((response)=>{
      console.log('Enseignant supprimé', response)
      this.etudiantService.getAllEtudiants().subscribe((result)=>{
        this.etudiants = result as any;
      })
      this.router.navigate(['/etudiant']);
    }, (error)=>{
      console.error('Error : ',error);
      
    });
  }
}

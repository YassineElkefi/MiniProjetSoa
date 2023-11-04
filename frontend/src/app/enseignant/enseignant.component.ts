import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnseignantService } from '../enseignant.service';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  createSectionVisible: boolean = true;
  showModifierSection: boolean = true;
  filterValue=''
  enseignants: any[] = [];
  formData = { nom: '', prenom: '', date_naiss: '', cin:'', tel: '', adresse:'',nb_absence:'', matiere:'', departement:''};
  editedEnseignant:any = {};
  enseignantId: number;
  deleteId:number; 
  updatedEnseignant:any ={};   


  constructor(private enseignantService: EnseignantService,private router: Router, private route:ActivatedRoute) {
    this.enseignantId = 0;
    this.deleteId=0;
   }

  ngOnInit(): void {
    this.enseignantService.getAllEnseignants().subscribe((result)=>{
      this.enseignants = result as any;
    })
  }

  onSubmit(){ 
    this.enseignantService.addEnseignant(this.formData).subscribe((response)=>{
      console.log('Data sent successfully : ', response);
      this.createSectionVisible = false;
      this.router.navigate(['/enseignant'])
    },(error)=>{
      console.error('Error : ',error)
    }
    );
    }

    retrieve(){
      this.showModifierSection = true;
      this.enseignantService.getEnseignantById(this.enseignantId).subscribe((enseignantData) => {
    this.editedEnseignant = enseignantData;
    this.updatedEnseignant = { ...this.editedEnseignant };
  });
    }
    onSubmit2(){
      this.enseignantService.updateEnseignant(this.enseignantId, this.updatedEnseignant).subscribe((response)=>{
        console.log('Payload : ',this.updatedEnseignant)
      console.log('Data updated Successfully : ', response);
      this.router.navigate(['/enseignant'])
      this.showModifierSection = false;
      this.enseignants = this.enseignants.filter(ens => ens.id)
      },
      (error)=>{
        console.error('Error :',error);
      })
    }

    deleteEnseignant(id:number){
      this.enseignantService.deleteEnseignant(id).subscribe((response)=>{
        console.log('Enseignant supprimé', response)
        this.enseignantService.getAllEnseignants().subscribe((result)=>{
          this.enseignants = result as any;
        })
        this.router.navigate(['/enseignant'])
      }, (error)=>{
        console.error('Error : ',error);
        
      });
    }

}


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CadreAdminService } from '../cadre-admin.service';

@Component({
  selector: 'app-cadreadmin',
  templateUrl: './cadreadmin.component.html',
  styleUrls: ['./cadreadmin.component.css']
})
export class CadreadminComponent implements OnInit {
  createSectionVisible: boolean = true;
  showModifierSection: boolean = true;
  filterValue=''
  cadres: any[] = [];
  formData = { nom: '', prenom: '', date_naiss: '', cin:'', tel: '', adresse:'',nb_absence:'', occupation:''};
  editedCadre:any = {};
  cadreId: number;
  deleteCadreId:number; 
  updatedCadre:any ={};

constructor(private cadreService:CadreAdminService, private router:Router){
  this.cadreId=0;
  this.deleteCadreId=0;
}

ngOnInit(): void {
  this.cadreService.getAllCadres().subscribe((result)=>{
    this.cadres = result as any;
  })
}

onSubmit(){ 
  this.cadreService.addCadre(this.formData).subscribe((response)=>{
    console.log('Data sent successfully : ', response);
    this.createSectionVisible = false;
    this.router.navigate(['/cadre']);
  },(error)=>{
    console.error('Error : ',error)
  }
  );
  }

  retrieve(){
    this.showModifierSection = true;
    this.cadreService.getCadreById(this.cadreId).subscribe((cadreData) => {
  this.editedCadre = cadreData;
  this.updatedCadre = { ...this.editedCadre };
});
  }

  onSubmit2(){
    this.cadreService.updateCadre(this.cadreId, this.updatedCadre).subscribe((response)=>{
      console.log('Payload : ',this.updatedCadre)
    console.log('Data updated Successfully : ', response);
    this.router.navigate(['/cadre']);
    this.showModifierSection = false;
    this.cadres = this.cadres.filter(ens => ens.id)
    },
    (error)=>{
      console.error('Error :',error);
    })
  }

  deleteCadre(id:number){
    this.cadreService.deleteCadre(id).subscribe((response)=>{
      console.log('Enseignant supprimé', response)
      this.cadreService.getAllCadres().subscribe((result)=>{
        this.cadres = result as any;
      })
      this.router.navigate(['/cadre']);
    }, (error)=>{
      console.error('Error : ',error);
      
    });
  }

}

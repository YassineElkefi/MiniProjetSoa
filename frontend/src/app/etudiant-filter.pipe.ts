import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'etudiantFilter'
})

export class EtudiantFilterPipe implements PipeTransform{
    transform(etudiants: any[], filter: string): any[] {
        if (!filter){
            return etudiants;
        }
        filter = filter.toLowerCase();
        return etudiants.filter(etudiant =>{
            return etudiant.classe.toString().toLowerCase().includes(filter) || etudiant.id.toString().includes(filter) || etudiant.estReussi.toString().toLowerCase().includes(filter);
        })
    }
}
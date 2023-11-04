import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'enseignantFilter'
})
export class EnseignantFilterPipe implements PipeTransform{
    transform(enseignants: any[], filter: string): any[] {
        if (!filter){
            return enseignants;
        }
        filter = filter.toLowerCase();
        return enseignants.filter(enseignant =>{
            return enseignant.matiere.toString().toLowerCase().includes(filter) || enseignant.id.toString().includes(filter) || enseignant.departement.toString().toLowerCase().includes(filter);
        })
    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'cadreFilter'
})

export class CadreFilterPipe implements PipeTransform{
    transform(cadres: any[], filter: string): any[] {
        if (!filter){
            return cadres;
        }
        filter = filter.toLowerCase();
        return cadres.filter(cadre =>{
            return cadre.occupation.toString().toLowerCase().includes(filter) || cadre.id.toString().includes(filter);
        })
    }
}
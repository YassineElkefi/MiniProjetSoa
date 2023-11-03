import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  constructor(private router: Router) { }
}


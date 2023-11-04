import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EtudiantFilterPipe } from './etudiant-filter.pipe';
import { CadreFilterPipe } from './cadre-filter.pipe';
import { EnseignantFilterPipe } from './enseignant-filter-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CadreadminComponent } from './cadreadmin/cadreadmin.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    EnseignantComponent,
    EtudiantComponent,
    CadreadminComponent,
    PopupModalComponent,
    EnseignantFilterPipe,
    CadreFilterPipe,
    EtudiantFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

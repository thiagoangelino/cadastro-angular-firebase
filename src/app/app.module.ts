import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClienteFormComponent]
})
export class AppModule { }

import { AppRoutingModule, routingComponents } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr'
//import {AngularMaterialModule} from './angular-material.module';
//import { MatCardModule } from '@angular/material/card';
//import {MatButtonModule, MatMenuModule, MatIconModule,  MatSidenavModule  } from '@angular/material'; 

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ConsultoryComponent } from './consultory/consultory.component';
import { PatientComponent } from './patients/patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientsComponent } from './patients/patients.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PatientsModule } from './patients/patients.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],

  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    UsersModule,
    BrowserAnimationsModule,
    SharedModule,
    PatientsModule

    //MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule , BrowserAnimationsModule 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

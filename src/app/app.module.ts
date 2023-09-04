import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//nav router
import { AppRoutingModule } from './app-routing.module';

//created components
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { SharedDirective } from './userProfile/shared.directive';
import { ProfileComponent } from './profile/profile.component';
import { ReceiveComponent } from './Receive/receive.component'
//materiaDesign Module
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SendComponent } from './send/send.component';
//firebase imports
import { environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//chart module ton integrate bar or pie chart dat will allow user to view day and weekly spending chart
//camera module to use in send qr tab
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SavedComponent } from './saved/saved.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    SharedDirective,
    ProfileComponent,
    ReceiveComponent,
    SidenavComponent,
    SendComponent,
    FooterComponent,
    LoginComponent,
    SavedComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    //Firebase Imports
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
    
 
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

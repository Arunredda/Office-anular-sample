import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComHeaderComponent } from './com-header/com-header.component';
import { ComHomeComponent } from './com-home/com-home.component';
import { ComFooterComponent } from './com-footer/com-footer.component';
import { ComEployeeComponent } from './com-eployee/com-eployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComEmployeListComponent } from './com-employe-list/com-employe-list.component';

import { ComEditEmployeComponent } from './com-edit-employe/com-edit-employe.component';
import { ComWlcomeComponent } from './com-wlcome/com-wlcome.component';
import { ComLoginComponent } from './com-login/com-login.component';
import { AppMenuComponent } from './app-menu/app-menu.component';  
import { TockenIntersaptorService } from './tocken-intersaptor.service';
import { ComcreateStudentComponent } from './comcreate-student/comcreate-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MydirectDirective } from './mydirect.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CommonCompontComponent } from './common-compont/common-compont.component';

@NgModule({
  declarations: [
    AppComponent,   
    ComHeaderComponent,
    ComHomeComponent,
    ComFooterComponent,
    ComEployeeComponent,
    ComEmployeListComponent,
    
    ComEditEmployeComponent,
         ComWlcomeComponent,
         ComLoginComponent,
         AppMenuComponent,
         ComcreateStudentComponent,
         StudentListComponent,
         MydirectDirective,
         CommonCompontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TockenIntersaptorService, multi:true}],
  bootstrap: [AppComponent]


  // schemas: [
  //   [NO_ERRORS_SCHEMA]

  //    // Add this if 'app-com-wlcome' is a Web Component
  //   // NO_ERRORS_SCHEMA // Add this if you want to allow any property without validation
  // ],
})
export class AppModule { }

import { NgModule } from '@angular/core';
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
         ComcreateStudentComponent
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
})
export class AppModule { }

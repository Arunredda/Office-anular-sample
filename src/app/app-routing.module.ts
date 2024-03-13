import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComHomeComponent } from './com-home/com-home.component';
import { ComEployeeComponent } from './com-eployee/com-eployee.component';
import { ComEmployeListComponent } from './com-employe-list/com-employe-list.component';
import { ComEditEmployeComponent } from './com-edit-employe/com-edit-employe.component';
import { ComWlcomeComponent } from './com-wlcome/com-wlcome.component';
import { ComLoginComponent } from './com-login/com-login.component';
import { ComcreateStudentComponent } from './comcreate-student/comcreate-student.component';


const routes: Routes = [
  {path:'',component:ComHomeComponent},
  {path:'ceateEmploye',component:ComEployeeComponent},
  {path:'employeList',component:ComEmployeListComponent},
  {path:'editEmploye/:id', component:ComEditEmployeComponent},
  {path:'welcome',component:ComWlcomeComponent},
  {path:'login', component:ComLoginComponent},
  {path:'createStudent', component: ComcreateStudentComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

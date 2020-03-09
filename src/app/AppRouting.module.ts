import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './components/userForm/UserForm.component';
import { UserDetailComponent } from './components/userDetail/UserDetail.component';
import { UserListComponent } from './components/userList/userList.component';

const appRoutes: Routes = [
    {path: "form", component: UserFormComponent},
    {path: "form/:id", component: UserFormComponent},
    {path: "detail/:id", component: UserDetailComponent},
    {path: "", component: UserListComponent}
  ]

  
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {enableTracing: true}
      )
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
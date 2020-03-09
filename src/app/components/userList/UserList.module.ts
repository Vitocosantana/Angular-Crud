
import { NgModule } from '@angular/core';
import { UserListComponent } from './userList.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/AppRouting.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
   UserListComponent
  ],
  providers: []
})
export class UserListModule { }

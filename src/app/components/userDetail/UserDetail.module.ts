import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserDetailComponent } from './UserDetail.component';
import { AppRoutingModule } from 'src/app/AppRouting.module';

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    UserDetailComponent
  ],
  providers: [],
  bootstrap: [UserDetailComponent]
})
export class UserDetailModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserFormComponent } from './UserForm.component';
import { AppRoutingModule } from 'src/app/AppRouting.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    UserFormComponent
  ],
  providers: [],
  bootstrap: [UserFormComponent]
})
export class UserFormModule { }

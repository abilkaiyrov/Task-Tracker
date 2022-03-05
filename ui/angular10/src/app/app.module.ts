import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ShowPrjComponent } from './project/show-prj/show-prj.component';
import { AddEditPrjComponent } from './project/add-edit-prj/add-edit-prj.component';
import { TaskComponent } from './task/task.component';
import { ShowTskComponent } from './task/show-tsk/show-tsk.component';
import { AddEditTskComponent } from './task/add-edit-tsk/add-edit-tsk.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ShowPrjComponent,
    AddEditPrjComponent,
    TaskComponent,
    ShowTskComponent,
    AddEditTskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

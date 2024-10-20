import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {provideHttpClient,HttpClientModule, withInterceptorsFromDi} from "@angular/common/http";
import { AddTaskComponent } from './components/add-task/add-task.component';
import {FormsModule}from"@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
    // ,HttpClientModule    //it's deprecate
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())//use this line instead "HttpClientModule"
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

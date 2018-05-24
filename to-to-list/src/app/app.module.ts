import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddTaskComponent} from './add-task/add-task.component';
import {TodoTaskComponent} from './todo-task/todo-task.component';
import {DoneTaskComponent} from './done-task/done-task.component';
import {TasksService} from "./services/tasks.service";
import {CheckedDirective} from './shared/checked.directive';
import {DateDirective} from './shared/date.directive';
import {TransformTaskPipe} from './shared/transform-task.pipe';
import {SortNamePipe} from './shared/sort-name.pipe';
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing.module";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth"
import {LoginComponent} from "./auth/login/login.component";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";

const config = {
  apiKey: "AIzaSyAJoHFRpvaqRnjQElARkBAnD-M3ZDOKMlE",
  authDomain: "todo-5eef9.firebaseapp.com",
  databaseURL: "https://todo-5eef9.firebaseio.com",
  projectId: "todo-5eef9",
  storageBucket: "todo-5eef9.appspot.com",
  messagingSenderId: "913324840933"
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [
    TasksService,
    HttpService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

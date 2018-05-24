import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Task} from "../model/task";
import {HttpService} from "./http.service";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService,
              public angularFire: AngularFireAuth) {
    this.angularFire.authState.subscribe(user => {
      user? this.init() : this.tasksListObs.next([]);
    })
    this.init();
  }

  init(){
    this.httpService.getTasks().subscribe( list => {
      this.tasksListObs.next(list);
    })
  }

  add(task: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list );
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>>{
    return this.tasksListObs.asObservable();
  }

  saveTasksInDB(){
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }

}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Task} from "../model/task";

@Injectable()
export class TasksService {

  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);


  constructor() {
    console.log('TasksService');
    this.tasksList = [
      {name: 'Cleaning', created: new Date()},
      {name: 'Learning', created: new Date()},
      {name: 'Watering flowers', created: new Date()},
      {name: 'Shopping', created: new Date()}
      ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>>{
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>>{
    return this.tasksDoneObs.asObservable();
  }
}

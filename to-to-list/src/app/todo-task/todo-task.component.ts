import {Component, OnInit} from "@angular/core";
import {TasksService} from "../services/tasks.service";
import {Task} from "../model/task";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    console.log('TodoTaskComponent');
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

}

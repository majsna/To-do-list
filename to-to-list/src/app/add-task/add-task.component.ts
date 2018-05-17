import {Component, OnInit} from "@angular/core";
import {TasksService} from '../services/tasks.service';
import {Task} from "../model/task";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.addForm = new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    })
  }

  add() {
    const taskList = this.createTaskList();
    this.tasksService.add(taskList);
    // this.newTask = '';
  }

  createTaskList(): Array<Task>{
    const tasksList = new Array<Task>();
    const tasksArr = <[string]>this.addForm.get('taskName').value;
    tasksArr.forEach(taskName => {
      const task = {name: taskName, created: new Date().toLocaleString(), isDone: false};
      tasksList.push(task);
    });
    return tasksList;
  }

  addField(){
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

}

import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit  {
  tasks:Task[] = [];

  constructor(private taskService:TaskService){}
  ngOnInit(): void {
      this.taskService.getTask().subscribe((tasks)=>this.tasks=tasks);
  }
  
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      ()=>this.tasks=this.tasks.filter(e=>e.id !== task.id)
    );
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }
}

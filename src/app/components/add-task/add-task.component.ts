import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent{

  @Output() onAddTask:EventEmitter<Task>=new EventEmitter<Task>();
  
  text:string ="";
  day:string="";
  reminder:boolean=false;
  showAddTask:boolean=false;
  subscription:Subscription=new Subscription();
  
  constructor(private uisService:UiService){
    this.uisService.onToggle().subscribe(value=>this.showAddTask=value);
  }


  onSubmit():void{
    if(!this.text){
      alert("please add task!!");
      return;
    }
    
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }


    this.onAddTask.emit(newTask);    // emit event

    //reset
    this.text ="";
    this.day="";
    this.reminder=false;
  }



}

import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private shownAddTask:boolean=false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void{
    // console.log("toggleAddTask() at uiService");
    this.shownAddTask = !this.shownAddTask;
    this.subject.next(this.shownAddTask);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}

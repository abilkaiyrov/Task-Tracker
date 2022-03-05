import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-tsk',
  templateUrl: './show-tsk.component.html',
  styleUrls: ['./show-tsk.component.css']
})
export class ShowTskComponent implements OnInit {

  constructor(private service:SharedService) { }
 
  TaskList:any=[];

  StatusList:any=[];

  ModalTitle!: string;
  ActivateAddEditTskComp:boolean=false;
  tsk!:any;

  TaskIdFilter:string="";
  TaskNameFilter:string="";
  TaskListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshTskList();
    this.refreshStatusList();
  }

  addClick(){
    this.tsk={
      TaskId:0,
      TaskName:"",
      TaskDescription:"",
      Project:"",
      DateOfStart:"",
      Deadline:"",
      Status:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTskComp=true;
  }

  editClick(item: any){
    this.tsk=item;
    this.ModalTitle="Edit Task";
    this.ActivateAddEditTskComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteTask(item.TaskId).subscribe(data=>{
        alert(data.toString());
        this.refreshTskList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTskComp=false;
    this.refreshTskList();
  }

  refreshTskList(){
    this.service.getTskList().subscribe(data=>{
      this.TaskList=data;
    });
  }

  refreshStatusList(){
    this.service.getStatusList().subscribe(data=>{
      this.StatusList=data;
    });
  }

  FilterFn(){
    var TaskIdFilter = this.TaskIdFilter;
    var TaskNameFilter = this.TaskNameFilter;

    this.TaskList = this.TaskListWithoutFilter.filter(function (el: { TaskId: { toString: () => string; }; TaskName: { toString: () => string; }; }){
      return el.TaskId.toString().toLowerCase().includes(
        TaskIdFilter.toString().trim().toLowerCase()
      )&&
      el.TaskName.toString().toLowerCase().includes(
        TaskNameFilter.toString().trim().toLowerCase()
      )
  });
}

sortResult(prop: string | number,asc: any){
  this.TaskList = this.TaskListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}

}

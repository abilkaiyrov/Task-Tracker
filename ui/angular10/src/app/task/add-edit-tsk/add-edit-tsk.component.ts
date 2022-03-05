import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tsk',
  templateUrl: './add-edit-tsk.component.html',
  styleUrls: ['./add-edit-tsk.component.css']
})
export class AddEditTskComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() tsk:any;
  TaskId!:string;
  TaskName!:string;
  TaskDescription!: string;
  Project!:string;
  DateOfStart!:string;
  Deadline!: string;
  Status!: string;

  ProjectList!:any[];
  StatusList!:any[];

  ngOnInit(): void {
    this.loadProjectList();
  }

  loadProjectList(){
    this.service.getAllProjectNames().subscribe((data:any)=>{
      this.ProjectList=data;

      this.service.GetStatus().subscribe((data:any)=>{
        this.StatusList=data;
      })

      this.TaskId=this.tsk.TaskId;
      this.TaskName=this.tsk.TaskName;
      this.TaskDescription=this.tsk.TaskDescription;
      this.Project=this.tsk.Project;
      this.DateOfStart=this.tsk.DateOfStart;
    })
  }

  addTask(){
    var val = {TaskId:this.TaskId,
                TaskName:this.TaskName,
                TaskDescription:this.TaskDescription,
                Project:this.Project,
                DateOfStart:this.DateOfStart};
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTask(){
    var val = {TaskId:this.TaskId,
      TaskName:this.TaskName,
      TaskDescription:this.TaskDescription,
      Project:this.Project,
      DateOfStart:this.DateOfStart};
    this.service.updateTask(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}

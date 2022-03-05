import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-prj',
  templateUrl: './add-edit-prj.component.html',
  styleUrls: ['./add-edit-prj.component.css']
})
export class AddEditPrjComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() prj:any;
  ProjectId!:string;
  ProjectName!:string;
  ProjectDescription!: string;
  DateOfStart!: string;
  Deadline!: string;
  Status!: string;

  StatusList!:any[];

  ngOnInit(): void {
    this.ProjectId=this.prj.ProjectId;
    this.ProjectName=this.prj.ProjectName;
    this.ProjectDescription=this.prj.ProjectDescription;
    this.DateOfStart=this.prj.DateOfStart;
    this.Deadline=this.prj.Deadline;
    this.Status=this.prj.Status;

    this.loadProjectList();
  }


  loadProjectList(){
    this.service.GetStatus().subscribe((data:any)=>{
      this.StatusList=data;
    })
  }

  addProject(){
    var val = {ProjectId:this.ProjectId,
                ProjectName:this.ProjectName,
                ProjectDescription:this.ProjectDescription,
                DateOfStart:this.DateOfStart,
                Deadline:this.Deadline,
                Status:this.Status};
    this.service.addProject(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateProject(){
    var val = {ProjectId:this.ProjectId,
      ProjectName:this.ProjectName,
      ProjectDescription:this.ProjectDescription,
      DateOfStart:this.DateOfStart,
      Deadline:this.Deadline,
      Status:this.Status};
    this.service.updateProject(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-prj',
  templateUrl: './show-prj.component.html',
  styleUrls: ['./show-prj.component.css']
})
export class ShowPrjComponent implements OnInit {

  constructor(private service:SharedService) { }
 
  ProjectList:any=[];
  StatusList:any=[];

  ModalTitle!: string;
  ActivateAddEditPrjComp:boolean=false;
  prj!:any;

  ProjectIdFilter:string="";
  ProjectNameFilter:string="";
  ProjectListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshPrjList();
    this.refreshStatusList();
  }

  addClick(){
    this.prj={
      ProjectId:0,
      ProjectName:"",
      ProjectDescription:"",
      DateOfStart:"",
      Deadline:"",
      Status:""
    }
    this.ModalTitle="Add Project";
    this.ActivateAddEditPrjComp=true;
  }

  editClick(item: any){
    this.prj=item;
    this.ModalTitle="Edit Project";
    this.ActivateAddEditPrjComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteProject(item.ProjectId).subscribe(data=>{
        alert(data.toString());
        this.refreshPrjList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPrjComp=false;
    this.refreshPrjList();
  }

  refreshPrjList(){
    this.service.getPrjList().subscribe(data=>{
      this.ProjectList=data;
      this.ProjectListWithoutFilter=data;
    });
  }

  refreshStatusList(){
    this.service.getStatusList().subscribe(data=>{
      this.StatusList=data;
    });
  }

  FilterFn(){
    var ProjectIdFilter = this.ProjectIdFilter;
    var ProjectNameFilter = this.ProjectNameFilter;

    this.ProjectList = this.ProjectListWithoutFilter.filter(function (el: { ProjectId: { toString: () => string; }; ProjectName: { toString: () => string; }; }){
      return el.ProjectId.toString().toLowerCase().includes(
        ProjectIdFilter.toString().trim().toLowerCase()
      )&&
      el.ProjectName.toString().toLowerCase().includes(
        ProjectNameFilter.toString().trim().toLowerCase()
      )
  });
}

sortResult(prop: string | number,asc: any){
  this.ProjectList = this.ProjectListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}

}

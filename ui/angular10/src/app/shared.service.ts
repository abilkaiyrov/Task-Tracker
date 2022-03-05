import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getPrjList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/project');
  }

  addProject(val:any){
    return this.http.post(this.APIUrl+'/Project', val);
  }
  updateProject(val:any){
    return this.http.put(this.APIUrl+'/Project',val);
  }

  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/Project/'+val);
  }


  getTskList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Task');
  }

  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Status');
  }

  addTask(val:any){
    return this.http.post(this.APIUrl+'/Task',val);
  }

  updateTask(val:any){
    return this.http.put(this.APIUrl+'/Task',val);
  }

  deleteTask(val:any){
    return this.http.delete(this.APIUrl+'/Task/'+val);
  }

  getAllProjectNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Task/GetAllProjectNames');
  }

  GetStatus():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Task/GetStatus');
  }
}

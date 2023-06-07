import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:4000";

  get(){
    return this.http.get(this.url+"/getall");
  }
  insert(insertbody:any){
    return this.http.post(this.url+"/insert",insertbody);
  }
  edit(id:any){
    return this.http.get(this.url+"/edit/" +id);
  }
  update(updatebody:any){
    return this.http.put(this.url+"/update",updatebody);
  }
  delete(id:any){
    return this.http.put(this.url+"/delete",{id:id});
  }
}

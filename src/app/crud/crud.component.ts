import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  id:any;
  name:string='';
  age:string='';
  gender:string='';
  place:string='';

  constructor(public service:ServiceService, public router:Router, public actroute:ActivatedRoute) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.actroute.snapshot.paramMap.get('id');
    this.service.edit(id).subscribe((data:any)=>{
      console.log(data);
      this.id=data[0].id;
      this.name=data[0].username;
      this.age=data[0].age;
      this.gender=data[0].gender;
      this.place=data[0].place;
    })
  }
  
  insert(){
    let insertbody={
      username:this.name,
      age:this.age,
      gender:this.gender,
      place:this.place
    }
    console.log(insertbody);
    
    this.service.insert(insertbody).subscribe((data)=>{
      console.log(data);
      this.nextpage();
    })
  }

  update(){
    let updatebody={
      id:this.id,
      username:this.name,
      age:this.age,
      gender:this.gender,
      place:this.place
    }
    console.log(updatebody);
    this.service.update(updatebody).subscribe((data)=>{
      console.log(data);
      this.nextpage();
    })
  }

  nextpage(){
    this.router.navigate(['table']);
  }

}

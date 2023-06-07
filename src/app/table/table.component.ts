import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  getdata:any;

  constructor(public service:ServiceService, public router:Router, public actroute:ActivatedRoute) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.get();
  }

  get(){
    this.service.get().subscribe((data)=>{
      this.getdata=data;
      console.log(this.getdata);
    })
  }
  edit(id:any){
    this.router.navigate(['crud',id]);
  }
  delete(id:any){
    this.service.delete(id).subscribe((data)=>{
      console.log(data);
    })
    this.get();
  }
  


}

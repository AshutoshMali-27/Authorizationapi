import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgFor } from '@angular/common';
import { interval, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-showdetails',
  imports: [NgFor],
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.css'
})
export class ShowdetailsComponent implements OnInit {


  partydetails:any[]=[];
  pollingSubscription!: Subscription;
  constructor(private service:CommonService){}

  ngOnInit(): void {
      
   // this.getcities();

   this.startpolling();
  }


  getcities():void{
    this.service.getcity().subscribe({
      next: (data) => {
        this.partydetails=data;

      },
      error:err=>{

      }
    })
  }

  
startpolling():void{

  this.pollingSubscription=interval(1000).pipe(switchMap(()=>this.service.getcity())).subscribe({
    next:(response)=>{

      this.partydetails=response;

    },
    error:err=>{

    }
  })
}



}

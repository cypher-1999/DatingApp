import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showRegister:boolean=false;
  constructor() { }

  ngOnInit(): void {
  
  }



  cancel(event:boolean){
    this.showRegister=event;
  }

}

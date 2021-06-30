import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/users.model';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('f')loginForm:NgForm;
  model:any={}
  currentUserName:string;

  constructor(private router:Router,public accountService:AccountService,private toaster:ToastrService) { }

  ngOnInit(): void {
   
      this.accountService.currentUser$.subscribe(user=>{
      //console.log(user.username)
      if(user!==null)
      this.currentUserName=user.username;
      
    })
    
   
  }
  
  login(){
    //console.log(this.loginForm.value);
    this.accountService.login(this.model).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['members']);
     // this.loggedIn=true;
    },error=>{
      console.log(error);
      this.toaster.error('Login error: '+error.error)
      
    })
    
   // this.loginForm.reset();
    
  }
  logout(){

    this.accountService.logout();
    this.router.navigate(['']);
  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user=>{
  //   //  this.loggedIn= !!user; //turn object to boolean //mean if user === null
  //   },error=>console.log(error)
  //   )
  // }
}

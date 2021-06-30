import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  @Output('cancel')sendRegisterFalse=new EventEmitter<boolean>();
 
  constructor(private accountService:AccountService,private toaster:ToastrService) { }

  ngOnInit(): void {
    // console.log(this.users);
  }

  register(){
    this.accountService.register(this.model).subscribe((response)=>{
      console.log(response);
      this.cancel();
    },error=>{
      console.log(error);
      this.toaster.error('Sign Up error: '+error.error);
    });
  }

  cancel(){
    this.sendRegisterFalse.emit(false);
  }
 


}

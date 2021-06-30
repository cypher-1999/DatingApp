import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  @Output('cancel')sendRegisterFalse=new EventEmitter<boolean>();
 
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    // console.log(this.users);
  }

  register(){
    this.accountService.register(this.model).subscribe((response)=>{
      console.log(response);
      this.cancel();
    },error=>console.log(error));
  }

  cancel(){
    this.sendRegisterFalse.emit(false);
  }
 


}

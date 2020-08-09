import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../login.service'
import { AccountService } from '../accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoginService] 							
})
export class NewAccountComponent {

  constructor(private loginService : LoginService,
              private accountService : AccountService) {
     this.accountService.statusUpdated.subscribe(
       (status : string) => alert('New Status : ' + status)
     )           
    }

  onCreateAccount(accountName: string, accountStatus: string) {

  this.accountService.addAccount(accountName,accountStatus); 
  //this.loginService.logStatusChange(accountStatus);
  }
}
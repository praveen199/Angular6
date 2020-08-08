import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../login.service'
import { AccountService } from '../accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoginService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loginService : LoginService,
              private accountService : AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
  //   this.accountAdded.emit({
  //     name: accountName,
  //     status: accountStatus
  // });
  this.accountService.addAccount(accountName,accountStatus); 
  this.loginService.logStatusChange(accountStatus);
  }
}

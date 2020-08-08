import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoginService,AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loginService : LoginService,private accountService : AccountService) {}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id,status); 
    this.loginService.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
  }
}

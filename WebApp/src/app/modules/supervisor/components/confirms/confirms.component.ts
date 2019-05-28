import { Component, OnInit } from '@angular/core';
import { SupervisorService } from 'src/app/services/userService/supervisor.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Confirmation } from 'src/app/models/confirmation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirms',
  templateUrl: './confirms.component.html',
  styleUrls: ['./confirms.component.scss']
})
export class ConfirmsComponent implements OnInit {
  confirmationList: Confirmation[] = [];
  confirmationId = 0;
  error = null;

  constructor(private supervisorService:SupervisorService, 
              private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if(!this.auth.isLoggedIn())this.router.navigate(['login']);
    else{
      this.supervisorService.getSuggestions(this.auth.getCurrentUserId())
      .subscribe(
        (data) => {
          this.confirmationList = data;
          console.log(this.confirmationList);
      }, (error) => {
        this.error = error;
    });
    
    }
    
  }

  confirm() {

  }
}

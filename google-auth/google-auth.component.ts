import { Component, OnInit } from '@angular/core';
import {SocialUsersModel} from './social-users.model';
import {Router} from '@angular/router';
import {AuthService} from './module/auth.service';
import {SocialUser} from './module/entities';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent implements OnInit {
  socialUsers = new SocialUsersModel();
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(public OAuth: AuthService,
              private router: Router) { }
  ngOnInit() {
    this.OAuth.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
    });

    this.socialUsers = JSON.parse(localStorage.getItem('socialusers'));
    if(this.socialUsers)
    console.log(this.socialUsers.image);
  }
}

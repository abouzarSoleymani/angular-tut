import { Component, OnInit } from '@angular/core';
import {SocialUsersModel} from '../social-users.model';
import {Router} from '@angular/router';
import {AuthService} from '../module/auth.service';
import {FacebookLoginProvider, GoogleLoginProvider} from '../module/providers';
import {SocialLoginService} from '../social-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response;
  user: SocialUsersModel;
  public authorized: boolean = false;
  constructor(
    public OAuth: AuthService,
    private socialLoginService: SocialLoginService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then((socialUsers: any) => {
      if (socialUsers != null) {
        this.authorized = true;
        this.user = socialUsers;
      //  this.Savesresponse(socialUsers);
      }
    });
  }

  Savesresponse(socialUsers: SocialUsersModel) {
    this.socialLoginService.SavesResponse(socialUsers).subscribe((res: any) => {
      this.user = res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify( this.user));
    })
  }

  public signOut() {
    this.OAuth.signOut();
    this.authorized = false;
  }
}

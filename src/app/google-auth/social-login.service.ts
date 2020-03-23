import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url;
  constructor(private http: HttpClient) { }

  SavesResponse(responce) {
    this.url =  'http://localhost:64726/Api/Login/Savesresponse';
    return this.http.post(this.url, responce);
  }
}
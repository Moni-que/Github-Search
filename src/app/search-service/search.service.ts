import { Injectable } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  username:Username;
  repo:Repository;

  constructor(private http:HttpClient) { 

    this.repo = new Repository("","","",new Date())
    this.username = new Username("","",0,"")
  }
  getUserProfile(username:string){
    interface ApiResponse{
        name:string;
        html_url:string
        avatar_url:string;
        public_repositories:number;
    }
    let userUrl = "https://api.github.com/"+username+'client_id='+environment.clientId + "&client_secret="+environment.clientSecret;

    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(userUrl).toPromise().then (
        response =>{
        this.username = response;

          resolve()
        })

        error=>{
          this.username.name="User not found"

          reject(error)
          }
    })
    return promise;
  }
}

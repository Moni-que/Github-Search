import { Injectable } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  username:Username;


  constructor(private http:HttpClient) { 

    // this.repo = new Repository("","","",new Date());
    this.username = new Username(0,0,"",new Date(),"","");
  }

  getUserProfile(username:string){
    interface ApiResponse{
        name:string;
        html_url:string
        avatar_url:string;
        following:number;
        followers:number;
        created_at:Date;

    }
    let userUrl = "https://api.github.com/users/"+username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(userUrl).toPromise().then (
        response =>{
        this.username = response;
          resolve()
        },
        error=>{
          this.username.name="User not found"

          reject(error)
          })
    })
    return promise;
  }


  // getUserRepository(username:string){
  //   interface ApiResponse{
  //     name:string;
  //     description:string;
  //     languages:string;
  //     created_at:Date
      
  //   }
  //   let repoUrl = "https://api.github.com/users/"+username+'/repos ?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;
  //   let promise = new Promise<void>((resolve,reject) =>{
  //     this.http.get<ApiResponse[]>(repoUrl).toPromise().then
  //     (response => {
  //         this.repo = response;
  //         console.log(this.repo);
  //       resolve()
  //     },
  //     error=>{
  //       // this.repo.name = "We could not find any matching repositories"

  //       reject(error)
  //       })
  //     })
  //     return promise;
  // }
  getUserRepository(username):Observable<any[]>{
    let repoUrl = "https://api.github.com/users/"+ username + "/repos"
return this.http.get<any[]>(repoUrl)
  }
}
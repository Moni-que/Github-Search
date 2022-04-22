import { Component, OnInit } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:Username;
  public repo:Repository[];
  public userField:any

  constructor(public letMeSearchYou: SearchService) { 

  }
  public searchUser(){
    this.letMeSearchYou.getUserProfile(this.userField).then((success)=>{
     this.username = this.letMeSearchYou.username;
    },
    (error)=>{
      console.log(error)
    });
    this.letMeSearchYou.getUserRepository(this.userField).subscribe((data)=>{
     this.repo = data
    })
  }
  ngOnInit(): void {
  }
  
}
